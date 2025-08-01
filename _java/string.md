---
sidebar_position: 5
---

# String



A **String** is an **object** in Java that represents a sequence of characters. Java String uses Unicode, supporting all languages and symbols. In Java 8 and before, String uses char array to store data. From Java 9, Java uses byte array to store data. Since Java 9, compact String were introduced. If all characters are Latin-1 (ISO-8859-1), Java stores them in 1 byte per character. Otherwise, it uses UTF-16 (2-4 bytes per character).

Internally, a String object has:

```java
private final byte[] value;
private final byte coder; // 0 for Latin-1, 1 for UTF-16
```

String is immutable object, meaning once created, they cannot be changed. Since String is immutable, it can be stored in String pool and be reused to optimize memory usage. Any modification to a string results in a **new String object**.

---

### Creating Strings
Using String Literal to create a String. The String is stored in the String Pool for memory optimization. If another variable has the same literal, it reuses the same object.
```java
String str1 = "Hello World";

```

`new String()` forces creation of a new String object in heap memory, even if the literal exists in the pool. 

```java
String str2 = new String("Hello World");
```

Create a String from a char array

```java
char[] chars = {'J', 'a', 'v', 'a'};
String str3 = new String(chars);
System.out.println(str3); // Output: Java
```

Create a String from a byte array

```java
byte[] bytes = {65, 66, 67};
String str4 = new String(bytes, StandardCharsets.UTF_8);
System.out.println(str4); // Output: ABC
```

Create a String using String.valueOf() Method

```java
int num = 100;
String str6 = String.valueOf(num);
System.out.println(str6); // Output: 100
```

Create a multiline String (Java 15+)

```java
String text = """  
    Line 1  
    Line 2  
""";  
```


---
### Common String Methods


Here are some common String methods in Java with examples:  
  
1. `length()`  

Returns the length of the string (number of characters).  

```java  
String str = "Hello";  
int len = str.length(); // len = 5  
```  

2. `charAt(int index)`  

Returns the character at the specified index (0-based).  

```java  
char ch = "Hello".charAt(1); // ch = 'e'  
```  

3. `substring(int beginIndex)`  

Returns a substring starting from `beginIndex` to the end.  

```java  
String sub = "Hello".substring(2); // sub = "llo"  
```  

4. `substring(int beginIndex, int endIndex)`  

Returns a substring from `beginIndex` up to (but not including) `endIndex`.  

```java  
String sub = "Hello".substring(1, 4); // sub = "ell"  
```  

5. `indexOf(String str)`  

Returns the index of the first occurrence of the specified substring, or `-1` if not found.  

```java  
int idx = "Hello".indexOf("l"); // idx = 2  
```  

6. `lastIndexOf(String str)`  

Returns the index of the last occurrence of the specified substring, or `-1` if not found.  

```java  
int idx = "Hello".lastIndexOf("l"); // idx = 3  
```  

7. `equals(Object obj)`  

Checks if two strings have the same content (case-sensitive).  

```java  
boolean isEqual = "Hello".equals("hello"); // isEqual = false  
```  

8. `equalsIgnoreCase(String anotherString)`  

Checks if two strings have the same content ignoring case.  

```java  
boolean isEqualIgnoreCase = "Hello".equalsIgnoreCase("hello"); // true  
```  

9. `toLowerCase()`  

Converts all characters to lowercase.  

```java  
String lower = "Hello".toLowerCase(); // "hello"  
```  

10. `toUpperCase()`  

Converts all characters to uppercase.  

```java  
String upper = "Hello".toUpperCase(); // "HELLO"  
```  

11. `trim()`  

Removes leading and trailing whitespace.  

```java  
String trimmed = "  Hello  ".trim(); // "Hello"  
```  

12. `replace(CharSequence target, CharSequence replacement)`  

Replaces all occurrences of `target` with `replacement`.  

```java  
String replaced = "Hello".replace("l", "x"); // "Hexxo"  
```  

13. `split(String regex)`  

Splits the string around matches of the given regular expression.  

```java  
String[] parts = "a,b,c".split(","); // ["a", "b", "c"]  
```  

