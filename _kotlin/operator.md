---
sidebar_position: 2
---

# Operator



Kotlin provides a rich set of operators for performing operations on variables and values.
These include arithmetic, comparison, logical, assignment, and more.


### Arithmetic Operators

Used for basic math operations:

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)

Example::

```kotlin
val a = 10
val b = 3
println(a + b)  // 13
println(a - b)  // 7
println(a * b)  // 30
println(a / b)  // 3
println(a % b)  // 1
```



### Comparison Operators

Compare two values:
- `==` Equal to
- `!=` Not equal to
- `<`  Less than
- `>`  Greater than
- `<=` Less than or equal to
- `>=` Greater than or equal to

Example:

```kotlin
val x = 5
val y = 10
println(x == y)  // false
println(x != y)  // true
println(x > y)   // false
println(x < y)   // true
println(x >= 5)  // true
println(x <= 3)  // false
```

### Assignment Operators

Assign values or perform operation and assign:
- `=` Assign
- `+=` Add and assign
- `-=` Subtract and assign
- `*=` Multiply and assign
- `/=` Divide and assign
- `%=` Modulus and assign

Example: 

```kotlin
var i = 3  // 1
i += 2     // 5
i -= 1     // 4
i *= 2     // 8
i /= 3     // 2
i %= 3     // 2
```

### Logical Operators

Used with boolean values:
- `&&` Logical AND
- `||` Logical OR
- `!`  Logical NOT

Example:

```kotlin
val p = true
val q = false
println(p && q)  // false
println(p || q)  // true
println(!p)      // false
```

### Unary Operators

Used to perform operations like negation and increment:
- `+a` Unary plus
- `-a` Unary minus
- `++a` Pre-increment
- `a++` Post-increment
- `--a` Pre-decrement
- `a--` Post-decrement
- `!a` Logical negation

Example: 

```kotlin
var m = 7
println(+m)    // 7
println(-m)    // -7
println(++m)   // 8 (prefix increment)
println(m--)   // 8 (postfix decrement, then m becomes 7)
println(m)     // 7
val flag = false
println(!flag) // true
```

### Type Check Operators

- `is` Checks if value is of a given type
- `!is` Negated type check

Example::

```kotlin
val x: Any = "Hello"
println(x is String)  // true
```


### Elvis Operator `?:`

Used to return a default value when expression is null:

```kotlin
val name: String? = null
val displayName = name ?: "Guest"
println(displayName)  // Guest
```


### Bitwise Operators (Function form)

Unlike Java, Kotlin uses named functions for bitwise ops:
- `shl()` shift left
- `shr()` shift right
- `ushr()` unsigned shift right
- `and()`, `or()`, `xor()`, `inv()`

Example::

```kotlin
val a = 5     // 0101
val b = 3     // 0011
println(a and b)  // 1
println(a or b)   // 7
```
