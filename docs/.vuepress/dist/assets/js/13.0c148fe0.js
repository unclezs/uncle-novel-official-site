(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{368:function(t,a,s){"use strict";s.r(a);var e=s(42),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("OOP(Object Oriented Programming)，面向对象程序设计(Object Oriented Programming)作为一种新方法，其本质是以建立模型体现出来的抽象思维过程和面向对象的方法。模型是用来反映现实世界中事物特征的。任何一个模型都不可能反映客观事物的一切具体特征，只能对事物特征和变化规律的一种抽象，且在它所涉及的范围内更普遍、更集中、更深刻地描述客体的特征。通过建立模型而达到的抽象是人们对客体认识的深化。")]),t._v(" "),s("img",{attrs:{src:"https://gitee.com/unclezs/image-blog/raw/master/blog/20200908111641.png"}}),t._v(" "),s("h2",{attrs:{id:"三大特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三大特性"}},[t._v("#")]),t._v(" 三大特性")]),t._v(" "),s("h3",{attrs:{id:"封装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),s("p",[t._v("隐藏对象的属性和实现细节，仅对外提供公共访问方式，将变化隔离，便于使用，提高复用性和安全性。")]),t._v(" "),s("h3",{attrs:{id:"继承"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),s("p",[t._v("继承实现了  IS-A  关系，例如 Cat 和 Animal 就是一种 IS-A 关系，因此 Cat 可以继承自 Animal，从而获得 Animal 非 private 的属性和方法。")]),t._v(" "),s("p",[t._v("继承应该遵循里氏替换原则，子类对象必须能够替换掉所有父类对象。")]),t._v(" "),s("p",[t._v("Cat 可以当做 Animal 来使用，也就是说可以使用 Animal 引用 Cat 对象。父类引用指向子类对象称为"),s("strong",[t._v("向上转型")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Animal")]),t._v(" animal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"多态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#多态"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),s("p",[t._v("多态分为编译时多态和运行时多态:")]),t._v(" "),s("ul",[s("li",[t._v("编译时多态主要指方法的重载")]),t._v(" "),s("li",[t._v("运行时多态指程序中定义的对象引用所指向的具体类型在运行期间才确定")])]),t._v(" "),s("p",[t._v("运行时多态有三个条件:")]),t._v(" "),s("ul",[s("li",[t._v("继承")]),t._v(" "),s("li",[t._v("覆盖(重写)")]),t._v(" "),s("li",[t._v("向上转型")])]),t._v(" "),s("h2",{attrs:{id:"五大基本原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五大基本原则"}},[t._v("#")]),t._v(" 五大基本原则")]),t._v(" "),s("h3",{attrs:{id:"单一职责原则srp-single-responsibility-principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单一职责原则srp-single-responsibility-principle"}},[t._v("#")]),t._v(" 单一职责原则SRP(Single Responsibility Principle)")]),t._v(" "),s("p",[t._v("类的功能要单一，不能包罗万象，跟杂货铺似的。")]),t._v(" "),s("h3",{attrs:{id:"开放封闭原则ocp-open-close-principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开放封闭原则ocp-open-close-principle"}},[t._v("#")]),t._v(" 开放封闭原则OCP(Open－Close Principle)")]),t._v(" "),s("p",[t._v("一个模块对于拓展是开放的，对于修改是封闭的，想要增加功能热烈欢迎，想要修改，哼，一万个不乐意。")]),t._v(" "),s("h3",{attrs:{id:"里式替换原则lsp-the-liskov-substitution-principle-lsp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#里式替换原则lsp-the-liskov-substitution-principle-lsp"}},[t._v("#")]),t._v(" 里式替换原则LSP(the Liskov Substitution Principle LSP)")]),t._v(" "),s("p",[t._v("子类可以替换父类出现在父类能够出现的任何地方。比如你能代表你爸去你姥姥家干活。哈哈~~")]),t._v(" "),s("h3",{attrs:{id:"依赖倒置原则dip-the-dependency-inversion-principle-dip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#依赖倒置原则dip-the-dependency-inversion-principle-dip"}},[t._v("#")]),t._v(" 依赖倒置原则DIP(the Dependency Inversion Principle DIP)")]),t._v(" "),s("p",[t._v("高层次的模块不应该依赖于低层次的模块，他们都应该依赖于抽象。抽象不应该依赖于具体实现，具体实现应该依赖于抽象。就是你出国要说你是中国人，而不能说你是哪个村子的。比如说中国人是抽象的，下面有具体的xx省，xx市，xx县。你要依赖的是抽象的中国人，而不是你是xx村的。")]),t._v(" "),s("h3",{attrs:{id:"接口分离原则isp-the-interface-segregation-principle-isp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口分离原则isp-the-interface-segregation-principle-isp"}},[t._v("#")]),t._v(" 接口分离原则ISP(the Interface Segregation Principle ISP)")]),t._v(" "),s("p",[t._v("设计时采用多个与特定客户类有关的接口比采用一个通用的接口要好。就比如一个手机拥有打电话，看视频，玩游戏等功能，把这几个功能拆分成不同的接口，比在一个接口里要好的多。")]),t._v(" "),s("h2",{attrs:{id:"oop与面向过程-pop-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oop与面向过程-pop-的区别"}},[t._v("#")]),t._v(" OOP与面向过程（POP）的区别？")]),t._v(" "),s("h3",{attrs:{id:"面向过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向过程"}},[t._v("#")]),t._v(" 面向过程")]),t._v(" "),s("p",[t._v("就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。")]),t._v(" "),s("p",[s("strong",[t._v("优点")]),t._v("：性能比面向对象好，因为类调用时需要实例化，开销比较大，比较消耗资源。\n"),s("strong",[t._v("缺点")]),t._v("：不易维护、不易复用、不易扩展.")]),t._v(" "),s("h2",{attrs:{id:"面向对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面向对象"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),s("p",[t._v("是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。")]),t._v(" "),s("p",[s("strong",[t._v("优点")]),t._v("：易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特性，可以设计出低耦合的系统，使系统 更加灵活、更加易于维护。")]),t._v(" "),s("p",[s("strong",[t._v("缺点")]),t._v("：性能比面向过程差")])])}),[],!1,null,null,null);a.default=r.exports}}]);