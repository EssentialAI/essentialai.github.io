---
id: arrays1
title: Arrays Part-1
tags:
  - array-easy
slug: arrays1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page contains a total of {} questions on arrays. These questions are curated from multiple sources such as Striver's SDE sheet, Leetcode interview questions course on Udemy, Blind75 by Leetcode.


## Question 1 - [Set Matrix Zeros](https://leetcode.com/problems/set-matrix-zeroes/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

Given an $m \times n$ integer matrix `matrix`, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

Example: 1

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/>

```
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
```

Example: 2

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q12.jpg').default} width = "520px"/></div>

<br/>

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
```


  </TabItem>
  <TabItem value="orange" label="Intuition">
  <span class = 'citalic'>Question:</span> Find all 0s in the matrix (for example i=1, j=1, i-> rows, j-> colums), then replace all the values in the row i and column j with 0s.

  The initial question to the interviewer must be what will be the range of values present in the matrix. This is required because we are going to replace the 0s in the matrix with a number/string that is not present in the matrix.

 <br/>

  <h3 class = 'high'>Brute force approach:</h3>

  1. Traverse through all the elements in the matrix and find places where there are zeros. $O(M \times N)$
  2. Then traverse through rows/columns (one pass) and replace the non-zeros in the respective row/column to a string/number. (Example: "kumar", or -1)
  3. Finally, traverse through the array again and replace these string/number ("kumar" or -1) with zeros.

Total time complexity of this approach will be: O((rows $\times$ columns)$\times$(rows $+$ columns)). i.e., $O(M \times N)\times O(M+N)$

Space complexity is $O(1)$ as we are changing the values in place and not creating any other matrix.

<br/>
  
  <h3 class = 'high'>Optimized approach 1:</h3>

  1. Take two dummy arrays one with length same as number of rows and another with length as number of columns. We shall use these arrays to represent which rows or columns must be set to 0.
  2. Traverse through the matrix, whenever you find a 0 in the matrix, simply set 0 in the row array at row index and column array at column index.
  3. Finally, traverse the matrix one last time and at every index, check the index at both row array and column array.
  4. If any one of the index has the value zero, set the value in the matrix to 0.

Total time complexity of this approach will be: O((rows $\times$ columns) $+$ (rows $\times$ columns)). i.e., $O(M \times N)+ O(M \times N)$

Space complexity is $O(M) + O(N)$ as we have initialized two dummy arrays of lengths M and N.

  </TabItem>
  <TabItem value="banana" label="Code">

<h3 class = 'padd'>Brute force approach:</h3>

```python
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        rows = len(matrix)
        cols = len(matrix[0])
        
        for i in range(rows):    
            for j in range(cols):
                
                if matrix[i][j]==0:

                    for i1 in range(rows):
                        if matrix[i1][j]!=0:
                            matrix[i1][j]="Naresh" #Some string
                            
                    for j1 in range(cols):
                        if matrix[i][j1]!=0:
                            matrix[i][j1]="Naresh" #Some string
                       
        for i in range(rows):
            for j in range(cols):
                if matrix[i][j] == "Naresh":
                    matrix[i][j]=0
                    
        print(matrix)
```

  <h3 class = 'padd'>Optimized approach 1:</h3>

```python
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        rows = list('0')*len(matrix)
        cols = list('0')*len(matrix[0])
        
        for i in range(len(rows)):
            for j in range(len(cols)):
                
                if matrix[i][j]==0:
                    
                    rows[i]=0
                    cols[j]=0
                       
        for i in range(len(rows)):
            for j in range(len(cols)):
                if rows[i] == 0 or cols[j]==0:
                    matrix[i][j]=0
                    
        print(matrix)
```

  </TabItem>
</Tabs>

</div>

<br/>

## Question 2 - [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

 Given an integer `numRows`, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q21.gif').default} width = "220px"/></div>

<br/>

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

  </TabItem>
  <TabItem value="orange" label="Intuition">
  The important thing this about the solution is <span class = 'high'>Factorial</span>.

  First define the factorial function (using recursion) to find all the values required for the triangle. Then use it to find all the values. Remember the fact that the row number and the length of values in a row are same.

  The values required for the $n^{\text{th}}$ row are:
  
  $\binom{n}{0}$, $\binom{n}{1}$, $\binom{n}{2}$,...,$\binom{n}{n}$

  </TabItem>
  <TabItem value="banana" label="Code">

<h3 class = 'padd'>Code for the factorial approach:</h3>

```python
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        
        final = []
        
        def factorial(n):
            if n==0:
                return 1
            else:
                return n*factorial(n-1)
            
        for i in range(numRows):
            test = []
            for j in range(i+1):
                test.append(int((factorial(i))/(factorial(i-j)*factorial(j))))
            if len(test)!=0:
                final.append(test)
                            
        return final
```
  </TabItem>
</Tabs>

</div>

<br/>

## Question 3 - [Next Permutation](https://leetcode.com/problems/next-permutation/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

 A **permutation** of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for `arr = [1,2,3]`, the following are considered permutations of `arr: [1,2,3], [1,3,2], [3,1,2], [2,3,1]`.

<br/>

The **next permutation** of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the **next permutation** of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

<br/>

* For example, the next permutation of `arr = [1,2,3] is [1,3,2]`.
* Similarly, the next permutation of `arr = [2,3,1] is [3,1,2]`.
* While the next permutation of `arr = [3,2,1] is [1,2,3]` because `[3,2,1]` does not have a lexicographical larger rearrangement.

Given an array of integers `nums`, find the next permutation of `nums`. <span class = 'citalic'>The replacement must be in place and use only constant extra memory.</span>

<br/>

```
Input: nums = [1,2,3]
Output: [1,3,2]
```

```
Input: nums = [1,1,5]
Output: [1,5,1]
```

  </TabItem>
  <TabItem value="orange" label="Intuition">
  
We shall use [1,3,5,4,2] as the working example.

  The steps to solve the problem are:

  1. Traverse the array from behind and find the index of the first element where `arr[i] < arr[i+1]` (i=1).
  2. Traverse the array from behind again and find the index of the first element that is greater than `arr[i]` (j=3).
  3. Swap the elements at `i` and `j`. (1 and 3). This gives `[1,4,5,3,2]`.
  4. Reverse the array from `i+1` to the end. This gives `[1,4,2,3,5]`. This is the answer.

Edge case: There is no element that satisfies the first condition. This means the given permutation is the last one that can be formed using the numbers in the list. So the answer would be just the reverse of the input array.


  </TabItem>
  <TabItem value="banana" label="Code">

<h3 class = 'padd'>Code for the Optimized approach:</h3>

```python
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        
        first = "Naresh"
        second = "Kumar"

        for i in range(len(nums)-2, -1, -1):
            if nums[i]<nums[i+1]:
                first = i
                break

        #print(first)

        if first=="Naresh":
            nums[:] = reversed(nums[:])
            return nums

        for i in range(len(nums)-1, -1, -1):
            if nums[first]<nums[i]:
                second = i
                break

        #print(second)

        nums[first], nums[second] = nums[second], nums[first]
        nums[first+1:] = reversed(nums[first+1:])
```
  </TabItem>
</Tabs>

</div>

<br/>
