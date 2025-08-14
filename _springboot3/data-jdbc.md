---
sidebar_position: 22
---

# Spring Boot Data JDBC

`spring-boot-starter-data-jdbc` is a Spring Boot starter that provides support for using JDBC with relational databases in a Spring Boot application.

Key Features:

- Simplified JDBC Access: Provides a simpler alternative to plain JDBC while maintaining its power
- Auto-configuration: Automatically configures the necessary JDBC infrastructure
- JdbcTemplate: Includes Spring's JdbcTemplate for convenient database operations
- Transaction Management: Supports declarative transaction management
- Exception Translation: Converts database-specific exceptions to Spring's unified exception hierarchy



### Init database

Dependencies:

```kotlin
dependencies {
    implementation("org.springframework.boot:spring-boot-starter-data-jdbc")
    implementation("com.h2database:h2")
}
```

Spring Boot looks in these locations by default:

```
src/main/resources/schema.sql
src/main/resources/data.sql
```

By default, Spring Boot may skip running them if it detects JPA/Hibernate, so you explicitly enable it:

```yml
spring:
  sql:
    init:
      mode: always   # always run schema.sql and data.sql
```

Mode options:

- always: runs every time app starts
- embedded: only runs for embedded DB (H2, HSQL, Derby)
- never: disables

Init a database for test:

schema.sql

```sql
-- ========================
-- One-to-One: student - student_profile
-- ========================
CREATE TABLE student (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE student_profile (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id BIGINT NOT NULL UNIQUE,
    email VARCHAR(100),
    phone VARCHAR(20),
    FOREIGN KEY (student_id) REFERENCES student(id)
);

-- ========================
-- One-to-Many: student - enrollment
-- ========================
CREATE TABLE course (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL
);

CREATE TABLE enrollment (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    student_id BIGINT NOT NULL,
    course_id BIGINT NOT NULL,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES student(id),
    FOREIGN KEY (course_id) REFERENCES course(id)
);

CREATE TABLE teacher (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- ========================
-- Many-to-Many: course - teacher
-- ========================
CREATE TABLE course_teacher (
    course_id BIGINT NOT NULL,
    teacher_id BIGINT NOT NULL,
    PRIMARY KEY (course_id, teacher_id),
    FOREIGN KEY (course_id) REFERENCES course(id),
    FOREIGN KEY (teacher_id) REFERENCES teacher(id)
);
```

data.sql

```sql
-- Students
INSERT INTO student (name) VALUES ('Alice');
INSERT INTO student (name) VALUES ('Bob');

-- Profiles (One-to-One)
INSERT INTO student_profile (student_id, email, phone)
VALUES (1, 'alice@example.com', '123-456-7890');
INSERT INTO student_profile (student_id, email, phone)
VALUES (2, 'bob@example.com', '987-654-3210');

-- Courses
INSERT INTO course (title) VALUES ('Math 101');
INSERT INTO course (title) VALUES ('History 201');

-- Teachers
INSERT INTO teacher (name) VALUES ('Prof. Smith');
INSERT INTO teacher (name) VALUES ('Dr. Johnson');

-- Enrollments (One-to-Many)
INSERT INTO enrollment (student_id, course_id, enrollment_date) VALUES (1, 1, '2025-08-01');
INSERT INTO enrollment (student_id, course_id, enrollment_date) VALUES (1, 2, '2025-08-02');
INSERT INTO enrollment (student_id, course_id, enrollment_date) VALUES (2, 1, '2025-08-03');

-- Course-Teacher mapping (Many-to-Many)
INSERT INTO course_teacher (course_id, teacher_id) VALUES (1, 1);
INSERT INTO course_teacher (course_id, teacher_id) VALUES (1, 2);
INSERT INTO course_teacher (course_id, teacher_id) VALUES (2, 2);

```

### Jdbc Template

JdbcTemplate is a central class in Spring JDBC that wraps JDBC operations.

