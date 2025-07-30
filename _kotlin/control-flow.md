---
sidebar_position: 3
---
# Control Flow

Control flow allows your program to make decisions and repeat actions. Kotlin provides **conditional**, **looping**, and **branching** statements similar to Java, but with a more concise and expressive syntax.



### 1. Conditional Statements

`if`, `else if`, `else`

```kotlin
val number = 10
if (number > 0) {
    println("Positive")
} else if (number < 0) {
    println("Negative")
} else {
    println("Zero")
}
```

In Kotlin, `if` can also return a value:

```kotlin
val max = if (a > b) a else b
```

`when` – Kotlin's powerful `switch`

```kotlin
val day = 2
val name = when (day) {
    1 -> "Monday"
    2 -> "Tuesday"
    3 -> "Wednesday"
    else -> "Other"
}
println(name)
```

---

### 2. Looping Statements

`for` loop

Iterate over a range or collection:

```kotlin
for (i in 1..5) {
    println(i)
}

val items = listOf("A", "B", "C")
for (item in items) {
    println(item)
}
```

`while` loop

```kotlin
var x = 5
while (x > 0) {
    println(x)
    x--
}
```

`do-while` loop

```kotlin
var y = 3
do {
    println(y)
    y--
} while (y > 0)
```



### 3. Branching Statements

`break` exits the nearest loop:

```kotlin
for (i in 1..5) {
    if (i == 3) break
    println(i)
}
```

`continue` skips current iteration:

```kotlin
for (i in 1..5) {
    if (i == 3) continue
    println(i)
}
```

`return` exits from a function:

```kotlin
fun greet(name: String?) {
    if (name == null) return
    println("Hello, $name")
}
```


### Labels with `break`, `continue`, and `return`

Lable is Used for nested control flow. With label you can break or continue a specefic loop.

```kotlin
outer@ for (i in 1..3) {
    for (j in 1..3) {
        if (j == 2) continue@outer
        println("i=$i, j=$j")
    }
}
```
