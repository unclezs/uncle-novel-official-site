---
title: 面向对象的思想OOP
description: OOP(Object Oriented Programming)，面向对象程序设计(Object Oriented Programming)作为一种新方法
tags:
  - OOP
  - 面向对象
categories:
  - Java
toc: true
mathjax: false
comments: true
date: 2018-05-01 10:13:36
---

## 介绍

OOP(Object Oriented Programming)，面向对象程序设计(Object Oriented Programming)作为一种新方法，其本质是以建立模型体现出来的抽象思维过程和面向对象的方法。模型是用来反映现实世界中事物特征的。任何一个模型都不可能反映客观事物的一切具体特征，只能对事物特征和变化规律的一种抽象，且在它所涉及的范围内更普遍、更集中、更深刻地描述客体的特征。通过建立模型而达到的抽象是人们对客体认识的深化。

<img src="https://gitee.com/unclezs/image-blog/raw/master/blog/20200908111641.png"/>

## 三大特性

### 封装

隐藏对象的属性和实现细节，仅对外提供公共访问方式，将变化隔离，便于使用，提高复用性和安全性。

### 继承

继承实现了  IS-A  关系，例如 Cat 和 Animal 就是一种 IS-A 关系，因此 Cat 可以继承自 Animal，从而获得 Animal 非 private 的属性和方法。 

继承应该遵循里氏替换原则，子类对象必须能够替换掉所有父类对象。

 Cat 可以当做 Animal 来使用，也就是说可以使用 Animal 引用 Cat 对象。父类引用指向子类对象称为**向上转型** 。

```java
Animal animal = new Cat();
```

### 多态

多态分为编译时多态和运行时多态:

- 编译时多态主要指方法的重载
- 运行时多态指程序中定义的对象引用所指向的具体类型在运行期间才确定

运行时多态有三个条件:

- 继承
- 覆盖(重写)
- 向上转型

## 五大基本原则

### 单一职责原则SRP(Single Responsibility Principle)

类的功能要单一，不能包罗万象，跟杂货铺似的。

### 开放封闭原则OCP(Open－Close Principle)

一个模块对于拓展是开放的，对于修改是封闭的，想要增加功能热烈欢迎，想要修改，哼，一万个不乐意。

### 里式替换原则LSP(the Liskov Substitution Principle LSP)

子类可以替换父类出现在父类能够出现的任何地方。比如你能代表你爸去你姥姥家干活。哈哈~~

### 依赖倒置原则DIP(the Dependency Inversion Principle DIP)

高层次的模块不应该依赖于低层次的模块，他们都应该依赖于抽象。抽象不应该依赖于具体实现，具体实现应该依赖于抽象。就是你出国要说你是中国人，而不能说你是哪个村子的。比如说中国人是抽象的，下面有具体的xx省，xx市，xx县。你要依赖的是抽象的中国人，而不是你是xx村的。

### 接口分离原则ISP(the Interface Segregation Principle ISP)

设计时采用多个与特定客户类有关的接口比采用一个通用的接口要好。就比如一个手机拥有打电话，看视频，玩游戏等功能，把这几个功能拆分成不同的接口，比在一个接口里要好的多。


## OOP与面向过程（POP）的区别？

### 面向过程

就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。

**优点**：性能比面向对象好，因为类调用时需要实例化，开销比较大，比较消耗资源。
**缺点**：不易维护、不易复用、不易扩展.

## 面向对象

是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

**优点**：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护。

**缺点**：性能比面向过程差