(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{403:function(s,n,e){"use strict";e.r(n);var a=e(4),r=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"p6、自定义-starter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p6、自定义-starter"}},[s._v("#")]),s._v(" P6、自定义 starter")]),s._v(" "),n("p",[s._v("我们分析完毕了源码以及自动装配的过程，我们可以尝试自定义一个启动器来玩玩！")]),s._v(" "),n("h3",{attrs:{id:"_6-1、说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1、说明"}},[s._v("#")]),s._v(" 6.1、说明")]),s._v(" "),n("p",[s._v("启动器模块是一个 空 jar 文件，仅提供辅助性依赖管理，这些依赖可能用于自动装配或者其他类库；")]),s._v(" "),n("p",[n("strong",[s._v("命名归约：")])]),s._v(" "),n("p",[s._v("官方命名：")]),s._v(" "),n("ul",[n("li",[s._v("前缀：spring-boot-starter-xxx")]),s._v(" "),n("li",[s._v("比如：spring-boot-starter-web…")])]),s._v(" "),n("p",[s._v("自定义命名：")]),s._v(" "),n("ul",[n("li",[s._v("xxx-spring-boot-starter")]),s._v(" "),n("li",[s._v("比如：mybatis-spring-boot-starter")])]),s._v(" "),n("h3",{attrs:{id:"_6-2、编写启动器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2、编写启动器"}},[s._v("#")]),s._v(" 6.2、编写启动器")]),s._v(" "),n("p",[s._v("1、在 IDEA 中新建一个空项目 spring-boot-starter-diy")]),s._v(" "),n("p",[s._v("2、新建一个普通 Maven 模块：kuang-spring-boot-starter")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/d44e02c69c824e965e9f382a45f213f0.png",alt:""}})]),s._v(" "),n("p",[s._v("3、新建一个 Springboot 模块：kuang-spring-boot-starter-autoconfigure")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f279b233d71b9db71501c3163ddf864f.png",alt:""}})]),s._v(" "),n("p",[s._v("4、点击 apply 即可，基本结构")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/8379323729b14707b65a822888273c89.png",alt:""}})]),s._v(" "),n("p",[s._v("5、在我们的 starter 中 导入 autoconfigure 的依赖！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\x3c!-- 启动器 --\x3e\n<dependencies>\n    \x3c!--  引入自动配置模块 --\x3e\n    <dependency>\n        <groupId>com.kuang</groupId>\n        <artifactId>kuang-spring-boot-starter-autoconfigure</artifactId>\n        <version>0.0.1-SNAPSHOT</version>\n    </dependency>\n</dependencies>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("6、将 autoconfigure 项目下多余的文件都删掉，Pom 中只留下一个 starter，这是所有的启动器基本配置！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/60c00990d63d7eb046ac80ac8577098c.png",alt:""}})]),s._v(" "),n("p",[s._v("7、我们编写一个自己的服务")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.kuang;\n\npublic class HelloService {\n\n    HelloProperties helloProperties;\n\n    public HelloProperties getHelloProperties() {\n        return helloProperties;\n    }\n\n    public void setHelloProperties(HelloProperties helloProperties) {\n        this.helloProperties = helloProperties;\n    }\n\n    public String sayHello(String name){\n        return helloProperties.getPrefix() + name + helloProperties.getSuffix();\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("8、编写 HelloProperties 配置类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.kuang;\n\nimport org.springframework.boot.context.properties.ConfigurationProperties;\n\n// 前缀 kuang.hello\n@ConfigurationProperties(prefix = "kuang.hello")\npublic class HelloProperties {\n\n    private String prefix;\n    private String suffix;\n\n    public String getPrefix() {\n        return prefix;\n    }\n\n    public void setPrefix(String prefix) {\n        this.prefix = prefix;\n    }\n\n    public String getSuffix() {\n        return suffix;\n    }\n\n    public void setSuffix(String suffix) {\n        this.suffix = suffix;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("p",[s._v("9、编写我们的自动配置类并注入 bean，测试！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.kuang;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\n@Configuration\n@ConditionalOnWebApplication //web应用生效\n@EnableConfigurationProperties(HelloProperties.class)\npublic class HelloServiceAutoConfiguration {\n\n    @Autowired\n    HelloProperties helloProperties;\n\n    @Bean\n    public HelloService helloService(){\n        HelloService service = new HelloService();\n        service.setHelloProperties(helloProperties);\n        return service;\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("10、在 resources 编写一个自己的 META-INF\\spring.factories")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# Auto Configure\norg.springframework.boot.autoconfigure.EnableAutoConfiguration=\\\ncom.kuang.HelloServiceAutoConfiguration\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("11、编写完成后，可以安装到 maven 仓库中！")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/c8b16b6539eb0447b2fdac72fb6e6980.png",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"_6-3、新建项目测试我们自己写的启动器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3、新建项目测试我们自己写的启动器"}},[s._v("#")]),s._v(" 6.3、新建项目测试我们自己写的启动器")]),s._v(" "),n("p",[s._v("1、新建一个 SpringBoot 项目")]),s._v(" "),n("p",[s._v("2、导入我们自己写的启动器")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n    <groupId>com.kuang</groupId>\n    <artifactId>kuang-spring-boot-starter</artifactId>\n    <version>1.0-SNAPSHOT</version>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("3、编写一个 HelloController 进行测试我们自己的写的接口！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.kuang.controller;\n\n@RestController\npublic class HelloController {\n\n    @Autowired\n    HelloService helloService;\n\n    @RequestMapping("/hello")\n    public String hello(){\n        return helloService.sayHello("zxc");\n    }\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("4、编写配置文件 application.properties")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('kuang.hello.prefix="ppp"\nkuang.hello.suffix="sss"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("5、启动项目进行测试，结果成功 !")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/5776ffd896b1823a26093d0cf53f5f57.png",alt:""}})])])}),[],!1,null,null,null);n.default=r.exports}}]);