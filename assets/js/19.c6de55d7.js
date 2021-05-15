(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{427:function(a,t,s){"use strict";s.r(t);var r=s(21),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"引用介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用介绍"}},[a._v("#")]),a._v(" 引用介绍")]),a._v(" "),s("h3",{attrs:{id:"什么是引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是引用"}},[a._v("#")]),a._v(" 什么是引用")]),a._v(" "),s("p",[a._v("在 PHP 中引用意味着用不同的名字访问同一个变量内容。这并不像 C 的指针：例如你不能对他们做指针运算，他们并不是实际的内存地址…… 查看"),s("a",{attrs:{href:"https://www.php.net/manual/zh/language.references.arent.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("引用不是什么"),s("OutboundLink")],1),a._v("了解更多信息。 替代的是，引用是符号表别名。注意在PHP 中，变量名和变量内容是不一样的， 因此同样的内容可以有不同的名字。最接近的比喻是 Unix 的文件名和文件本身——变量名是目录条目，而变量内容则是文件本身。引用可以被看作是 Unix 文件系统中的硬链接")]),a._v(" "),s("h3",{attrs:{id:"引用做什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用做什么"}},[a._v("#")]),a._v(" 引用做什么")]),a._v(" "),s("p",[a._v("PHP 的引用允许用两个变量来指向同一个内容。意思是，当这样做时：")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("这意味着 $a 和 $b 指向了同一个变量。注意：$a 和 $b 在这里是完全相同的，这并不是 $a 指向了 $b 或者相反，而是 $a 和 $b 指向了同一个地方。")]),a._v(" "),s("p",[a._v("引用是可以传递的")]),a._v(" "),s("p",[a._v("引用做的第二件事是用引用传递变量。这是通过在函数内建立一个本地变量并且该变量在呼叫范围内引用了同一个内容来实现的。例如：")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("将使 $a 变成 6。这是因为在 foo 函数中变量 $var 指向了和 $a 指向的同一个内容。更多详细解释见"),s("a",{attrs:{href:"https://www.php.net/manual/zh/language.references.pass.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("引用传递"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"引用传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用传递"}},[a._v("#")]),a._v(" 引用传递")]),a._v(" "),s("p",[a._v("可以将一个变量通过引用传递给函数，这样该函数就可以修改其参数的值。语法如下：")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// $a is 6 here")]),a._v("\n")])])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("p",[a._v("注意在函数调用时没有引用符号——只有函数定义中有。光是函数定义就足够使参数通过引用来正确传递了。")]),a._v(" "),s("p",[a._v("以下内容可以通过引用传递：")]),a._v(" "),s("ul",[s("li",[a._v("变量，例如 "),s("code",[a._v("foo($a)")])]),a._v(" "),s("li",[a._v("从函数中返回的引用，例如：")])]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h2",{attrs:{id:"引用返回"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用返回"}},[a._v("#")]),a._v(" 引用返回")]),a._v(" "),s("p",[a._v("引用返回用在当想用函数找到引用应该被绑定在哪一个变量上面时。 "),s("em",[a._v("不要")]),a._v("用返回引用来增加性能，引擎足够聪明来自己进行优化。 仅在有合理的技术原因时才返回引用！ 使用此语法返回引用：")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("foo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("42")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$this")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$obj")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$myValue")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// $myValue is a reference to $obj->value, which is 42.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$obj")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),s("span",{pre:!0,attrs:{class:"token property"}},[a._v("value")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$myValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// prints the new value of $obj->value, i.e. 2.")]),a._v("\n")])])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br")])]),s("h2",{attrs:{id:"引用取消"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用取消"}},[a._v("#")]),a._v(" 引用取消")]),a._v(" "),s("p",[a._v("当 unset 一个引用，只是断开了变量名和变量内容之间的绑定。这并不意味着变量内容被销毁了。例如：")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("unset")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("不会 unset $b，只是 $a。")]),a._v(" "),s("p",[a._v("再拿这个和 Unix 的 "),s("strong",[a._v("unlink")]),a._v(" 调用来类比一下可能有助于理解。")]),a._v(" "),s("h2",{attrs:{id:"引用定位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引用定位"}},[a._v("#")]),a._v(" 引用定位")]),a._v(" "),s("p",[a._v("许多 PHP 的语法结构是通过引用机制实现的，所以上述有关引用绑定的一切也都适用于这些结构。 一些结构，例如引用传递和返回，已经在上面提到了。 其它使用引用的结构有：")]),a._v(" "),s("h3",{attrs:{id:"global-引用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-引用"}},[a._v("#")]),a._v(" global 引用")]),a._v(" "),s("p",[a._v("当用 "),s("strong",[a._v("global $var")]),a._v(" 声明一个变量时实际上建立了一个到全局变量的引用。 也就是说和这样做是相同的：")]),a._v(" "),s("div",{staticClass:"language-php line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GLOBALS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"var"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("这意味着，例如，unset $var 不会 unset 全局变量。")]),a._v(" "),s("h2",{attrs:{id:"预定义变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预定义变量"}},[a._v("#")]),a._v(" 预定义变量")]),a._v(" "),s("p",[a._v("这里就直接贴链接了，自己看吧")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/language.variables.superglobals.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("超全局变量"),s("OutboundLink")],1),a._v(" — 超全局变量是在全部作用域中始终可用的内置变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.globals.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$GLOBALS"),s("OutboundLink")],1),a._v(" — 引用全局作用域中可用的全部变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.server.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_SERVER"),s("OutboundLink")],1),a._v(" — 服务器和执行环境信息")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.get.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_GET"),s("OutboundLink")],1),a._v(" — HTTP GET 变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.post.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_POST"),s("OutboundLink")],1),a._v(" — HTTP POST 变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.files.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_FILES"),s("OutboundLink")],1),a._v(" — HTTP 文件上传变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.request.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_REQUEST"),s("OutboundLink")],1),a._v(" — HTTP Request 变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.session.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_SESSION"),s("OutboundLink")],1),a._v(" — Session 变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.environment.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_ENV"),s("OutboundLink")],1),a._v(" — 环境变量")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.cookies.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$_COOKIE"),s("OutboundLink")],1),a._v(" — HTTP Cookies")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.phperrormsg.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$php_errormsg"),s("OutboundLink")],1),a._v(" — 前一个错误信息")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.httpresponseheader.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$http_response_header"),s("OutboundLink")],1),a._v(" — HTTP 响应头")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.argc.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$argc"),s("OutboundLink")],1),a._v(" — 传递给脚本的参数数目")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/reserved.variables.argv.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("$argv"),s("OutboundLink")],1),a._v(" — 传递给脚本的参数数组")])]),a._v(" "),s("h2",{attrs:{id:"预定义异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预定义异常"}},[a._v("#")]),a._v(" 预定义异常")]),a._v(" "),s("p",[a._v("这里就是自己预先定义的一些异常")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.exception.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("Exception"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.errorexception.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("ErrorException"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.error.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("Error"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.argumentcounterror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("ArgumentCountError"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.arithmeticerror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("ArithmeticError"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.assertionerror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("AssertionError"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.divisionbyzeroerror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("DivisionByZeroError"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.compileerror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("CompileError"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.parseerror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("ParseError"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.typeerror.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("TypeError"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"预定义接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预定义接口"}},[a._v("#")]),a._v(" 预定义接口")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.traversable.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("遍历"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.iterator.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("迭代器"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.iteratoraggregate.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("聚合式迭代器"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.arrayaccess.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("数组式访问"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.serializable.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("序列化"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.closure.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("Closure"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.php.net/manual/zh/class.generator.php",target:"_blank",rel:"noopener noreferrer"}},[a._v("生成器"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);