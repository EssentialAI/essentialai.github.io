---
id: mnist-4-neurons
title: Can 4 output neurons classify 10 classes?
slug: mnist-4-neurons
---

The first chapter of the <a href = "http://neuralnetworksanddeeplearning.com/chap1.html" target="_blank">"Neural Networks and Deep Learning"</a> book by Michael Nielsen teaches how to use neural networks to classify images in the MNIST dataset. While reading this chapter, a paragraph caught my eye.

:::info [Source](http://neuralnetworksanddeeplearning.com/chap1.html)

"You might wonder why we use $10$ output neurons. After all, the goal of the network
is to tell us which digit $(0,1,2,. . .,9)$ corresponds to the input image. A seemingly natural
way of doing that is `to use just 4 output neurons, treating each neuron as taking on a binary
value, depending on whether the neuron’s output is closer to 0 or to 1.` Four neurons are
enough to encode the answer, since $2^4 = 16$ is more than the $10$ possible values for the input
digit. Why should our network use $10$ neurons instead? Isn’t that inefficient?"

:::

In this article we shall implement a neural network with just $4$ neurons to classify $10$ classes using the above idea. `Can sigmoid activation function perform multi-class classification?` Hold that thought.

## This article:

1. Implements 4-neuron image classification model for MNIST dataset.
2. Provides reasons for difference in performance of above model and the baseline 10 neuron model.
3. Extends the implementation of 4-neuron model to 16 classes.
4. Explains reasons, possible heuristics for difference in performances.

## Introduction
Our goal here is to perform Image Classification on the MNIST dataset using a neural network. Before proceeding to the code, this section discusses how neural networks learn.

### Perceptron
A perceptron takes in several inputs, $x_1, x_2,...,x_n$ and produces a single binary output.

<!-- <div align="center">![Alt text](imgs/perceptron.svg)</div>

<div align="center"><img align = "center" alt="Alt Text" src='/imgs/perceptron.svg'/></div> -->

<div align="center"><img align = "center" alt="Alt Text" src={require('./imgs/perceptron.png').default} height = "280px" width = "260px"/></div>

<p class = 'figure_name'>Figure 1 : Perceptron</p>

A simple way is introduced to find the output of perceptron. We assign weights, $w_1, w_2,...,w_n$ to each input expressing the importance of respective inputs to the output. The perceptron’s output, $0$  or $1$ , is determined by whether the weighted sum $\sum_j w_j x_j$ is less than or greater than some `threshold value`. This equation can be re-written by introducing a bias term $b$ and classifying if the total sum is greater than or less than $0$. This is explained below in algebraic terms:

$$
\text{output} = \left\{\begin{matrix}
0 \enspace \text{ if } \sum_j w_jx_j+b \leq 0\\ 
1 \enspace \text{ if } \sum_j w_jx_j+b > 0
\end{matrix}\right.
$$

The perceptron can be thought as a unit that makes decisions by weighing up evidence.

### Sigmoid Neuron

The above form of perceptron has multiple caveats. We do not have control over the bias term $b$ as it can take any value on the number line as the numeric size of inputs changes. Additionally, a small change in the inputs can cause the perceptron to completely flip the class from $0$ to $1$. This leads to poor performance of model while training. To overcome this problem, the sum from the output is fed to a `sigmoid function`. This function is also called `an activation function`. Sigmoid functions takes any number and gives an output between $0$ and $1$. Hence $0.5$ can be used as a threshold to classify classes based on the output from sigmoid function.


<!-- <div style = "textAlign: 'center';">![test image size](imgs/perceptron.PNG)</div    > -->

$$
\sigma(z) = \frac{1}{1+e^{-z}}
$$

$$
\text{output from sigmoid} = \frac{1}{1+\text{exp}(-\sum_jw_jx_j - b)}
$$
<br/>
<div align="center"><img align = "center" alt="Alt Text" src={require('./imgs/sigmoid_step.png').default} height = "300px" width = "600px"/></div>
<br/>

The above image compares the sigmoid function with the Step function. Sigmoid is a smoothed version of step function. Step-function can be considered to represent the perceptron except for $x=0$.

## Learning process:

The smoothness introduced by the sigmoid function has a crucial advantage. The smoothness of $\sigma$ means that small changes $\Delta w_j$ in the weights and $\Delta b$ in the bias will produce a small change $\Delta \text{output}$ in the output from the neuron. The algebraic form is given by:

$$
\Delta \text{output} \approx \sum_j\frac{\partial \text{ output}}{\partial w_j}\Delta w_j+\frac{\partial\text{ output}}{\partial b}\Delta b
$$

For example, suppose the network was mistaken classifying an image as an “8” when it should be a “9”. We could figure out how to make a small change in the weights and biases so the network gets a little closer to classifying the image as a “9”. And then we’d repeat this, changing the weights and biases over and over to produce better and better output. The network would be learning.

`This is an high-level overview of the learning process.` More details about the learning process and backpropagation algorithm are saved for a future article.

## Softmax neurons:

Softmax activation function comes into picture usually in the case of multi-class classficiation. Softmax outputs the probability of each class given an (image) input. The important difference between sigmoid and softmax function is that while sigmoid function outputs confidence index of one class in binary classification, softmax provides the probability of each class.

In the case of sigmoid it is interpreted that the likelihood of a class occuring in image is proportional to the value of sigmoid function but not exactly equal to the output. This leads to the fact that softmax activation function uses categorical cross-entropy loss with equal number of neurons as the number of classes.

## Encoding image labels:
`This section is the core component of this article.`

Using binary cross-entropy loss and Sigmoid activation function gives us an output between $0$ and $1$. If $4$  such neurons are placed in the output layer of a neural network, the network yields $2$ possible outputs for every neuron. Hence we shall have $2^4 = 16$ outputs, which are more than sufficient to classify $10$ classes.

We achieve this encoding by converting the class labels in terms of `Binary Numbers`. For example $9$ can be encoded and re-labelled to $1001$. This allows us the required classification. Keep in mind the binary cross-entropy loss function because as far as each neuron is concerned it’s still a binary classification between $0$ and $1$.

## Open code in Colab

<p> class = 'bold'>The rest of the article is the python code implementing this above idea. Feel free to run this notebook in colab to edit code in real time.</p>

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)


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

```python
(X_train, y_train), (X_test, y_test) = mnist.load_data()
fig = plt.figure(figsize=(6, 6))

columns =3
rows = 3
axes = []

# printing 16 training images
for i in range(1, columns*rows +1):
    idx = np.random.randint(1, 100)
    img = X_train[idx]
    axes.append(fig.add_subplot(rows, columns, i))
    subplot_title = y_train[idx]
    axes[-1].set_title(subplot_title)
    plt.imshow(img, interpolation='nearest', cmap=plt.get_cmap('gray'))
    plt.axis('off')
    
plt.show()
```
**The below functions are used to encode image labels to binary number format.**

```python
def decimalToBinary(n):
    # converting decimal to binary
    # and removing the prefix(0b)
    test = bin(n).replace("0b", "")
    if len(test)<4:
        test = '0'*(4-len(test))+test
    return test

cache_y_train= [decimalToBinary(num) for num in y_train]
cache_y_test = [decimalToBinary(num) for num in y_test]

def final_conversion(array):
    final = []
    for i in array:
        split = []
        for j in i:
            split.append(float(j))
        final.append(np.array(split))
    return np.array(final)

y_train_custom = final_conversion(cache_y_train)
y_test_custom = final_conversion(cache_y_test)

print(len(y_train_custom))
print(len(y_test_custom))
```