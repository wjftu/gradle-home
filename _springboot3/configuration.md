---
sidebar_position: 3
---

# Configuration

Configuring a Spring Boot application can be done in multiple ways, depending on the requirements (e.g., environment-specific settings, dynamic properties, or security considerations). 

### Priority

Spring Boot Configuration Priority (Highest to Lowest)

1. Command Line Arguments

Passed via java -jar when starting the application (highest priority).



```bash
java -jar app.jar --server.port=8081 --spring.profiles.active=prod
```

2. SPRING_APPLICATION_JSON Environment Variable

A JSON-formatted configuration passed via an environment variable (rarely used).

Example:

```bash
export SPRING_APPLICATION_JSON='{"server":{"port":9090}}'
```

3. Java System Properties (-D arguments)

Set via JVM system properties using -D.

Example:

```bash
java -Dserver.port=8082 -jar app.jar
```

4. OS Environment Variables
Directly set in the operating system (must use uppercase with underscores).

Example:

```bash
export SERVER_PORT=8083
```

5. Profile-Specific Config Files `application-{profile}.yml/properties`
Loaded based on the active profile (e.g., prod, dev).

File path priority (highest to lowest):

- /config directory in the project root.
- Project root directory.
- /config directory in the classpath.
- Classpath root (lowest).

6. Default Config Files (application.yml / application.properties)

Loaded when no profile is specified (same path priority as above).

7. @PropertySource Annotation

Explicitly loads custom property files (lower priority than default configs).

Example:

```java
@SpringBootApplication
@PropertySource("classpath:custom.properties")
public class MyApp { ... }
```

8. Default Properties

Hardcoded default values in code (lowest priority).



### Configuration File

Spring Boot supports **two main configuration formats**:

- **`.properties` file**: Key-value pair format.
- **`.yml` or `.yaml` file**: Hierarchical, more readable for nested properties.

Both files are loaded automatically by Spring Boot from the **`src/main/resources`** directory and placed into the **Spring Environment**.

**application.properties**

```properties
server.port=8081
spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=admin
spring.datasource.password=secret
```

**application.yml**

```yaml
server:
  port: 8081

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: admin
    password: secret
```

Accessing Properties in Code

You can use **`@Value`** in Spring Boot to **inject property values** from `application.yml` or `application.properties` into your Spring-managed beans. You can provide a default value after column if the property is missing. You can use SpEL. Also you can use setter and constructor to inject.

```java
@Component
public class MyBean { 

    @Value("${server.port}")
    String serverPort;

    @Value("${server.port:8080}")
    String port;

    @Value("#{2 * 1024}")
    int doublePort;

    String port3;
    @Value("${server.port")
    void setPort3(String port3) {
        this.port3 = port3;
    }
}
```

Using `@ConfigurationProperties` is recommended for multiple properties

```yml
app:
  name: MyApp
  version: 1.0
  security:
    enabled: true
    token: secretkey
```


```java
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {
    private String name;
    private String version;
    private Security security;

    @Data
    public static class Security {
        private boolean enabled;
        private String token;
    }
}
```

Multiple environments

Create separate files:
- `application.yml`
- `application-dev.yml`
- `application-test.yml`
- `application-prod.yml`

Active a profile

Command Line:

```bash
java -jar app.jar --spring.profiles.active=dev
```

Environment Variable:

```bash
export SPRING_PROFILES_ACTIVE=dev
java -jar app.jar 
```

Both application.yml and application-dev.yml are activated, application-dev.yml will override configuration in application.yml

Profile-Specific Bean Loading:

```java
@Service
@Profile("dev")
public class DevService {
    // Only active in dev
}
```

