---
id: supervised-ml
title: Supervised Machine Learning
slug: supervised-ml
---

In the previous article, we have introduced Machine Learning for the prediction of car prices using past data. In this case, both the prices and the features of the cars were known. This is an example of "Supervised Machine Learning". This is because, while training the model is shown both the data points and the labels.

This implies that the previous example of "spam prediction" also falls under supervised machine learning.

$$
\text{Feature Matrix}+\text{weights} \rightarrow \text{Predictions}
$$

Feature Matrix is a 2-dimensional array and Output/Prediction is a vector. We want to find the function $g(X)$ that best maps inputs to the target variable $y$. This holds true for both Regression (predicting continuous variable) and also classification (predicting a class).

$$
g(X) \approx y
$$

Ranking is another supervised machine learning problem, that is not widely known. Example: Recommender systems. Based on the user, the function tries to rank the items in the order of user's preferences (by assigning a score). This can also be used to rank web pages during web search.



