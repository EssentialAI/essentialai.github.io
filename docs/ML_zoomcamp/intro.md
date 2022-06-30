---
id: zoomcamp_intro
title: Machine Learning Zoomcamp Introduction
slug: intro
---

This zoomcamp teaches the basics of Machine Learning while extending the teachings to model deployment and monitoring. This section is my personal notes from the lecture series in [youtube](https://www.youtube.com/watch?v=rowoDjPc8HU&list=PL3MmuxUbc_hIhxl5Ji8t4O6lPAOpHaCLR&index=1). These notes are made as simple as possible, while capturing the entire essence of ML Zoomcamp.

## Course Plan

1. Introduction to Machine Learning
2. Car Price Prediction model
3. Churn Prediction (Binary Classification problem)
4. Evaluation of Machine Learning models
5. Model Deployment
6. Binary Classification extended (Credit Risk prediction)
7. Midterm project
8. Image Classification
9. Serverless Deep Learning
10. Kubernetes
11. Kubeflow
12. Capstone Project
13. Article (about topic that is not covered in the course)

## Introduction to Machine Learning

Let's say you want to sell your car in a car-selling website. You enter all the details about your call, however, you are unsure about what price to put against your car. In this case you want to avoid quoting a very high amount, which would lead customers to skip your car. Additionally, you want to make sure not to quote a very low amount which would incur you a loss.

To solve this problem, the car-selling website can look at the price data from previously sold cars and recommend a price based on the details provided about the car. In this case as the price is a continuous variable, this problem can be solved using <span class= 'high'>Linear Regression.</span> Information we know about the car is termed as <span class ='high'>features</span> and the output we want to predict is called <span class = 'high'>target.</span>

Let's assume "Year of manufacturing", "Manufacturer information", "Mileage",... are some of the features that contribute to the price of the car. Using Machine Learning we can train a model to learn the patterns in data and predict the price of car based on features.

$$
\text{Features}+\text{Model} \rightarrow \text{Prediction}
$$

## Machine Learning v/s Rule-based system

Imagine you have a system for all your emails (gmail for example). Let's assume after a while users are complaning about unrelated and unsolicited emails that they do not wish to see. We want to solve this problem by developing a spam detection system (classifier) that filters out all the useless mails from user's inbox.

To solve the above problem, we can come up with some rules that indicate the mail ids or specific words that are to be used to filter spam/non-spam messages. _For example: "if subject contains "tax review" then the mail must be spam._ For such a classifier the code would look something like this:

```python
def detect_spam(email):
    if email.sender == 'promotions@online.com":
        return SPAM
    if contains(email.title, ['tax', 'review']) and domain(email.sender, 'online.com'):
        return SPAM
    else:
        return GOOD
```
One can see the caveat of the above approach. Several spam messages can easily circumvent these words and reach user's inboxes. Additionally, maintaining a list of all the possible "spam words" is not a feasible solution. Moreover, the system would incorrectly classify many genuine mails as spam just because the mails use a word in the list of "spam words". This becomes a never-ending process.

We can use Machine Learning to solve this problem. We can get the previous data of spam and non-spam mails, and we can train an ML model to learn the patterns in these emails. We can then use this model to predict whether a given mail is spam/non-spam. In this case, the model itself will come up with rules that would make a given mail spam/non-spam.

### Features explained

For the above explained spam detection ML model, features can be as simple as the "Length of the title", "Length of the body", "Sender email id" and so on. <span class = 'citalic'>In short, features are the important, independent attributes that the (ML) models use to determine their (model's) prediction.</span>

To summarize, in rule-based system, we input the rules and data (without output labels) to the system and use these rules to predict the output. In the case of Machine Learning approach, we just provide the data (with output labels) and expect the software to come up with a model that learns the rules on it's own and provides predictions for any future data points.

_This article describes the course plan for the Machine Learning zoomcamp and a high-level introduction to Machine Learning while talking about differences between ML and rule-based approaches._