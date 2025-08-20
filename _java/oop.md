---
sidebar_position: 7
sidebar_label: Object-Oriented Programming
---

**Object-Oriented Programming** is a  programming style based on objects.  

An **object** is an entity that has:  
- **State** (data → fields/variables)
- **Behavior** (functions → methods)

Example in real life:  

A Car has:
- State: color, brand, speed  
- Behavior: drive(), brake()  

Four Pillars of OOP
1. **Encapsulation** → Hiding data & providing access via methods.  
2. **Inheritance** → Reusing fields/methods from another class.  
3. **Polymorphism** → One method, many forms (overloading/overriding).  
4. **Abstraction** → Hiding implementation details, showing only essential info.  

### Classes and Objects
- A **class** is a blueprint.  
- An **object** is an instance of a class.  

```java
// Class (blueprint)
class Car {
    String brand;
    int speed;

    void drive() {
        System.out.println(brand + " is driving at " + speed + " km/h");
    }
}

// Object (instance)
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();   // create object
        myCar.brand = "Toyota";
        myCar.speed = 120;
        myCar.drive();           // Toyota is driving at 120 km/h
    }
}
```

### Encapsulation
- Use `private` fields and `public` getters/setters to protect data.  

```java
class Person {
    private String name;   // hidden field

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Alice");
        System.out.println(p.getName());  // Alice
    }
}
```

### Inheritance
- Use `extends` to create a child class.  

```java
class Animal {
    void eat() { System.out.println("This animal eats food"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Dog barks"); }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // inherited
        d.bark(); // own method
    }
}
```

### Polymorphism
- **Method Overloading** → same method name, different parameters.  
- **Method Overriding** → child class redefines a parent method.  

```java
// Overloading
class MathUtil {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
}

// Overriding
class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}
class Cat extends Animal {
    @Override
    void sound() { System.out.println("Meow"); }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Cat(); // polymorphic reference
        a.sound();            // Meow
    }
}
```

### Abstraction
- **Abstract class** → cannot be instantiated, may have abstract methods.  
- **Interface** → defines behavior, multiple can be implemented.  

```java
// Abstract class
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double radius;
    Circle(double r) { radius = r; }
    double area() { return Math.PI * radius * radius; }
}

// Interface
interface Drawable {
    void draw();
}

class Square implements Drawable {
    public void draw() { System.out.println("Drawing a square"); }
}
```


### Object.java

- `Object` is the **superclass of all classes** in Java.  
- If you don’t explicitly extend another class, your class automatically extends `Object`.  
- Signature (simplified):
```java
public class Object {
    // methods...
}
```

Every Java object inherits these important methods:


**`toString()`**

- Returns a string representation of the object.  
- Default implementation: className@hashcode in hex.  
- You can override it.

```java
class Person {
    String name;
    Person(String name) { this.name = name; }
    @Override
    public String toString() { return "Person[name=" + name + "]"; }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person("Alice");
        System.out.println(p);  // Person[name=Alice]
    }
}
```

**`equals(Object obj)`**

- Compares **contents** of objects.  
- Default: compares references (`==`).  
- Often overridden for meaningful comparison.

```java
@Override
public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Person other = (Person) obj;
    return this.name.equals(other.name);
}
```

**`hashCode()`**

- Returns a hash code (int).  
- If you override `equals()`, you should override `hashCode()` too.

**`getClass()`**
- Returns the runtime class of the object.
```java
System.out.println(p.getClass()); // class Person
```

**`clone()`**

- Creates and returns a copy of the object.  
- Needs `implements Cloneable`.  

**`finalize()`

- Called by the garbage collector before object is destroyed.  
- Rarely used in modern Java.  

**`wait()`, `notify()`, `notifyAll()`**

- Used for thread communication (synchronization). 

Why Object Matters?

- All classes inherit these methods → **polymorphism** is possible.  
- You can write generic code using `Object` references:

```java
public void printObject(Object obj) {
    System.out.println(obj.toString());
}
```

Whenever you override equals, you must also override hashCode. If two objects are equal according to equals, then they must have the same hash code. Collections like HashMap, HashSet use hash code internally

Example: Overriding `equals` and `hashCode`
```java
class Person {
    String name;
    Person(String name) { this.name = name; }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person other = (Person) obj;
        return this.name.equals(other.name);
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }

    @Override
    public String toString() {
        return "Person[name=" + name + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        Person p1 = new Person("Alice");
        Person p2 = new Person("Alice");

        System.out.println(p1.equals(p2)); // true
        System.out.println(p1.hashCode() == p2.hashCode()); // true
        System.out.println(p1); // Person[name=Alice]
    }
}
```

Normally, you can use `Objects.hash()` to override `hashCode()` easily.

```java
@Override
public int hashCode() {
    return Objects.hash(name, age, email, address);
}
```

### Objects.java

Unlike Object (the root class of Java), Objects is a utility class introduced in Java 7

What is `Objects`?

- A **final utility class** in `java.util` package.
- Provides **static helper methods** for working with objects.
- Prevents writing common boilerplate code like null-checks, equals, hashcode, etc.
- Cannot be instantiated (constructor is private).

**Common Methods in `Objects`:**

**`Objects.equals(a, b)`**

Safe `equals` comparison (handles `null`).

```java
String s1 = null;
String s2 = "Hello";
System.out.println(Objects.equals(s1, s2)); // false
System.out.println(Objects.equals(s2, "Hello")); // true
```

**`Objects.hash(Object... values)`**

Generates hash code for multiple fields (used in overriding `hashCode`).

```java
class Person {
    String name;
    int age;
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}
```

**`Objects.toString(obj)` & `Objects.toString(obj, default)`**

Safe `toString`, no `NullPointerException`.

```java
String str = null;
System.out.println(Objects.toString(str, "default")); // prints "default"
```

**`Objects.requireNonNull(obj)`**

Throws `NullPointerException` if `obj` is null. Often used in constructor arguments.

```java
String name = null;
String result = Objects.requireNonNull(name, "Name cannot be null");
```


**`Objects.compare(a, b, comparator)`**

Null-safe comparison using a comparator.

```java
Comparator<String> cmp = String::compareTo;
System.out.println(Objects.compare("apple", "banana", cmp)); // negative
```

**`Objects.isNull(obj)` & `Objects.nonNull(obj)`**

Null-check utilities (good for streams).

```java
List<String> list = Arrays.asList("A", null, "B");
list.stream()
    .filter(Objects::nonNull)
    .forEach(System.out::println);
// prints A, B
```
