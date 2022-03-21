---
title: "HTML-Validation"
date: 2022-01-24 14:41
status: doing
tags:
- HTML
- HTML/FormValidation
---
## 不同类型的表单数据校验

在 Web 中，你可能会遇见各种不同的表单校验：

### 客户端校验

发生在浏览器端，表单数据被提交到服务器之前，这种方式相较于服务器端校验来说，用户体验更好，它能实时的反馈用户的输入校验结果，这种类型的校验可以进一步细分成下面这些方式：
 -   **JavaScript** 校验，这是可以完全自定义的实现方式；
 -   HTML5 **内置校验**，这不需要 JavaScript ，而且性能更好，但是不能像JavaScript那样可自定义。

### 服务器端校验

发生在浏览器提交数据并被服务器端程序接收之后 —— 通常服务器端校验都是发生在将数据写入数据库之前，如果数据没通过校验，则会直接从服务器端返回错误消息，并且告诉浏览器端发生错误的具体位置和原因，服务器端校验不像客户端校验那样有好的用户体验，因为它直到整个表单都提交后才能返回错误信息。但是服务器端校验是你的应用对抗错误/恶意数据的最后防线，在这之后，数据将被持久化至数据库。当今[所有的服务端框架](https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Web_frameworks)都提供了数据**校验**与**清洁**功能（让数据更安全）。

在真实的项目开发过程中，开发者一般都倾向于使用客户端校验与服务器端校验的组合校验方式以更好的保证数据的正确性与安全性。

## 使用内置表单数据校验

HTML 可以通过内置的 表单元素的[校验属性 (en-US)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation "Currently only available in English (US)")，同时利用样式变化
当一个元素校验通过时：
-   该元素将可以通过 CSS 伪类 [`:valid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:valid) 进行特殊的样式化；
-   如果用户尝试提交表单，如果没有其它的控制来阻止该操作（比如JavaScript即可阻止提交），那么该表单的数据会被提交。

如果一个元素未校验通过：

-   该元素将可以通过 CSS 伪类 [`:invalid`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:invalid) 进行特殊的样式化；
-   如果用户尝试提交表单，浏览器会展示出错误消息，并停止表单的提交。