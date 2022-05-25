---
id: linear-regression
title: Linear Regression Explained 
slug: linear-regression
---
Linear Regression is considered to be one of the most basic Machine Learning algorithms. In fact, it is taught as a high school exercise by the name, "Finding the line of best fit". Yet, many fail to appreciate the mathematical reasoning behind the algorithm. In this article, we shall explore various ways to understand Linear Regression intuitively.

## Linear Regression Explained

*To understand what Linear Regression is, let's take a step back and discuss a high school exercise.*

We all remember the famous ohm's law, $\text{V} = \text{I} \times \text{R}$, (_where V = Voltage, I = Current and R = Resistance_). You, a high school student, are given multiple batteries, wires and a resistor (load). Your goal is to make use of these batteries and wires to find the value of resistance of the load.


<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/circuit1.png').default} width = "420px"/></div>

<br/>

To solve this problem, we make a circuit as shown above and find different values of current, $I_i$ (using ammeter) for different voltages, $V_i$ from battery. $(V_1, I_1), (V_2, I_2),...,(V_n, I_n)$. We plot these values on a graph as shown below, and find the line that (almost) passes through all the points. The slope of this line gives the value of Resistance $(\text{R})$

<br/>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/resistance1.png').default} width = "380px"/></div>

<br/>

<span class = 'high'>This is exactly the intuition behind Linear Regression. You are given a bunch of training data points with both target variable <span class= 'italic'>(resistance)</span> and independent variables <span class = 'italic'>(voltage and current)</span>. Your goal is to find the line that best fits these data points.</span> In other words, the line's equation generalizes the relationship between the target variables and independent variables.

### Formalizing Linear Regression
_Having understood the intuition behind Linear Regression, let us now re-state our problem in more general terms._

We are given a set of data points: $\{(x_1, y_1), (x_2, y_2), (x_3, y_3),...,(x_n, y_n)\}$. After plotting these points on a 2-D chart, we would like to find the line of best fit that best generalizes the relationship between $x$ and $y$.

$$
\large{\hat{y_i} = ax_i+b}
$$

### Metrics to find the best-fit line
One intuitive metric for any solution is <span class = 'italic'>minimizing the error</span>. In our case, we would like the line to pass through all the data points in an ideal scenario. However, there will be a few points that do not fall on the line as shown below. How do we formalize this error between the actual data points and the line?

<br/>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/regression_error.png').default} width = "380px"/></div>

<br/>

First intuition would be to add up errors on either sides of the line. However, a caveat to this approach is, points that are equidistant from line on either side cancel out suggesting $0$ error, while thats clearly not the case. Second intuition would be to treat error as positive values (taking modulus on the errors).

Let's proceed with this intuition. Once we have the error function for all the training points, we use calculus and find the first derivative of the error function and equate it to zero. One can see an obvious issue with our modulus approach, i.e., derivative of $|x|$ is not defined at $x=0$.

To overcome these issues with derivates, while maintaining a positive contribution of each error, we use <span class = 'high'>sum of squared residuals as the error (loss) function</span>. Another upside to this error function is that we get a smooth derivable loss function throughout.

$$
E = \sum_{i=1}^{N}(y_{i}-\hat{y_{i}})^2 = \sum_{i=1}^{N}(y_{i}-(ax_{i}+b))^2
$$

<br/>

<div align="center"><img class = 'image-rounded' align = "center" alt="Alt Text" src={require('../imgs/loss.gif').default}/></div>

<br/>

## Naive approach to solve 1-D Linear Regression

A naive approach towards solving the Linear Regression problem would be to derivate the loss function and equate it to zero to find the values of a and b. Note that we are given the data points, $\{(x_1, y_1), (x_2, y_2), (x_3, y_3),...,(x_n, y_n)\}$ and $a$, $b$ are the variables.

$$
\begin{align*}E = \sum_{i=1}^{N}(y_{i}-\hat{y_{i}})^2 &= \sum_{i=1}^{N}(y_{i}-(ax_{i}+b))^2 \\
\frac{\partial E}{\partial a}  &=
    2\sum_{i=1}^{N}(y_{i}-(ax_{i}+b))(-x_{i})
\end{align*}
$$

Equating $\frac{\partial E}{\partial a}$ to $0$, we get:

$$\begin{align}
a\sum_{i=1}^{N}x_{i}^2 +b \sum_{i=1}^{N}x_{i} = \sum_{i=1}^{N}y_{i}x_{i}
\end{align}
$$

Similarly, equating $\frac{\partial E}{\partial b}$ to $0$, we get:

$$
\begin{align}
a\sum_{i=1}^{N}x_{i} +b \sum_{i=1}^{N}1 =\sum_{i=1}^{N}y_{i}
\end{align}
$$

$$
\color{royalblue}{
\text{we have, }
\sum_{i=1}^Nx_i^2 = \bar{x^2}, \enspace \sum_{i=1}^Nx_i = \bar{x}, \enspace \sum_{i=1}^Nx_iy_i = \bar{xy}}
$$

solving $(1)$ and $(2)$ for $a$ and $b$, we get:

$$
a = \frac{\bar{xy}-\bar{x}\bar{y}}{\bar{x^2}-\bar{x}^2},\enspace b =
      \frac{\bar{y}\bar{x^2}-\bar{x}.\bar{xy}}{\bar{x^2}-\bar{x}^2}
$$

### Validating how good the line fits on the data

Using a nai