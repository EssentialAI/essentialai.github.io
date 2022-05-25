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

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/leetcode/img2.png').default} width = "520px"/></div>

<br/>

Let's now look at Code 1. In this code, we still want to find the sum of elements in an array, but the code is quite different. We have a `for` loop that traverses through the length of the array and adds values at each iteration to variable named `sum`. In this case we have N additions because for each iteration we add a value to the sum. This leads to N assignments as the sum value gets assigned for every iteration. Similarly, in a for loop we have 3N operations. Finally, we have 3 assignments in the start of the code. See above image for reference.

This means we totally have 5N+3 operations in Code 1. **This means for the problem of finding the sum of consecutive numbers in an array starting from 1, code 2 is the way to go as per time complexity.**

## Formalizing Big O Notation

Big O is simply used to formalize counting. It allows us to express how the run time grows with input. <span class = 'high'>An algorithm is $O(f(n))$ if the number of operations is less than constant multiples of $f(n)$ as n grows.</span> It allows us to describe the relation between the input to some function and the runtime of that function, how growing that input effects the compute time of the function.

* Linear $f(N) \implies f(N) = N$
* Quadratic $f(N) \implies f(N) = N^2$
* Constant $f(N) \implies f(N) = 1$

_One thing to note is that, Big O is only concerned with the worst case scenario, the upper bound._

**Polynomial Complexities** $O(N^c)$

This simply means the code snippets that contain multiple nested `for` loops. For each `for` loop, nested for loops iterate making the time complexity $O(N^c)$, where c is the number of for loops.

### Big O simplification

Consider the below code:

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/leetcode/img3.png').default} width = "520px"/></div>

<br/>

The time complexity of this code is $O(5N+3)$. However, this notation is simplified and is generalized.

* $O(aN+b) = O(N)$
* $O(500) = O(1)$
* $O(5N^2) = O(N^2)$
* $O(5N^2+3N+1) = O(N^2)$

**Exercise 1**

Find the time complexity of the below code.
```javascript
Function newPrint(n):
    Loop as i from (0 to n):
        Loop as j from (0 to n):
            print("first loop")
        
        Loop as z from (0 to n):
            print("second loop")
```

## Space Complexity

So far we've only looked at time complexity, how to analyze the relation between the input and the run time of an algorithm as the input increases. Now we are going to focus on space complexity which deals with how much additional memory do we consume to run the algorithm.

Let's start with an example:

```javascript
Function SumUpTo(arr):
    sum = 0
    n = len(arr)
    Loop as i from (o,n):
        sum+=arr[i]
    return sum
```
<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/leetcode/img4.png').default} width = "520px"/></div>

<br/>
