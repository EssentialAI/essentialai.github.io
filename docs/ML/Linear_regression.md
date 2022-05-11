---
id: linear-regression
title: Linear Regression Explained 
slug: linear-regression
---
Linear Regression is considered to be one of the most basic Machine Learning algorithms. In fact, it is taught as a high school exercise by the name, "Finding the line of best fit". Yet, many fail to appreciate the mathematical reasoning behind the algorithm. In this article, we shall explore various ways to understand Linear Regression intuitively.

## This article contains
1. Linear Regression Explained.
2. 1-D Linear Regression without Gradient Descent.
3. Multiple Linear Regression using just Matrices.
4. Gradient Descent Explained.
5. Linear Regression using Gradient Descent.

## Linear Regression Explained.

*To understand what Linear Regression is, let's take a step back and discuss a high school exercise.*

We all remember the famous ohm's law, $\text{V} = \text{I} \times \text{R}$, (_where V = Voltage, I = Current and R = Resistance_). You (a high school student) are given multiple batteries, wires and a resistor (load). Your goal is to make use of these batteries and wires to find the value of resistance of the load.


<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/circuit1.png').default} height = "300px" width = "380px"/></div>

<br/>

To solve this problem, we make a circuit as shown above and find different current value (using ammeter) for different voltages from battery. $(V_1, I_1), (V_2, I_2),...,(V_n, I_n)$. We plot these values on a graph as shown below, and find the line that (almost) passes through all the points. The slope of this line gives the value of Resistance $(\text{R})$

<br/>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/resistance1.png').default} height = "300px" width = "380px"/></div>

<br/>

<span class = 'high'>This is exactly the intuition behind Linear Regression. You are given a bunch of training data points with both target variable <span class= 'italic'>(resistance)</span> and the independent variables <span class = 'italic'>(voltage and current)</span>. Your goal is to find the line that best fits these data points.</span> In other words, the line's equation generalizes the relationship between the target variables and independent variables.