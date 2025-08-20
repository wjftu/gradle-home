---
sidebar_position: 6
---

# Method

Method is also called function. A **method** is a block of code that performs a specific task. You can think of it as a "mini-program" inside your class. Method helps make code reusable, organized, and readable.

###  Method Syntax
```java
modifier returnType methodName(parameterList) {
    // method body
    return value; // optional, only if returnType is not void
}
```

- **modifier** → `public`, `private`, `protected`, `static` (controls access & usage)  
- **returnType** → type of value returned (`int`, `String`, `void`, etc.)  
- **methodName** → meaningful name (camelCase style, e.g., `calculateSum`)  
- **parameterList** → input values (zero or more)  
- **method body** → logic inside the `{ }`  

Example: A Simple Method

```java
public int add(int a, int b) {
    int sum = a + b;
    return sum;
}
```
- Method name: `add`  
- Parameters: `int a, int b`  
- Return type: `int`  

Calling a Method

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        Calculator calc = new Calculator();
        int result = calc.add(5, 3);
        System.out.println("Result: " + result);
    }
}
```

### Method Type

**Instance Method (Non-static Method)**

- Belongs to an object (instance) of the class.
- Can access both instance variables and static variables.
- Must be called using an object reference.
- Can use the this keyword (refers to the current object).
- Used for behavior that depends on the object's state.

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

**Static Method**

- Belong to the class, not an object.  
- Called without creating an object.  
- Can only access static variables (cannot access instance variables directly).
- Cannot use `this` (no instance context).
- Used for utility functions that don't depend on object state.

```java
public class MathUtil {
    public static int square(int n) {
        return n * n;
    }

    public static void main(String[] args) {
        System.out.println(MathUtil.square(5));
    }
}
```

### Method Parameters & Return Values

- **Parameters**: Input values for the method.  
- **Return Value**: What the method gives back.  

Example: A method that multiplies two numbers

```java
public int multiply(int x, int y) {
    return x * y;
}
```

Void method has no return value

```java
public void greet(String name) {
    System.out.println("Hello, " + name);
}
```

Varargs

Varargs allows you to pass **zero or more arguments** of the same type to a method.  

Syntax: `type... parameterName`  

Inside the method, varargs are treated as an **array**. `int... numbers` is actually like `int[] numbers`.  

1. A method **can have only one varargs parameter**.  
2. Varargs parameter must be the **last parameter** in the method signature.  

Example:

```java
public void printAll(String... words) {
    for (String word : words) {
        System.out.println(word);
    }
}
```


### Method Overloading

- Same method name, different parameter list.  
- Return type alone cannot distinguish methods.  

```java
public int add(int a, int b) {
    return a + b;
}

public double add(double a, double b) {
    return a + b;
}
```

### Pass by Value in Java

- Java always passes **a copy of the value** to methods.  
- For objects, the reference is copied (so the object itself can be modified).  

Example with primitive:
```java
public void changeValue(int x) {
    x = 10;
}

public static void main(String[] args) {
    int a = 5;
    new Test().changeValue(a);
    System.out.println(a); // still 5
}
```

Example with object:

```java
public class Test {
    public void changeName(Person p) {
        p.name = "Alice";
    }

    public static void main(String[] args) {
        Person person = new Person("Bob");
        new Test().changeName(person);
        System.out.println(person.name); // Alice
    }
}
```
