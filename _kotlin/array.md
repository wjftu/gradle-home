---
sidebar_position: 4
---

# Array

In Kotlin, an **array** is a collection of fixed-size, ordered elements of the same type.  
Arrays are represented by the `Array` class and have both **properties** and **functions** to work with elements.

Example:

```kotlin
val numbers = arrayOf(10, 20, 30, 40)
println(numbers[0]) // 10
```

---

### Declaring Arrays

Kotlin provides multiple ways to create arrays:

**Using arrayOf()**

```kotlin
val arr = arrayOf(1, 2, 3)
var arr2 = intArrayOf(2, 3)
val arr3 = doubleArrayOf(4.5, 5.6)
```

**Using arrayOfNulls()**

```kotlin
val arr = arrayOfNulls<String>(3)  // [null, null, null]
```

**Using Array constructor**
```kotlin
val arr = Array(5) { i -> i * 2 }  // [0, 2, 4, 6, 8]
```



---

### Primitive Type Arrays

Kotlin has **specialized array classes** for primitives (to avoid boxing overhead):

- `IntArray`  
- `DoubleArray`  
- `CharArray`  
- `BooleanArray`  


Example:
```kotlin
val arr = IntArray(3) { 5 }  // [5, 5, 5]
val nums = intArrayOf(1, 2, 3)
```

---

## 4️⃣ Accessing and Modifying Elements

Arrays use zero-based indexing.

```kotlin
val arr = arrayOf("A", "B", "C")
println(arr[1]) // B
arr[1] = "Z"
println(arr[1]) // Z
```

---

### Array Size

Use `.size` property to get the number of elements. Array size is fixed.

```kotlin
val arr = arrayOf(1, 3)
println(arr.size) // 2
```

---

### Looping Through Arrays

**A. for loop with index**
```kotlin
val arr = intArrayOf(2, 3, 4)

for (i in arr.indices) {
    println("Index $i: ${arr[i]}")
}

for (item in arr) {
    println(item)
}

arr.forEach { println(it) }
```

---

### Array Default Values

When you create an array with a fixed size:
- Numeric arrays → filled with **0**
- Boolean arrays → **false**
- Object arrays → **null**

```kotlin
val arr = arrayOfNulls<String>(3)
println(arr.joinToString()) // null, null, null
```

---

### Multidimensional Arrays

Arrays of arrays can create 2D or nD structures.

Example:
```kotlin
val matrix = Array(2) { IntArray(3) }
matrix[0][0] = 10
println(matrix[0][0])  // 10
```

---

### Useful Array Functions

Kotlin provides many extension functions on arrays:

```kotlin
val nums = intArrayOf(3, 1, 4, 2)

println(nums.first())        // 3
println(nums.last())         // 2
println(nums.maxOrNull())    // 4
println(nums.minOrNull())    // 1
println(nums.sum())          // 10
println(nums.average())      // 2.5

nums.sort()
println(nums.joinToString()) // 1, 2, 3, 4
val desc = arr.sortedArrayDescending() // 4, 3, 2, 1

println(nums.contains(3))    // true

nums.isEmpty()               // false
nums.isNotEmpty()            // true

nums.getOrNull(100)          // return null if out of bounds

println(nums.indexOf(2)) // 1
println(arr.lastIndexOf(2)) // 1
println(2 in nums)        // true
println(nums.contains(5)) // false
println(nums.count { it > 2 }) // 2

nums.reverse()                 // 4, 3, 2, 1
val doubled = nums.map{ it * 2 }  // 8, 6, 4, 2
val evens = nums.filter { it % 2 == 0}  // 4, 2

nums.forEach { println(it) }
nums.forEachIndexed { index, value ->
    println("Index $index = $value")
}
val indexed = nums.mapIndexed { i, v -> "$i:$v" }
println(indexed) 
val part = nums.sliceArray(1..2)

val list1 = nums.toList()
val list2 = nums.toMutableList()
```

---

### Differences from Java Arrays

- Arrays in Kotlin are **invariant** (`Array<String>` is not `Array<Any>`).
- No implicit widening conversions (must convert types manually).
- Many **built-in functions** (map, filter, reduce, etc.).
- Primitive arrays (`IntArray`) avoid autoboxing overhead.


