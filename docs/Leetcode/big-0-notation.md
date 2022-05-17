---
id: l_big-o-notation
title: Big O notation
slug: big-o
---

Big O Notation is something every coder must keep in mind while writing any efficient algorithm (or any kind of algorithm per se).

_This section will contain some math._

## Goals:
1. Describe big O notation
2. Simplify big O expressions
3. Define "time complexity" and "space complexity"
4. Find out time/space complexity of different algorithms
5. Describe Logarithms

## Why big O notation?

Let's assume we have 2 implementations for a given (same) problem. How do we know which one of 2 implementations is better?

Big O notation provides us with a sort of framework to decide which implementation is better. When you are dealing with petabytes of data, efficiency matters a lot. Big O notation gives you a way to express your efficiency of the code, and helps when making trade offs between space and time. <span class = 'high'>In every interview question you will be asked to use big O notation to analyze your code solution.</span>

```python
# Code 1
nums = [1,2,3,4]
n = len(nums)
sum = 0

for i in range(0,n):
    sum+=nums[i]
print("Sum of array:", sum)
```
```python
# Code 2
nums = [1,2,3,4]
n = len(nums)
print("Sum of array:", n*(n+1)/2)
```

If you are asked to find which of the above two codes is better, you have to validate the code in terms of time and space.

Better code:
* Takes less time
* Takes less space (memory)

### Time
Let's discuss how we measure the time taken by our code. We have to come up with a measure that depends on the code itself and not on the hardware on which the code is run. One way to measure this time is to count the number of operations in the code.

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/leetcode/img1.png').default} width = "520px"/></div>

<br/>

Consider code 2 above. We have a total of 5 operations here. These operations are not dependent on the length of the array. Even if the length of the array is 1 million, we still have the same 5 operations. This means that this code has a time complexity of $O(1)$.

Let's now look at Code 1. In this code, we still want to find the sum of elements in an array, but the code is quite different. We have a `for` loop that traverses through the length of the array and adds values at each iteration to variable named `sum`.

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/leetcode/img2.png').default} width = "520px"/></div>

<br/>

