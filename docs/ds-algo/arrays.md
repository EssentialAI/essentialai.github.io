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


## Question 1: [Set Matrix Zeros](https://leetcode.com/problems/set-matrix-zeroes/)

<div class = 'border'>

<!-- Description: Given an $m \times n$ integer matrix matrix, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('/docs/imgs/ds-algo/arrays/q1.jpg').default} width = "520px"/></div>

<br/> -->
<Tabs>
  <TabItem value="apple" label="Description" default>

Description: Given an $m \times n$ integer matrix `matrix`, if an element is 0, set its entire row and column to 0's. <span class = 'citalic'>You must do it in place.</span>

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

  <h2 class = 'cpadd'>Intuition 1:</h2>

  The initial question to the interviewer must be what will be the range of values present in the matrix. This is required because we are going to replace the 0s in the matrix with a number/string that is not present in the matrix.

  <h3 class = 'padd'>Brute force approach:</h3>

  1. Traverse through all the elements in the matrix and find places where there are zeros. $O(M \times N)$
  2. Then traverse through rows/columns (one pass) and replace the non-zeros in the respective row/column to a string/number. (Example: "kumar", or -1)
  3. Fianlly, traverse through the array again and replace these string/number ("kumar" or -1) with zeros.

Total time complexity of this approach will be: O((rows $\times$ columns)$\times$(rows $+$ columns)). i.e., $O(M \times N)\times O(M+N)$

Space complexity is $O(1)$ as we are changing the values in place and not creating any other matrix.
  
  <h2 class = 'cpadd'>Intuition 2:</h2>

  <h3 class = 'padd'>Optimized approach 1:</h3>

  Take two dummy arrays one with length same as number of rows and another with length as number of columns. We shall use these arrays to represent which rows or columns must be set to 0.

  1. Traverse through the matrix, whenever you find a 0 in the matrix, simply set 0 in the row array at row index and column array at column index.
  2. Finally, traverse the matrix one last time and at every index, check the index at both row array and column array.
  3. If any one of the index has the value zero, set the value in the matrix to 0.

Total time complexity of this approach will be: O((rows $\times$ columns) $+$ (rows $\times$ columns)). i.e., $O(M \times N)+ O(M \times N)$

Space complexity is $O(M) + O(N)$ as we have initialized two dummy arrays of lengths M and N.

  <h3 class = 'padd'>Optimized approach 2:</h3>

  In this approach, instead of taking two dummy arrays, we consider the first row and the first column of the given matrix as dummy arrays.

  _One important detail is that the first element is in both first row and column and this must be taken care of._

Total time complexity of this approach will be: O((rows $\times$ columns) $+$ (rows $\times$ columns)). i.e., $O(M \times N)+ O(M \times N)$

Space complexity is $O(1)$ as we are changing the values in place and not creating any other matrix.

  </TabItem>
  <TabItem value="banana" label="Code">

```python
import tensorflow as tf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from keras.datasets import mnist, fashion_mnist
from keras.models import Sequential
from keras.layers import Dense
from keras.utils import np_utils
from sklearn.utils import shuffle
```

  </TabItem>
</Tabs>

</div>