JdbcTemplate simplifies database operations by handling:  
- Resource management (no manual close() calls)
- Exception handling (converts SQLException to Spring’s DataAccessException)
- Boilerplate reduction (cleaner code for queries/updates)


JdbcTemplate provides methods to simplify database operations:

- query(): For SELECT operations.
- update(): For INSERT/UPDATE/DELETE.
- execute(): For any SQL execution.

JdbcTemplate uses callbacks (RowMapper, ResultSetExtractor) to map results to objects.

Database config:

Use h2 database

```yml
spring:
  datasource:
    url: jdbc:h2:mem:testdb
    driver-class-name: org.h2.Driver
    username: sa
    password:
  h2:
    console:
      enabled: true
  sql:
    init:
      mode: always
```

Entity:

Omit getter, setter, all args constructor, no arg constructor

```java
public class Student {
    private Long id;
    private String name;
}

public class StudentProfile {
    private Long id;
    private Long studentId;
    private String email;
    private String phone;
}

public class Course {
    private Long id;
    private String title;
}

public class Teacher {
    private Long id;
    private String name;
}
```

Test JdbcTemplate

```java
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class TestJdbcTemplate {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Test
    void testFindAllStudents() {
        RowMapper<Student> studentMapper = (rs, rowNum) -> {
           rs.getLong("id");
           return new Student(rs.getLong("id"), rs.getString("name"));
        };
        List<Student> students = jdbcTemplate.query("SELECT name FROM student", studentMapper);

        assertEquals(2, students.size(), "Should have 2 students");
        
        students.forEach(System.out::println);
    }

    @Test
    void testOneToOneJoinStudentProfile() {
        List<String> results = jdbcTemplate.query(
            "SELECT s.name, p.email " +
                "FROM student s JOIN student_profile p ON s.id = p.student_id",
            (rs, rowNum) -> rs.getString("name") + " - " + rs.getString("email")
        );

        assertEquals(2, results.size());
        assertTrue(results.contains("Alice - alice@example.com"));
        assertTrue(results.contains("Bob - bob@example.com"));

        results.forEach(System.out::println);
    }

    @Test
    void testOneToManyEnrollment() {
        List<String> coursesForAlice = jdbcTemplate.query(
            "SELECT c.title FROM course c " +
                "JOIN enrollment e ON c.id = e.course_id " +
                "JOIN student s ON s.id = e.student_id " +
                "WHERE s.name = ?",
            (rs, rowNum) -> rs.getString("title"),
            "Alice"
        );

        assertEquals(2, coursesForAlice.size());
        assertTrue(coursesForAlice.contains("Math 101"));
        assertTrue(coursesForAlice.contains("History 201"));

        coursesForAlice.forEach(System.out::println);
    }

    @Test
    void testManyToManyCourseTeachers() {
        List<String> teachersForMath = jdbcTemplate.query(
            "SELECT t.name FROM teacher t " +
                "JOIN course_teacher ct ON t.id = ct.teacher_id " +
                "JOIN course c ON c.id = ct.course_id " +
                "WHERE c.title = ?",
            (rs, rowNum) -> rs.getString("name"),
            "Math 101"
        );

        assertEquals(2, teachersForMath.size());
        assertTrue(teachersForMath.contains("Prof. Smith"));
        assertTrue(teachersForMath.contains("Dr. Johnson"));

        teachersForMath.forEach(System.out::println);
    }

    @Test
    void testInsertAndQueryStudent() {
        int rows = jdbcTemplate.update("INSERT INTO student (name) VALUES (?)", "Charlie");
        assertEquals(1, rows, "One row should be inserted");

        String name = jdbcTemplate.queryForObject(
            "SELECT name FROM student WHERE name = ?",
            String.class,
            "Charlie"
        );

        assertEquals("Charlie", name);
        System.out.println("Inserted student: " + name);
    }

}

```

