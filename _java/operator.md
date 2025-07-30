---
sidebar_position: 2
---

# Operator


Operators in Java are special symbols used to perform operations on variables and values.
They are grouped into several categories based on the type of operation they perform.



### Arithmetic Operators

Used to perform basic math operations.

```java
+   // Addition:       a + b
-   // Subtraction:    a - b
*   // Multiplication: a * b
/   // Division:       a / b
%   // Modulus:        a % b (remainder)
```

Example:

```java
int a = 10, b = 3;
System.out.println(a + b);  // 13
System.out.println(a - b);  // 7
System.out.println(a * b);  // 30
System.out.println(a / b);  // 3
System.out.println(a % b);  // 1
```

### 2. Relational (Comparison) Operators

Used to compare two values and return a boolean.

```java
==   // Equal to
!=   // Not equal to
>    // Greater than
<    // Less than
>=   // Greater than or equal to
<=   // Less than or equal to
```

Example:

```java
int x = 5, y = 10;
System.out.println(x == y);  // false
System.out.println(x != y);  // true
System.out.println(x > y);   // false
System.out.println(x < y);   // true
System.out.println(x >= 5);  // true
System.out.println(x <= 3);  // false
```

---

### 3. Logical Operators

Used to combine multiple boolean expressions.

```java
&&   // Logical AND
||   // Logical OR
!    // Logical NOT
```

Example:

```java
boolean p = true, q = false;
System.out.println(p && q);  // false
System.out.println(p || q);  // true
System.out.println(!p);      // false
```

---

### 4. Assignment Operators

Used to assign values to variables.

```java
=    // Assign
+=   // Add and assign        a += 5   →  a = a + 5
-=   // Subtract and assign   a -= 3   →  a = a - 3
*=   // Multiply and assign   a *= 2
/=   // Divide and assign     a /= 4
%=   // Modulus and assign    a %= 2
```

Example: 

```java
int n = 5;
n += 3;  // n = 8
n -= 2;  // n = 6
n *= 4;  // n = 24
n /= 6;  // n = 4
n %= 3;  // n = 1
System.out.println(n);  // 1
```


### 5. Unary Operators
Work with a single operand.
```java
+   // Unary plus (positive)
-   // Unary minus (negative)
++  // Increment (pre/post)
--  // Decrement (pre/post)
!   // Logical NOT
```

Example:

```java
int m = 7;
System.out.println(+m);   // 7
System.out.println(-m);   // -7
System.out.println(++m);  // 8 (pre-increment)
System.out.println(m--);  // 8 (post-decrement, then m becomes 7)
System.out.println(m);    // 7
boolean flag = false;
System.out.println(!flag); // true
```

### 6. Bitwise Operators

Operate on bits (0s and 1s).

```java
&    // AND
|    // OR
^    // XOR
~    // Bitwise complement
<<   // Left shift
>>   // Right shift
>>>  // Unsigned right shift
```

Example:

```java
int u = 5;   // 0101
int v = 3;   // 0011
System.out.println(u & v);   // 1  (0001)
System.out.println(u | v);   // 7  (0111)
System.out.println(u ^ v);   // 6  (0110)
System.out.println(~u);      // -6 (inverts bits)
System.out.println(u << 1);  // 10 (1010)
System.out.println(u >> 1);  // 2  (0010)
```

### 7. Ternary Operator

A shortcut for `if-else`:

```java
condition ? trueValue : falseValue

int max = (a > b) ? a : b;
```

Example:

```java
int a = 20, b = 15;
int max = (a > b) ? a : b;
System.out.println("Max: " + max); // Max: 20
```

### 8. instanceof Operator

Checks if an object is an instance of a class.

```java
if (obj instanceof String) {
    System.out.println("It's a string!");
}
```


Example:

```java
String text = "Hello";
System.out.println(text instanceof String);  // true
Object obj = 123;
System.out.println(obj instanceof Integer);  // true
```
