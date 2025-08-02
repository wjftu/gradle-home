---
sidebar_position: 1
---

# Spring Boot 3

Spring Boot is a framework that simplifies the development of Java applications by providing ready-to-use configurations and reducing boilerplate code. With Spring Boot 3.5, you benefit from the latest Java (17+) features, Jakarta EE 10 compatibility, improved performance, and better support for cloud-native development.


Spring Boot 3.5 is the latest stable release (as of today, August 2, 2025)

Requirement of Spring Boot 3.5:

- Java 17 or later
- Maven 3.6.3 or later
- Gradle 7.x (7.6.4 or later) or 8.x (8.4 or later)


Documentation

https://docs.spring.io/spring-boot/3.5/documentation.html

Core Spring Boot Concepts:

- Auto-configuration: How Spring Boot automatically configures your application based on the dependencies present.
- Starter Dependencies: How these simplify your build configuration by providing pre-configured sets of dependencies.
- Embedded Servers: How Spring Boot makes it easy to run applications as standalone JARs with embedded Tomcat, Jetty, or Undertow.



### Hello World

You can generate a project using Spring Initializr: https://start.spring.io/

In this tutorial I am going to use Java 17, Spring Boot 3.5 and Gradle 8.14 with kotlin DSL

build.gradle.kts

```kotlin
plugins {
    java
    id("org.springframework.boot") version "3.5.4"
    id("io.spring.dependency-management") version "1.1.7"
}

group = "com.wjftu"
version = "0.0.1-SNAPSHOT"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(17)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<Test> {
    useJUnitPlatform()
}

```

create a main class

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HelloApplication {
    public static void main(String[] args) {
        SpringApplication.run(HelloApplication.class, args);
    }
}

```

Create a controller. It will handle http request and return a String body.

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello() {
        return "Hello World!";
    }
}
```

Project Structure


```plaintext
demo/
├── src/
│   └── main/
│       └── java/
│           └── com/wjftu/
│               └── HelloApplication.java
│               └── HelloController.java
└── build.gradle.kts
```


Use gradle to start application

```
$gradle bootRun

Welcome to Gradle 8.14.3!

Here are the highlights of this release:
 - Java 24 support
 - GraalVM Native Image toolchain selection
 - Enhancements to test reporting
 - Build Authoring improvements

For more details see https://docs.gradle.org/8.14.3/release-notes.html


> Task :helloworld:bootRun

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v3.5.4)

2025-08-02T14:37:54.886+08:00  INFO 95289 --- [           main] com.wjftu.HelloApplication               : Starting HelloApplication using Java 17.0.6 with PID 95289 (/Users/wjf/wjf/workspace/springboot3.5/helloworld/build/classes/java/main started by wjf in /Users/wjf/wjf/workspace/springboot3.5/helloworld)
2025-08-02T14:37:54.887+08:00  INFO 95289 --- [           main] com.wjftu.HelloApplication               : No active profile set, falling back to 1 default profile: "default"
2025-08-02T14:37:55.168+08:00  INFO 95289 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2025-08-02T14:37:55.174+08:00  INFO 95289 --- [           main] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2025-08-02T14:37:55.174+08:00  INFO 95289 --- [           main] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.43]
2025-08-02T14:37:55.198+08:00  INFO 95289 --- [           main] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2025-08-02T14:37:55.199+08:00  INFO 95289 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 295 ms
2025-08-02T14:37:55.320+08:00  INFO 95289 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/'
2025-08-02T14:37:55.325+08:00  INFO 95289 --- [           main] com.wjftu.HelloApplication               : Started HelloApplication in 0.594 seconds (process running for 0.713)

```

Test

```
$ curl http://localhost:8080/hello
Hello World!
```

Use `gradle build` to build application

This will:
	- Compile your Java code
	- Run unit tests
	- Package the application into a JAR file located under `build/libs/`

```
gradle build
```

output: `build/libs/helloworld-0.0.1-SNAPSHOT.jar`

After building, you can run the JAR with:

```bash
java -jar build/libs/helloworld-0.0.1-SNAPSHOT.jar
```

