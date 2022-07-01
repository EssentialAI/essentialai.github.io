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

<br/>

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
  
<p class = 'high'>We shall use [1,3,5,4,2] as the working example.</p>

<br/>

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

## Question 4 - [Maximum Sub array](https://leetcode.com/problems/maximum-subarray/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

Given an integer array `nums`, find the contiguous **subarray** (containing at least one number) which has the **largest sum and return its sum.**

A `subarray` is a `contiguous part` of an array.

<br/>

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
```

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

  </TabItem>
  <TabItem value="orange" label="Intuition">
  <h3 class = 'high'>Brute force approach:</h3>

  1. Traverse through the array two times, one `i` and one `j`, from 0 to len(array). This is done to find all the subarrays.
  2. Then traverse between `i` to `j`, using `k`. Initialize the sum to 0 before `k`'s loop and increment the sum.
  3. If the sum of this subarray is greater than `max_sum`, update `max_sum`.

Time complexity of this approach is $O(N^3)$ and exceeds the time limit in leetcode.

  <br/>

<h3 class = 'high'>Optimized brute force approach:</h3>

* You can eliminate the last for loop by initializing sum before `j`'s loop and incrementing sum using `j` element.

Time complexity of this approach is $O(N^2)$ and exceeds the time limit in leetcode.

<br/>

<h3 class = 'high'>Kadane's algorithm:</h3>

  1. Take two varibles, `sum` and `max_sum`. Increment this sum by traversing the array. If `sum>max_sum`, then update the `max_sum`.
  2. If running `sum` less than `0`, then re-initiate sum to 0.

Time complexity of this approach is $O(N)$ and is accepted in leetcode.

  </TabItem>
  <TabItem value="banana" label="Code">

<h3 class = 'padd'>Code for the brute force approach:</h3>

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

        len1 = len(nums)
        max_sum= -1000

        for i in range(len1):
            for j in range(i, len1):
                sum1 = 0
                for k in range(i,j+1):
                    # print(k)
                    sum1+=nums[k]
                    # print("sum1 is", sum1)
                if sum1>max_sum:
                    max_sum=sum1

        print(max_sum)
```

<h3 class = 'padd'>Code for the optimized brute force:</h3>

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      
        len1 = len(nums)
        max_sum= -1000

        for i in range(len1):
            sum1=0
            for j in range(i, len1):
                sum1+=nums[j]
                if sum1>max_sum:
                    max_sum=sum1

        print(max_sum)
```

<h3 class = 'padd'>Kadane's Algorithm code:</h3>

```python
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        
        len1 = len(nums)
        max_sum= nums[0]
        sum1 = 0

        for i in range(len1):
            sum1+=nums[i]
            max_sum  = max(sum1, max_sum)
            
            if sum1<=0:
                sum1 = 0
        
        return max_sum
```
  </TabItem>
</Tabs>

</div>

<br/>


## Question 5 - [Sort Colors](https://leetcode.com/problems/sort-colors/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

Given an array `nums` with `n` objects colored red, white, or blue, sort them **in-place** so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively.

<p class = 'citalic'>You must solve this problem without using the library's sort function.</p>

<br/>

```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

  </TabItem>
  <TabItem value="orange" label="Intuition">
  <h3 class = 'high'>Brute force approach:</h3>

The important takeaway/detail here is that, the elements in the array are either `0` or `1` or `2`. In the brute force approach, just count the number of `0`, `1`, and `2` and set the elements in the first count to `0`, second count to `1` and third count to `2`.

  <br/>

<h3 class = 'high'>Optimized approach:</h3>

This algorithm is a variation of "Dutch National Flag algorithm" and it can be solved in 1 pass. i.e., $O(N)$.

<br/>

  1. We initialize `3` pointers. We place the `low` pointer at the start, `mid` pointer at the start, and `high` pointer at the end.
  2. The idea here is that all the numbers from `[0 to low-1]` are 0, and `[high-1 to end]` are 2.
  3. Whenever the `mid` pointer points to `0`, we swap the values at `low` and `mid`. Then we increment both `low` and `mid`.
  4. When `mid` points to `1`, we just increment `mid` and not `low` without any swapping.
  5. When `mid` points to `2`, we swap elements at `high` and `mid`. **We decrement `high` by 1**.

This approach takes $O(N)$ time complexity.

  </TabItem>
  <TabItem value="banana" label="Code">

<h3 class = 'padd'>Code for the brute force approach:</h3>

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        count0=0
        count1 = 0
        count2 =0
        
        for i in nums:
            if i == 0:
                count0+=1
            elif i==1:
                count1+=1
            else:
                count2+=1
                
        for i in range(count0):
            nums[i]=0
        for i in range(count1):
            nums[i+count0]=1
        for i in range(count2):
            nums[i+count0+count1]=2
```

<h3 class = 'padd'>Optimized code:</h3>

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        low = 0
        mid = 0
        high = len(nums)-1
        
        for i in range(len(nums)):
            if nums[mid] == 0:
                nums[low], nums[mid] = nums[mid], nums[low]
                low+=1
                mid+=1
            elif nums[mid] == 1:
                mid+=1
            elif nums[mid] ==2:
                nums[mid], nums[high] = nums[high], nums[mid]
                high-=1

```
  </TabItem>
</Tabs>

</div>

<br/>

## Question 6 - [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

_Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`._

<br/>

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

  </TabItem>
  <TabItem value="orange" label="Intuition">
  <h3 class = 'high'>Brute force approach:</h3>

  1. Traverse through the array two times to find the maximum difference `diff` for a given `i` and `j`. Update `diff` only when the diff exceed current value.
This method takes $O(N^2)$ time complexity and $O(1)$ space complexity. 

<h3 class = 'high'>Optimized approach:</h3>

  1. Initialize two variables `minimum`=`prices[0]` and `profit`=`0`.
  2. Update your `profit` and `minimum` based on the value at `i`.
  3. This way you will get the minimum value and the maximum profit just by traversing once.

This approach takes $O(N)$ time complexity.

  </TabItem>
  <TabItem value="banana" label="Code">

<h3 class = 'padd'>Code for the brute force approach:</h3>

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        diff = 0
        for i in range(len(prices)):
            smallest = prices[i]
            for j in range(i, len(prices)):
                if prices[j]>smallest:
                    diff = max(diff, prices[j]-smallest)

        return diff
```

<h3 class = 'padd'>Optimized code:</h3>

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        minimum = prices[0]
        
        for i in range(1, len(prices)):
            minimum = min(minimum, prices[i])
            profit = max(profit, prices[i]-minimum)
        
        return profit
```
  </TabItem>
</Tabs>

</div>

<br/>