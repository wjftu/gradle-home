---
sidebar_position: 3
sidebar_label: Control Flow
---

# Control Flow in Java

Control flow determines **the order in which statements are executed** in a Java program.
Java provides several control flow structures: **conditional**, **looping**, and **branching** statements.

---

### 1. Conditional Statements

#### `if`, `else if`, `else`

Used to execute code blocks based on boolean conditions.

```java
var x = 10;
if (x > 0) {
    System.out.println("Positive");
} else if (x < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}
```

#### `switch`

Used to simplify multiple `if-else` branches based on constant values.

```java
var day = 3;
switch (day) {
    case 1 -> System.out.println("Sunday");
    case 2 -> System.out.println("Monday");
    default -> System.out.println("Other day");
}
```

---

### 2. Looping Statements

`for` loop

```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```

`while` repeats as long as a condition is true.

```java
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}
```

do-while executes at least once before checking the condition.

```java
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < -1);
```

---

### 3. Branching Statements

`break` can end a loop.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i);
}
```


`continue` skips the current iteration and moves to the next.

```java
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    System.out.println(i);
}
```

`return` exits from the current method.

```java
public void greet(String name) {
    if (name == null) return;
    System.out.println("Hello, " + name);
}
```



Nested loops are loops inside loops. You can use `break` or `continue` in the inner or outer loop. If `break` or `continue` in the inner loop, it will continue or breake the inner loop


```java
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) continue;
        System.out.println("i=" + i + ", j=" + j);
    }
}
```

If you want to continue or break a specific loop, you can use a label

```java
outer : for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        if (j == 2) break outer;
        System.out.println("i=" + i + ", j=" + j);
    }
}
```
