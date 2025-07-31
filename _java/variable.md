---
sidebar_position: 1
---

# Variable


Variables in Java are used to store data that can be used and changed throughout a program.


Java has two main categories of variables:
- **Primitive types** (e.g., `int`, `double`, `boolean`)
- **Reference types** (e.g., `String`, arrays, objects)

### Primitive Types

There are **8 primitive types** in Java, divided into four categories:


1. **Integer Types**

| Type   | Size   | Description                  | Example         |
|--------|--------|------------------------------|------------------|
| `byte` | 1 byte | Very small integers          | `byte b = 100;`  |
| `short`| 2 bytes| Small integers               | `short s = 1000;`|
| `int`  | 4 bytes| Default integer type         | `int i = 12345;` |
| `long` | 8 bytes| Large integers               | `long l = 123456789L;` (note the `L`)



2. **Floating-Point Types**

| Type     | Size   | Description        | Example             |
|----------|--------|--------------------|----------------------|
| `float`  | 4 bytes| Single precision   | `float f = 3.14f;`   |
| `double` | 8 bytes| Double precision   | `double d = 3.14159;`|

3. **Character Type**

| Type    | Size   | Description            | Example              |
|---------|--------|------------------------|-----------------------|
| `char`  | 2 bytes| A single Unicode character | `char c = 'A';`   |


4. **Boolean Type**

| Type      | Values       | Description                 | Example              |
|-----------|--------------|-----------------------------|-----------------------|
| `boolean` | `true/false` | Logical true/false values   | `boolean isValid = true;`|

`int` and `double` are the default types for numbers.

```java
var a = 11; //int
var b = 11.0; //double
```

You cannot assign `null` to primitive types.

Primitive types are not objects, but Java provides wrapper classes (`Integer`, `Double`, etc.) if you need object behavior.

### Wrapper Classes for Primitives

| Primitive | Wrapper Class |
|-----------|----------------|
| `byte`    | `Byte`         |
| `short`   | `Short`        |
| `int`     | `Integer`      |
| `long`    | `Long`         |
| `float`   | `Float`        |
| `double`  | `Double`       |
| `char`    | `Character`    |
| `boolean` | `Boolean`      |

Java automatically converts between primitives and wrapper objects (Autoboxing and Unboxing). Wrapper Classes can be null.

```java
Integer i1 = 135; // Autoboxing
int i2 = i1; // Unboxing
Integer i3 = null;
```

This is useful when working with generic types or collections:

```java
List<Integer> list = new ArrayList<>();
list.add(10); // primitive 10 is autoboxed to Integer
```

### Casting of Primitive

Widening (Implicit Casting):

Smaller data type can be casted to larger one automatically and implicitly. Widening is safe and automatic.

```
byte → short → int → long → float → double
        ↑
       char
```

```java
byte b = 10;
int i = b;  
double d = b;  
long l = i;

char ch = 'B';
int ascii = ch;      // 66
```

Narrowing (Explicit Casting):

In contrary, larger data type can be explicitly cast to smaller data type, this may cause data loss or overflow.

```java
short s = 130;
byte b = (byte) s;  // Overflow: 130 → -126

int i = 65;
char c = (char) i;   // A

int i1 = (int) 1.2f;
int i2 = (int) 2.3d;
int i3 = (int) 34L;
float f1 = (float) 3.14;
byte b1 = (byte)
```

boolean cannot be cast to or from any other primitive type.

When you do arithmetic with mixed types, the smaller type is promoted to the largest type in the expression.

```java
int i = 10;
double d = 5.5;
double result = i + d;   // int → double
```

### Reference Types

Reference types store references to objects instead of raw values.

```java
String name = "Alice";
Scanner input = new Scanner(System.in);
Integer i = 123;
```


In Java, **reference types** refer to objects, rather than storing raw values like primitive types do.
They store a **reference (memory address)** pointing to the actual data in the heap.


You can declare a variable and assign a value in one line:

```java
int x = 10;
```

Or separately:

```java
int x;
x = 10;
```

Java is strongly typed. Java requires the variable type to match the assigned value.

```java
Integer x = 5;
x = "hello"; // ❌ Error
```

example

```java
public class VariablesExample {
    public static void main(String[] args) {
        int age = 30;
        double height = 1.75;
        boolean isStudent = false;
        String name = "John";

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
        System.out.println("Student: " + isStudent);
    }
}
```

### var and final

Java provides features like `var` and `final` to make code more expressive and safe.

`var` (Local Variable Type Inference)

Introduced in Java 10, `var` lets you declare a local variable without specifying its type explicitly.

```java
var message = "Hello, Java"; // Automatically inferred as String
var number = 123;            // Inferred as int
```

Rules for `var`:

- Only works for **local variables** (inside methods, blocks)
- The variable **must be initialized immediately**
- Still **strongly typed** — the type is just inferred by the compiler

```java
var name = "Alice";      // OK
var age;                 // ❌ Error: missing initializer
name = 123;              // ❌ Error: type mismatch (not a String)
```

`final` (Constant Reference)

Use `final` to declare a variable that **cannot be reassigned** after it’s set.

```java
final int x = 10;
x = 20; // ❌ Error: cannot assign a value to final variable
```

You can still mutate the contents of final objects:

```java
final List<String> list = new ArrayList<>();
list.add("hello");     // ✅ Allowed
list = new ArrayList<>(); // ❌ Error
```

You Can Combine Them

```java
final var score = 100; // Inferred as int, cannot be reassigned
```