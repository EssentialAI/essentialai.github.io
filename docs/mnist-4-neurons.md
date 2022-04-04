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

