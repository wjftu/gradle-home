---
sidebar_position: 4
---

# Array

An **array** is a data structure that can hold **multiple values of the same data type** in a **single variable**, instead of declaring separate variables for each value.

Arrays are **fixed size** → cannot be resized after creation.

Example of array:
```java
String[] strs = new String[]{"hello", "world"};
int[] numbers = {10, 20, 30, 40, 50};
```



### Declaring an Array

Arrays in Java are **objects**, and they require both:
- **Type of elements** (e.g., int, String)
- **Size or initialization**

Two ways to declare:

1. Declaration and then initialization

```java
int[] arr = new int[5];  // creates an array with 5 elements (default value = 0)
arr[0] = 10;
arr[1] = 20;
```

2. Declaration with values

```java
int[] arr = new int[]{10, 20, 30, 40, 50};
int[] arr2 = {1, 2, 3};  // new int[] can be infer
```



### Accessing Elements

Use **index numbers** starting from **0**.
```java
int[] arr = {1, 2, 3, 4, 5}
System.out.println(arr[0]);  // First element 1
System.out.println(arr[4]);  // Fifth element 5
System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
```



### Array Length

The `length` property gives the total number of elements (no bracket):

Array's length cannot change, if you want to change, use List instead.

```java
int[] arr = {1, 2, 4};
System.out.println(arr.length);  // Output: 3
```



### Looping Through an Array

For loop and for each loop

```java
int[] arr = {1, 4, 7};
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
for (int i: arr) {
    System.out.println(arr[i]);
}
```





### Default Values in Arrays

When you create an array without assigning values, Java fills it with **default values**:

- Numeric types → `0`
- `boolean` → `false`
- Object references → `null`

Example:
```java
String[] names = new String[3];
System.out.println(names[0]);  // null
```



### Multidimensional Arrays

Arrays can be array of arrays (like a matrix).

Example (2D array):
```java
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6, 7}
};
System.out.println(matrix[0][1]);  // Output: 2

int[][] grid = new int[2][3];  // 2 rows, 3 columns
grid[0][0] = 10;
```



### Array Utility Class (`java.util.Arrays`)

The `Arrays` class provides helpful methods for working with arrays:

```java
import java.util.Arrays;

int[] nums = {5, 2, 8};
Arrays.sort(nums);                 // Quick Sort
System.out.println(Arrays.toString(nums)); // [2, 5, 8]
Arrays.sort(nums, Collections.reverseOrder()); // reverse

int index = Arrays.binarySearch(nums, 5); // Search element, return -1 if not found
System.out.println(index); // 1

int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(a == b); // false
System.out.println(Arrays.equals(a, b));  // true


int[] nums = {1, 2, 3};
int[] copy = Arrays.copyOf(nums, 5);  // [1, 2, 3, 0, 0]
int[] part = Arrays.copyOfRange(nums, 1, 2);  // [2, 3]

Arrays.fill(nums, 7);  // [7, 7, 7]
Arrays.setAll(nums, i -> i + 1);  / [8, 8, 8];
```






### Summary

- Array stores multiple values of the same type.
- Index starts at **0**.
- Use `.length` for size.
- Can be 1D or multidimensional.
- Size is **fixed** after creation.