---
sidebar_position: 5
---

# Web

The `spring-boot-starter-web` is one of the most commonly used starters in Spring Boot. It provides all the dependencies and auto-configuration needed to build web applications, including RESTful services, using Spring MVC.

### What is `spring-boot-starter-web`?

It is a **starter POM** that brings in:
- **Spring MVC** for building web applications and REST APIs
- **Jackson** for JSON serialization and deserialization
- **Validation API** (Jakarta Bean Validation)
- **Tomcat** as the default embedded servlet container (can be replaced)

Maven:

```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
Gradle:

```kotlin
dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
}
```

By adding this starter to your project, you get a full web stack ready to go.



Key Dependencies Included

```plaintext
spring-webmvc         # Spring MVC framework for web and REST
jackson-databind      # JSON processing library
validation-api        # For validating request data
tomcat-embed-core     # Embedded Tomcat server for running your app
tomcat-embed-websocket# Support for WebSocket communication
```

### Controller

A **controller** is a Java class annotated to indicate that it handles HTTP requests. It acts as an intermediary between the client (browser, mobile app, etc.) and the service layer of your application.

Types of Controllers
	
- `@Controller`:  
  Used for web applications that serve HTML pages using view technologies like Thymeleaf or JSP. Methods typically return view names.

- `@RestController`:  
  Specialized version of `@Controller` that combines `@Controller` and `@ResponseBody`. It is used for REST APIs and returns data (JSON, XML, plain text) directly in the HTTP response body.

Common Annotations
	
- **`@RestController`**  
  Declares the class as a REST API controller. Automatically serializes return values to JSON or other formats.

- **`@Controller`**  
  Declares the class as a traditional MVC controller.

- **`@RequestMapping`**  
  Maps HTTP requests to handler methods or classes. Can specify path, HTTP method, headers, and params.

- **`@GetMapping`**, **`@PostMapping`**, **`@PutMapping`**, **`@DeleteMapping`**, **`@PatchMapping`**  
  Shortcut annotations for `@RequestMapping` with specific HTTP methods (GET, POST, etc.).

- **`@PathVariable`**  
  Binds dynamic parts of the URL path to method parameters.

- **`@RequestParam`**  
  Binds query parameters or form data to method parameters.

- **`@RequestBody`**  
  Binds the HTTP request body (usually JSON) to a Java object.

- **`@ResponseBody`**  
  Indicates that the return value should be written directly to the HTTP response body (automatically applied by `@RestController`).

---

How Controllers Work:

- Spring Boot scans your application for classes annotated with `@Controller` or `@RestController`.
- It registers request mappings based on annotations like `@GetMapping` and `@PostMapping`.
- When an HTTP request arrives, Spring matches the URL and method to the appropriate handler method.
- Parameters are injected automatically based on annotations like `@PathVariable`, `@RequestParam`, and `@RequestBody`.
- The method's return value is serialized (in case of `@RestController`) or resolved as a view name (in case of `@Controller`).

Handle each Request Method

```java
@GetMapping("/get")
public String get() {
    return "get";
}
@PostMapping("/post")
public String post() {
    return "post";
}
@PutMapping("/put")
public String put() {
    return "put";
}
@DeleteMapping("/delete")
public String delete() {
    return "delete";
}
```

Test:

```bash
curl -X GET http://localhost:8080/get
curl -X POST http://localhost:8080/post
curl -X PUT http://localhost:8080/put
curl -X DELETE http://localhost:8080/delete
```

Get request param


```java
@RequestMapping("/param")
public String search(
    @RequestParam("name") String name,
    @RequestParam(value = "age", required = false, defaultValue = "0") Integer age,
    @RequestParam(value = "job", required = false) String job
) {
    return "Name: " + name + ", Age: " + age + ", Job: " + job;
}
```

Test:

```bash
curl -X GET "http://localhost:8080/param?name=jeff" 
curl -X GET "http://localhost:8080/param?name=john&age=123&job=teacher" 
curl -X POST "http://localhost:8080/param" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "name=merry"
```

Get path variable

```java
@GetMapping("/users/{id}")
public String getUser(@PathVariable("id") String id) {
    return "User ID: " + id;
}
```

Test:

```bash
curl -X GET http://localhost:8080/users/123
```

Get request body

```java
@PostMapping("/messages")
public String postMessage(@RequestBody String message) {
    return "Received message: " + message;
}
```

Test:

```bash
curl -X POST http://localhost:8080/messages -H "Content-Type: text/plain" -d "Hello API"
```

Get HTTP header

```java
@GetMapping("/headers")
public String getHeader(@RequestHeader("User-Agent") String userAgent) {
    return "User-Agent: " + userAgent;
}

