---
sidebar_position: 1
---

# Variable

### Type Inference

In Kotlin, variables are used to **store data**, just like in Java. Kotlin makes it concise and safe by enforcing **null safety** and using **type inference**.

There are two main keywords to declare variables:



`val` – Immutable (read-only) Variable

- Declares a **read-only** variable (like `final` in Java).
- Value **cannot be reassigned** once set.
```kotlin
val name = "Kotlin"
val age: Int = 25
```



`var` – Mutable Variable

- Declares a **mutable** variable (can be reassigned).
- Good for values that change over time.
```kotlin
var counter = 0
counter += 1
```



Kotlin can **automatically infer** the type from the value.

```kotlin
val language = "Kotlin"     // inferred as String
var year = 2025             // inferred as Int
```
You can also **explicitly specify the type**:
```kotlin
val score: Double = 99.5
```



Null Safety

By default, variables **cannot hold null** values.

To allow null, use `?` after the type:

```kotlin
var name: String? = null
```

---
### ✅ Summary
| Keyword | Mutable? | Can be null? | Example                |
|---------|----------|--------------|------------------------|
| `val`   | ❌ No     | ❌ (default)  | `val x = 10`           |
| `var`   | ✅ Yes    | ❌ (default)  | `var y = "Hello"`      |
| `var?`  | ✅ Yes    | ✅ Yes        | `var z: String? = null`|


### 🧮 Primitive Types in Kotlin

Kotlin runs on the JVM and interoperates with Java, but it **does not have separate primitive types like Java**.
Instead, Kotlin has **types that are compiled to JVM primitives under the hood** for performance, but you use them as regular classes.

Kotlin's Basic Numeric Types

| Type     | Size       | Description                 | Example             |
|----------|------------|-----------------------------|---------------------|
| `Byte`   | 8 bits     | Small integer               | `val b: Byte = 10`  |
| `Short`  | 16 bits    | Short integer               | `val s: Short = 100`|
| `Int`    | 32 bits    | Default integer             | `val i: Int = 1000` |
| `Long`   | 64 bits    | Large integer               | `val l: Long = 10000L`|
| `Float`  | 32 bits    | Floating-point number       | `val f: Float = 3.14F`|
| `Double` | 64 bits    | Double precision floating   | `val d: Double = 3.1415`|

Other Basic Types

| Type      | Size       | Description               | Example               |
|-----------|------------|---------------------------|-----------------------|
| `Char`    | 16 bits    | A single Unicode character| `val c: Char = 'A'`   |
| `Boolean` | 1 bit      | true or false             | `val flag: Boolean = true`|

Important Notes

- You use Kotlin types like `Int` or `Double` just like regular classes.
- Kotlin automatically converts them to JVM primitive types when possible for better performance.
- Nullable versions (e.g., `Int?`) are **boxed as objects** and can hold `null`.

Example

```kotlin
val age: Int = 30
val temperature: Double = 36.6
val letter: Char = 'K'
val isActive: Boolean = true
```

Summary

| Kotlin Type | JVM Primitive Type |
|-------------|---------------------|
| `Int`       | `int`               |
| `Double`    | `double`            |
| `Boolean`   | `boolean`           |
| `Char`      | `char`              |

Kotlin uses conversion function to convert primitive type.

```kotlin
val x: Int = 100
val y: Long = x.toLong()
val z: Double = y.toDouble()
val pi: Double = 3.14
val piInt = pi.toInt() // 3

val c: Char = 'A'
val ascii: Int = c.code
```

### Kotlin Reference Types

In Kotlin, **reference types** refer to **objects** stored in the heap.
Unlike primitive types (which are stored as raw values), reference types store **a reference (pointer)** to an object.

---

What Are Reference Types?

Any **non-primitive type** in Kotlin is a **reference type**, such as Class, Nullable primitive types

Key Characteristics:

- Can hold `null` (if declared as nullable with `?`)
- Stored on the **heap**
- Compared by **reference** (unless overridden with `equals`)
- Point to objects rather than values

Examples

```kotlin
val name: String = "Kotlin"
val numbers: Array<Int> = arrayOf(1, 2, 3)
val list: List<String> = listOf("A", "B", "C")
val nullableAge: Int? = null // reference type, boxed
```

Reference Equality vs Structural Equality

- `===` checks if two variables point to the **same object** (reference equality)
- `==` checks if two objects have the **same value** (structural equality)

```kotlin
val a = "Kotlin"
val b = "Kotlin"
println(a === b) // true (same object from string pool)
println(a == b)  // true (same content)

val x = String(charArrayOf('K', 'o', 't', 'l', 'i', 'n'))
println(a === x) // false (different object)
println(a == x)  // true (same content)
```

Object Casting

```kotlin
val obj: Any = "Hello"
val str: String = obj as String  // casting

if (obj is String) {
    println(obj.length)  // smart casting
}

```

Summary

| Feature               | Reference Type              |
|------------------------|-----------------------------|
| Stored in             | Heap                        |
| Nullable              | ✅ Yes (with `?`)           |
| Compared with         | `==` (value), `===` (ref)   |
| Examples              | `String`, `Array`, `List`   |


