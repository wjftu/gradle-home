---
sidebar_position: 6
---

# Method

### Method Syntax

Method is also called function. A **method** is a block of code that performs a specific task. You can think of it as a "mini-program" inside your class. Method helps make code reusable, organized, and readable.

Keyword: `fun`  

```kotlin
fun functionName(parameters): ReturnType {
    // body
    return value
}
```

Example:

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}
```


If the function body is a single expression, you can shorten it:

```kotlin
fun add(a: Int, b: Int): Int = a + b
```

Return type can be inferred:

```kotlin
fun multiply(a: Int, b: Int) = a * b
```


If a function doesn’t return a value, its return type is `Unit` (like `void` in Java). You can omit `: Unit`.

```kotlin
fun greet(name: String): Unit {
    println("Hello, $name")
}

fun greetShort(name: String) {
    println("Hello, $name")
}
```


- Functions can have **default values** for parameters.

```kotlin
fun greet(name: String = "World") {
    println("Hello, $name")
}

fun main() {
    greet()         // Hello, World
    greet("Alice")  // Hello, Alice
}
```

You can call functions using parameter names (makes code readable).

```kotlin
fun printInfo(name: String, age: Int) {
    println("$name is $age years old")
}

fun main() {
    printInfo(age = 25, name = "Bob")
}
```

### Varargs (Variable Number of Arguments)

- Use `vararg` to accept multiple values.

```kotlin
fun sum(vararg numbers: Int): Int {
    var result = 0
    for (n in numbers) {
        result += n
    }
    return result
}

fun main() {
    println(sum(1, 2, 3, 4)) // 10
}
```

Passing an Array to Varargs

If you already have an array, you need to use the **spread operator** `*`.

```kotlin
fun printAll(vararg items: String) {
    for (item in items) {
        println(item)
    }
}

fun main() {
    val fruits = arrayOf("Apple", "Banana", "Cherry")
    printAll(*fruits)   // use * to expand the array
}
```

### Overloading Functions

Just like Java, same name but different parameter list.

```kotlin
fun area(radius: Double) = 3.14 * radius * radius
fun area(length: Int, width: Int) = length * width
```


### Top-Level Functions

In Kotlin, you don’t need a class—functions can exist **at the top level** in a file.

```kotlin
fun sayHello() = println("Hello!")

fun main() {
    sayHello()
}
```


### Member Functions (Inside a Class)
- Functions inside a class are called **member functions**.

```kotlin
class Calculator {
    fun add(a: Int, b: Int) = a + b
}

fun main() {
    val calc = Calculator()
    println(calc.add(3, 5))
}
```
kotlin

### Extension Functions
- You can **add new functions to existing classes** without modifying them.

```kotlin
fun String.reverse(): String {
    return this.reversed()
}

fun main() {
    println("Kotlin".reverse()) // niltoK
}
```


### 11. Inline Functions
- `inline` improves performance for small functions, especially with lambdas.

```kotlin
inline fun runTwice(action: () -> Unit) {
    action()
    action()
}

fun main() {
    runTwice { println("Hello") }
}
```


### 12. Higher-Order Functions
- Functions can take other functions as parameters.

```kotlin
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

fun main() {
    val sum = operate(3, 4) { x, y -> x + y }
    val product = operate(3, 4) { x, y -> x * y }
    println("Sum: $sum, Product: $product")
}
```
✅ So in Kotlin:

Functions are first-class citizens (can be stored in variables, passed around, returned).

More powerful and concise than Java methods.