---
sidebar_position: 5
---

# String

### Basic String Declaration  

- Use quotes to create String
- Use triple quotes """ to create raw String without escaping:

```kotlin  
val greeting: String = "Hello, Kotlin!"  
val name = "Jeff" // Type can be inferred
val multiline = """  
    This is a  
    multiline string  
"""  
```  
  
### Common String Methods in Kotlin  
  
1. `length`  

Returns the number of characters in the string.  

```kotlin  
val str = "Kotlin"  
println(str.length) // Output: 6  
```  

2. `get(index)` or `str[index]`  

Returns the character at the specified index (0-based).  

Throws `IndexOutOfBoundsException` if index is invalid.  


```kotlin  
val ch = "Kotlin"[2]  
println(ch) // Output: t  
```  

3. `substring(startIndex, endIndex)`  

Returns a substring from `startIndex` up to (but excluding) `endIndex`.  

Throws `IndexOutOfBoundsException` if indices are invalid.  

```kotlin  
val sub = "Kotlin".substring(1, 4)  
println(sub) // Output: otl  
```  

4. `contains(other: CharSequence, ignoreCase: Boolean = false)`  

Returns `true` if the string contains the specified sequence of characters.  

`ignoreCase` lets you ignore case differences.  

```kotlin  
println("Kotlin".contains("tol"))           // true  
println("Kotlin".contains("TOL", true))    // true (ignore case)  
println("Kotlin".contains("abc"))           // false  
```  

5. `startsWith(prefix: String, ignoreCase: Boolean = false)`  

Returns `true` if the string starts with the given prefix.  

```kotlin  
println("Kotlin".startsWith("Kot"))         // true  
println("Kotlin".startsWith("kot", true))  // true (ignore case)  
```  

6. `endsWith(suffix: String, ignoreCase: Boolean = false)`  

Returns `true` if the string ends with the given suffix.  

```kotlin  
println("Kotlin".endsWith("lin"))           // true  
println("Kotlin".endsWith("LIN", true))    // true (ignore case)  
```  

7. `replace(oldValue: String, newValue: String, ignoreCase: Boolean = false)`  

Returns a new string with all occurrences of `oldValue` replaced by `newValue`.  

```kotlin  
val replaced = "Kotlin is fun".replace("fun", "awesome")  
println(replaced) // Output: Kotlin is awesome  
```  

8. `toUpperCase()` and `toLowerCase()`  

Converts the string to uppercase or lowercase letters.  

```kotlin  
println("Kotlin".toUpperCase()) // Output: KOTLIN  
println("KOTLIN".toLowerCase()) // Output: kotlin  
```  

9. `trim()`  

Removes whitespace characters from the start and end of the string.  

```kotlin  
val padded = "  Kotlin  "  
println(padded.trim()) // Output: Kotlin  
```  

10. `split(delimiter: String, ignoreCase: Boolean = false, limit: Int = 0)`  

Splits the string into a list of substrings based on the delimiter.  

`ignoreCase` specifies case sensitivity; `limit` controls the number of splits.  

```kotlin  
val parts = "a,b,c".split(",")  
println(parts) // Output: [a, b, c]  
```  

11. `indexOf(substring: String, startIndex: Int = 0, ignoreCase: Boolean = false)`  

Returns the index of the first occurrence of `substring`, or `-1` if not found.  

```kotlin  
println("Kotlin".indexOf("t")) // Output: 2  
println("Kotlin".indexOf("T", ignoreCase = true)) // Output: 2  
```  

12. `lastIndexOf(substring: String, startIndex: Int = lastIndex, ignoreCase: Boolean = false)` 

Returns the index of the last occurrence of `substring`, or `-1` if not found.  

```kotlin  
println("Kotlin kotlin".lastIndexOf("kotlin", ignoreCase = true)) // Output: 7  
```  
  
### String Templates  

Kotlin supports embedding variables or expressions inside strings using `$` sign.

- Use the `$` sign followed by a variable name to insert its value into a string.  
- Use `${}` to insert an expression or when more complex evaluation is needed.  
  

```kotlin  
val name = "Kotlin"  
val age = 14  
println("Hello, $name!")              // Output: Hello, Kotlin!  
println("$name is $age years old.")  // Output: Kotlin is 10 years old.  
println("Next year, $name will be ${age + 1} years old.")  
// Output: Next year, Kotlin will be 15 years old.  
```  

You can put any valid Kotlin expression inside `${}`.  

```kotlin  
val items = listOf("apple", "banana", "cherry")  
println("The list has ${items.size} items.") // Output: The list has 3 items.  
println("First item uppercase: ${items[0].uppercase()}")  
// Output: First item uppercase: APPLE  
```  

To use a literal `$` in a string, escape it with a backslash: `\$`.  
```kotlin  
println("Price is \$10")  // Output: Price is $10  
``` 