@GetMapping("/all-headers")
public String getAllHeaders(@RequestHeader Map<String, String> headers) {
    return "All headers: " + headers.toString();
}
```

Test

```bash
curl -X GET http://localhost:8080/headers -H "User-Agent: curl"
curl -X GET http://localhost:8080/all-headers -H "X-Test: 123" -H "X-Token: abc"
```

Accessing Cookies

```java
@GetMapping("/cookie")
public String getCookie(@CookieValue(name = "sessionId", defaultValue = "unknown") String sessionId) {
    return "Session ID: " + sessionId;
}
```

Test:

```bash
curl -X GET http://localhost:8080/cookie --cookie "sessionId=xyz789"
```

HttpServerletRequest

HttpServerletRequest allows access to all details of the client’s HTTP request

| Method                                | Description                                   |
|--------------------------------------|-----------------------------------------------|
| `getMethod()`                        | Returns HTTP method (GET, POST, PUT, etc.)   |
| `getHeader(String name)`             | Returns specific header value                |
| `getHeaderNames()`                   | Returns all header names                     |
| `getParameter(String name)`          | Returns query/form parameter value           |
| `getParameterMap()`                  | Returns all parameters as a map              |
| `getCookies()`                       | Returns an array of cookies                  |
| `getRequestURI()`                    | Returns request URI (path)                   |
| `getQueryString()`                   | Returns raw query string                     |
| `getRemoteAddr()`                    | Returns client IP address                    |
| `getInputStream()`                   | Returns raw request body as InputStream      |
| `getReader()`                        | Returns raw request body as Reader           |


```java
@GetMapping("/request-info")
public String requestInfo(HttpServletRequest request) {
    return "Method: " + request.getMethod() +
        ", URI: " + request.getRequestURI() +
        ", Client IP: " + request.getRemoteAddr() +
        ", User Agent: " + request.getHeader("User-Agent");

}
```

Test:

```bash
$ curl -X GET http://localhost:8080/request-info
Method: GET, URI: /request-info, Client IP: 0:0:0:0:0:0:0:1, User Agent: curl/8.7.1
```

HttpServletResponse

HttpServletResponse allows you to control http response: set status code, add headers, set body, etc.

| Method                                | Description                                   |
|--------------------------------------|-----------------------------------------------|
| `setStatus(int sc)`                  | Sets the HTTP status code                    |
| `setHeader(String name, String value)`| Sets a specific header                       |
| `addHeader(String name, String value)`| Adds a header (can have multiple values)     |
| `addCookie(Cookie cookie)`           | Adds a cookie to response                    |
| `sendError(int sc, String msg)`      | Sends an error response with status code     |
| `sendRedirect(String location)`      | Redirects the client to another URL          |
| `getWriter()`                        | Writes text response                         |
| `getOutputStream()`                  | Writes binary data response                  |


```java
@GetMapping("/custom-response")
public void customResponse(HttpServletResponse response) throws IOException {
    response.setStatus(HttpServletResponse.SC_OK);
    response.setHeader("X-Custom-Header", "Demo");
    response.setContentType("text/plain");
    response.getWriter().write("This is a custom response");
}
```

Test:

```bash
$ curl -i http://localhost:8080/custom-response
HTTP/1.1 200 
X-Custom-Header: Demo
Content-Type: text/plain;charset=ISO-8859-1
Content-Length: 25
Date: Sat, 02 Aug 2025 08:22:37 GMT
```



ResponseEntity

`ResponseEntity` is a powerful class in Spring MVC used to **build HTTP responses** with:
- A **body** (data returned to the client)
- **Status code** (e.g., 200 OK, 404 Not Found)
- **Headers** (custom metadata for the response)

```java
@GetMapping("/entity1")
public ResponseEntity<Map<String, Object>> entity1() {
    Map<String, Object> data = Map.of("name", "Alice", "age", 25);
    return ResponseEntity.ok(data);
}

