---
sidebar_position: 7
sidebar_label: Object-Oriented Programming
---

# Object-Oriented Programming

### Classes and Objects

**Class** is blueprint  
**Object** is instance of a class  

```kotlin
class Car(var brand: String, var speed: Int) {
    fun drive() {
        println("$brand is driving at $speed km/h")
    }
}

fun main() {
    val myCar = Car("Toyota", 120)
    myCar.drive()  // Toyota is driving at 120 km/h
}
```

### Constructors

1. **Primary Constructor** (concise):

```kotlin
class Person(val name: String, var age: Int)
val p = Person("Alice", 25)
println(p.name)  // Alice
```

2. **Secondary Constructor**:

```kotlin
class Person {
    var name: String
    constructor(name: String) {
        this.name = name
    }
}
val p = Person("Bob")
println(p.name)  // Bob
```

### Inheritance
- By default, classes are **final**. Use `open` to allow inheritance.  

```kotlin
open class Animal {
    open fun sound() = println("Animal sound")
}

class Dog : Animal() {
    override fun sound() = println("Woof")
}

fun main() {
    val dog = Dog()
    dog.sound()  // Woof
}
```

### Polymorphism

- **Overloading** → same function name, different parameters  
- **Overriding** → child class changes parent function behavior  

```kotlin
open class Shape {
    open fun area(): Double = 0.0
}

class Circle(val radius: Double) : Shape() {
    override fun area() = Math.PI * radius * radius
}

fun main() {
    val shape: Shape = Circle(5.0)
    println(shape.area())  // 78.5398...
}
```

### Abstraction

Use **abstract classes** or **interfaces**.  

```kotlin
abstract class Vehicle {
    abstract fun start()
}

class Bike : Vehicle() {
    override fun start() = println("Bike started")
}

interface Drivable {
    fun drive()
}

class Car : Drivable {
    override fun drive() = println("Car driving")
}
```

### Data Classes

Special class for storing data, auto-generates `toString`, `equals`, `hashCode`, `copy`.

```kotlin
data class User(val name: String, val age: Int)

fun main() {
    val u1 = User("Alice", 25)
    val u2 = u1.copy(age = 26)
    println(u1)  // User(name=Alice, age=25)
    println(u2)  // User(name=Alice, age=26)
}
```

### Singleton (Object Declaration)

Kotlin has **`object`** keyword for singletons.  

```kotlin
object Database {
    fun connect() = println("Connected")
}

fun main() {
    Database.connect()  // Connected
}
```

### Any

In Kotlin, every class implicitly inherits from `Any`, not `Object`.

`Any` is the root of the Kotlin class hierarchy.

It’s smaller than Java’s Object (only 3 methods):

```kotlin
open class Any {
    open operator fun equals(other: Any?): Boolean
    open fun hashCode(): Int
    open fun toString(): String
}
```