14. `startsWith(String prefix)`  

Checks if the string starts with the specified prefix.  

```java  
boolean starts = "Hello".startsWith("He"); // true  
```  

15. `endsWith(String suffix)`  

Checks if the string ends with the specified suffix.  

```java  
boolean ends = "Hello".endsWith("lo"); // true  
```  

---

### String Comparison

`==` compares **memory addresses (references)**.

`.equals()` compares **string values**.

```java
String s1 = "hello";
String s2 = new String("hello"); // create a new object in heap, even if the value exists
String s3 = String.valueOf("hello");
System.out.println(s1 == s2);      // false
System.out.println(s1.equals(s2)); // true
System.out.println(s1 == s3);      // true, reuse string from string pool
```

`equalsIgnoreCase()` checks if two strings have the same content ignoring case differences.


```java  
String a = "Hello";  
String b = "hello";  
boolean result = a.equalsIgnoreCase(b); // true  
```  

String can compare to each other lexicographically (dictionary order).  Returns 0 if equal, a negative number if the first string is less, and a positive number if greater. You can also sort a String array and put a String into an ordered container.

```java  
String a = "apple";  
String b = "banana";  
int cmp = a.compareTo(b); // negative number because "apple" < "banana"  
```  

`compareToIgnoreCase()` is same as `compareTo` but ignores case differences.  

```java  
String a = "Apple";  
String b = "apple";  
int cmp = a.compareToIgnoreCase(b); // 0, because case is ignored  
```  

---
### String Formatting

**Basic Syntax:**  
```java  
String formattedString = String.format(String format, Object... args);  
```  
  
**Common Format Specifiers:**  
- `%s` — formats strings  
- `%d` — formats decimal integers  
- `%f` — formats floating-point numbers  
- `%c` — formats characters  
- `%b` — formats boolean values  
- `%n` — platform-specific newline  

```java  
String name = "Alice";  
int age = 30;  
double score = 95.5;  
  
String result1 = String.format("Name: %s, Age: %d", name, age);  
// result1 = "Name: Alice, Age: 30"  
  
String result2 = String.format("Score: %.2f", score);  
// result2 = "Score: 95.50" (formatted to 2 decimal places)  
  
String result3 = String.format("Hello, %s!%nWelcome!", name);  
// result3 = "Hello, Alice!" + newline + "Welcome!"  
```  

**Advanced Usage:**  
- You can specify width and alignment:  
```java  
String s = String.format("|%10s|", "Hi");    // Right-align in 10 spaces: "|        Hi|"  
String s2 = String.format("|%-10s|", "Hi");  // Left-align in 10 spaces:  "|Hi        |"  
```  
- For numbers, you can add zero-padding, signs, and commas:  
```java  
String s3 = String.format("%05d", 42);       // "00042"  
String s4 = String.format("%,d", 1000000);   // "1,000,000"  
```  


### Mutable Strings (StringBuilder / StringBuffer)

String object is immutable  in Java. Every time you modify a String, a new String object is created, which can be costly in terms of memory and performance. StringBuilder and StringBuffer allow you to modify String without creating new objects, improving performance when doing many changes.

**StringBuilder**: Fast, not thread-safe.

**StringBuffer**: Thread-safe.

```java  
// Create a StringBuilder with initial content  
StringBuilder sb = new StringBuilder("Hello");  
  
// Append text  
sb.append(" World"); // "Hello World"  
  
// Insert text at a specific index  
sb.insert(5, ",");   // "Hello, World"  
  
// Replace part of the string  
sb.replace(6, 11, "Java"); // "Hello, Java"  
  
// Delete a substring  
sb.delete(5, 6); // removes the comma: "Hello Java"  
  
// Reverse the string  
sb.reverse(); // "avaJ olleH"  
  
// Convert to String  
String result = sb.toString();  
```  
- Both classes have many useful methods like `append()`, `insert()`, `replace()`, `delete()`, `reverse()`, and `toString()`.  
- Use `StringBuilder` in single-threaded contexts for better performance.  
- Use `StringBuffer` if multiple threads modify the same buffer instance concurrently.  