@GetMapping("/entity2")
public ResponseEntity<String> entity2() {
    return ResponseEntity.status(500).body("Internal Server Error");
}

@GetMapping("/entity3")
public ResponseEntity<String> entity3() {
    HttpHeaders headers = new HttpHeaders();
    headers.add("X-App-Version", "3.5");
    return ResponseEntity
            .status(HttpStatus.CREATED)
            .headers(headers)
            .body("ok");
}
```





Test:

```bash

$ curl -i http://localhost:8080/entity1
HTTP/1.1 200 
Content-Type: application/json
Transfer-Encoding: chunked
Date: Sat, 02 Aug 2025 08:36:30 GMT

{"age":25,"name":"Alice"}

$ curl -i http://localhost:8080/entity2
HTTP/1.1 500 
Content-Type: text/plain;charset=UTF-8
Content-Length: 21
Date: Sat, 02 Aug 2025 08:36:33 GMT
Connection: close

Internal Server Error

$ curl -i http://localhost:8080/entity3
HTTP/1.1 201 
X-App-Version: 3.5
Content-Type: text/plain;charset=UTF-8
Content-Length: 2
Date: Sat, 02 Aug 2025 08:36:36 GMT

ok
```

### Handle Exception Globally

`@RestControllerAdvice` is a **specialized annotation in Spring Boot** that allows you to handle **exceptions globally** across all `@RestController` classes.  
It centralizes error handling, validation messages, and custom responses instead of writing repetitive `try-catch` blocks in every controller.

Key Annotations Used Inside
	
| Annotation                       | Purpose                                                     |
|---------------------------------|-------------------------------------------------------------|
| `@ExceptionHandler`             | Defines which exception the method should handle           |
| `@ResponseStatus`               | Sets the HTTP status code for the response                 |
| `@RestControllerAdvice`         | Marks class as global REST exception handler               |
| `@ModelAttribute` *(optional)*  | Adds global model attributes (rarely used in REST APIs)     |
| `@InitBinder` *(optional)*      | Customizes request data binding globally                   |

Use `RestControllerAdvice` to handle exception globally

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ArithmeticException.class)
    public ResponseEntity<Map<String, Object>> handleArithmetic(ArithmeticException ex) {
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body(Map.of(
                "error", "Math error",
                "message", ex.getMessage(),
                "timestamp", LocalDateTime.now()
            ));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, Object>> handleIllegalArg(IllegalArgumentException ex) {
        return ResponseEntity
            .status(HttpStatus.UNPROCESSABLE_ENTITY)
            .body(Map.of(
                "error", "Invalid input",
                "message", ex.getMessage(),
                "timestamp", LocalDateTime.now()
            ));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> handleGeneric(Exception ex) {
        return ResponseEntity
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(Map.of(
                "error", "Unexpected error",
                "message", ex.getMessage(),
                "timestamp", LocalDateTime.now()
            ));
    }
}
```


Controller for test:

```java
@GetMapping("/divide")
public String divide(@RequestParam int a, @RequestParam int b) {
    return "Result: " + (a / b); // Will throw ArithmeticException if b=0
}

@GetMapping("/user")
public String user(@RequestParam String name) {
    if (name.isEmpty()) {
        throw new IllegalArgumentException("Name cannot be empty");
    }
    return "User: " + name;
}
```

Test:

```bash
# 1. Normal request
curl "http://localhost:8080/divide?a=10&b=3"
# Response: Result: 3

# 2. Division by zero (ArithmeticException)
curl "http://localhost:8080/divide?a=3&b=0"
# Response: {"message":"/ by zero","error":"Math error","timestamp":"2025-08-02T16:46:55.131077"}

# 3. Invalid user (IllegalArgumentException)
curl "http://localhost:8080/user?name="
# Response: {"message":"Name cannot be empty","error":"Invalid input","timestamp":"2025-08-02T16:47:14.079225"
```