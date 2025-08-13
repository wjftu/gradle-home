---
sidebar_position: 21
---

# H2 Database

H2 Database is a lightweight, fast, open-source relational database written in Java. H2 Database is especially popular in development and testing because it can run entirely in memory or in a single file on disk — no separate database server needed.

Documentation: https://h2database.com/html/features.html

Typical Uses

- Development database: Avoids the need to install MySQL/PostgreSQL locally.
- Testing database: Great for JUnit tests (fast and isolated).
- Prototyping: Quickly try out JPA/Hibernate mappings without setting up infrastructure.
- Embedded database: Small apps or tools can bundle H2 inside for persistence.


JDBC URL Formats

- In-memory (clears when JVM stops): `jdbc:h2:mem:testdb`
- File-based (persists to disk): `jdbc:h2:file:./data/demo`
- Server mode (access from other apps): `jdbc:h2:tcp://localhost/~/test`

### Quick Start

Add dependency

```
runtimeOnly("com.h2database:h2")
```

Configuration

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
      path: /h2-console

```

Test

```java
jdbcTemplate.execute("CREATE TABLE people (id IDENTITY PRIMARY KEY, name VARCHAR(255), email VARCHAR(255))");

// Insert data
jdbcTemplate.update("INSERT INTO people (name, email) VALUES (?, ?)", "Alice", "alice@example.com");
jdbcTemplate.update("INSERT INTO people (name, email) VALUES (?, ?)", "Bob", "bob@example.com");

// Query data
List<People> users = jdbcTemplate.query(
    "SELECT id, name, email FROM people",
    (rs, rowNum) -> {
        People user = new People();
        user.setId(rs.getLong("id"));
        user.setName(rs.getString("name"));
        user.setEmail(rs.getString("email"));
        return user;
    }
);
log.info("users: {}", users);
```

### Compatibility Mode

H2 database can emulate the behavior of specific databases. Not all features, only a subset of the differences are implemented. H2 supports many compatibility modes such as MySQL, Oracle, PostgreSQL.

For example, Oracle compatibility mode.


jdbcUrl: `jdbc:h2:mem:testdb;MODE=Oracle;DEFAULT_NULL_ORDERING=HIGH`

Test

```java
jdbcTemplate.execute("CREATE TABLE employees (id NUMBER(6) PRIMARY KEY, name VARCHAR2(20) NOT NULL, hire_date DATE)");

jdbcTemplate.execute("CREATE SEQUENCE employees_seq START WITH 1 INCREMENT BY 1 NOCACHE NOCYCLE");

int alice = jdbcTemplate.update("INSERT INTO employees (id, name, hire_date) VALUES (employees_seq.nextval, ?, ?)", "Alice", "2022-01-01");
Integer employeeName = jdbcTemplate.queryForObject(
    "SELECT 1 FROM dual",
    Integer.class
);
```