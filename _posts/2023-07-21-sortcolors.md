---
title: Dutch Partitioning Problem
date: 2023-07-21 15:47:00 +0800
categories: []
tags: []     # TAG names should always be lowercase
comments: true
---
<p> Found this interesting question when doing Leetcode problems today. At the first glance, the question might seems pretty intuitive to solve by using a 2-pass brute force search, yet one of its solutions sophisticatedly solves it in one pass.</p>
![sort_color](/img/sort_colors.jpg){: w="450" h="200" }
_Problem Description_
<h3>The solution code</h3>
<p> The solution code is as follows. The idea is to use two pointers to keep track of the position of the last 0 and the first 2. Then we iterate through the array and swap the current element with the last 0 or the first 2 if the current element is 0 or 2. </p>
