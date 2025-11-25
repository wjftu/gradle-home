---
sidebar_position: 10
---

# Spring Boot Test

`spring-boot-starter-test` is a starter dependency for Spring Boot that provides comprehensive testing support for your applications. It bundles together various testing libraries and frameworks commonly used in Spring Boot applications.

Core Testing Libraries:

- **JUnit 5** - The standard testing framework for Java
- **Spring Test & Spring Boot Test** - Utilities and integration test support for Spring applications
- **AssertJ** - Fluent assertions library
- **Hamcrest** - Matcher objects library
- **Mockito** - Mocking framework
- **JSONassert** - JSON assertion library
- **JsonPath** - JSON processing library


Maven Dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

Gradle Dependency:

```kt
dependencies {
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testRuntimeOnly("org.junit.platform:junit-platform-launcher")
}

tasks.withType<Test> {
    useJUnitPlatform()
}
```

Create simple service:

```java
@Service
public class CircleAreaService {

    @Value("${pi}")
    double PI;

    public double area(double radius) {
        if (radius < 0) {
            throw new IllegalArgumentException("radius cannot be negative");
        }
        return PI * radius * radius;
    }
}

@Service
public class CylinderVolumeService {

    private final CircleAreaService circleAreaService;

    public CylinderVolumeService(CircleAreaService circleAreaService) {
        this.circleAreaService = circleAreaService;
    }

    public double volume(double radius, double height) {
        if (height < 0) {
            throw new IllegalArgumentException("height cannot be negative");
        }
        double baseArea = circleAreaService.area(radius);
        return baseArea * height;
    }
}
```

`@SpringBootTest` is a key annotation in Spring Boot that is used for integration testing. It starts the Spring application context for tests, providing a way to test your application in a way that closely resembles how it will run in production.

Use @SpringBootTest (With Context) For:

- **Integration testing**
- **Testing Spring configuration**
- **Testing @Bean creation**
- **Testing @Conditional annotations**
- **Database transaction testing**
- **Web layer testing with MockMvc**

`@TestPropertySource` is a Spring testing annotation that allows you to define property sources specifically for test cases. It overrides or adds properties to the Environment during test execution, providing a clean way to configure test-specific properties without modifying your main configuration files.

```java
@SpringBootTest
@TestPropertySource(properties = {
    "pi=3.14",
    "server.port=8081"
})
class CircleAreaServiceTest {

    @Autowired
    CircleAreaService circleAreaService;

    @Test
    void areaShouldWork() {
        double result = circleAreaService.area(2); // π * 2^2 = 12.566...
        assertEquals(3.14 * 4, result);
    }

    @Test
    void radiusNegativeShouldThrow() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
            () -> circleAreaService.area(-1));
        assertEquals("radius cannot be negative", ex.getMessage());
    }
}
```

ReflectionTestUtils is a Spring testing utility class that provides methods for setting and getting fields, invoking methods, and other reflection-based operations in unit tests. It's particularly useful for testing scenarios where you need to bypass normal encapsulation (private fields/methods) to set up test data or verify internal state.

ReflectionTestUtils allows you to write pure unit tests without starting the Spring Boot context, making tests much faster and more focused. 

```java
class CircleAreaServiceTest2 {

    private CircleAreaService circleAreaService;

    @BeforeEach
    void setUp() {
        circleAreaService = new CircleAreaService();
        ReflectionTestUtils.setField(circleAreaService, "PI", 3.14);
    }


    @Test
    void areaShouldWork() {
        double delta = 0.000001;
        double result = circleAreaService.area(3);
        assertEquals(3.14 * 9, result, delta);
    }

    @Test
    void radiusNegativeShouldThrow() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
            () -> circleAreaService.area(-1));
        assertEquals("radius cannot be negative", ex.getMessage());
    }
}
```

Mockito

`@ExtendWith(MockitoExtension.class)` Enable Mockito support for JUnit 5  
`@Mock` Creates a mock of the class, no real implementation  
`@InjectMocks` Injects all @Mock dependencies into the class under test  


```java
@ExtendWith(MockitoExtension.class)
class CylinderVolumeServiceTest {


    @Mock
    private CircleAreaService circleAreaService;

    @InjectMocks
    private CylinderVolumeService cylinderVolumeService;

    @Test
    void testVolume() {
        when(circleAreaService.area(3)).thenReturn(27.0);

        double result = cylinderVolumeService.volume(3, 2);

        assertEquals(54.0, result);
    }
}
```


