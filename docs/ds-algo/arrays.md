---
id: arrays-easy
title: Arrays Part-1
tags:
  - array-easy
slug: arrays-easy
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
  Write a code to find all the zeros in a matrix and set its corresponding row and column to zero.
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