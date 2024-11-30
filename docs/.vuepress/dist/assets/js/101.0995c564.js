(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{424:function(s,n,a){"use strict";a.r(n);var e=a(4),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_7-spring-cloud-config-分布式配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-spring-cloud-config-分布式配置"}},[s._v("#")]),s._v(" 7. Spring Cloud Config 分布式配置")]),s._v(" "),n("p",[s._v("Spring Cloud Config 为分布式系统中的外部配置提供服务器和客户端支持。使用 Config Server，您可以在所有环境中管理应用程序的外部属性。客户端和服务器上的概念映射与 Spring Environment 和 PropertySource 抽象相同，因此它们与 Spring 应用程序非常契合，但可以与任何以任何语言运行的应用程序一起使用。随着应用程序通过从开发人员到测试和生产的部署流程，您可以管理这些环境之间的配置，并确定应用程序具有迁移时需要运行的一切。服务器存储后端的默认实现使用 git，因此它轻松支持标签版本的配置环境，以及可以访问用于管理内容的各种工具。很容易添加替代实现，并使用 Spring 配置将其插入。")]),s._v(" "),n("p",[n("strong",[s._v("概述"),n("br"),s._v("\n分布式系统面临的–配置文件问题")])]),s._v(" "),n("p",[s._v("微服务意味着要将单体应用中的业务拆分成一个个子服务，每个服务的粒度相对较小，因此系统中会出现大量的服务，由于每个服务都需要必要的配置信息才能运行，所以一套集中式的，动态的配置管理设施是必不可少的。spring cloud 提供了 configServer 来解决这个问题，我们每一个微服务自己带着一个 application.yml，那上百个的配置文件修改起来，令人头疼！")]),s._v(" "),n("p",[n("strong",[s._v("什么是 SpringCloud config 分布式配置中心？")]),n("br"),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426212947119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}}),n("br"),s._v("\n​ spring cloud config 为微服务架构中的微服务提供集中化的外部支持，配置服务器为各个不同微服务应用的所有环节提供了一个"),n("strong",[s._v("中心化的外部配置")]),s._v("。")]),s._v(" "),n("p",[s._v("spring cloud config 分为"),n("strong",[s._v("服务端")]),s._v("和"),n("strong",[s._v("客户端")]),s._v("两部分。")]),s._v(" "),n("p",[s._v("服务端也称为 "),n("strong",[s._v("分布式配置中心")]),s._v("，它是一个独立的微服务应用，用来连接配置服务器并为客户端提供获取配置信息，加密，解密信息等访问接口。")]),s._v(" "),n("p",[s._v("客户端则是"),n("strong",[s._v("通过指定的配置中心来管理应用资源，以及与业务相关的配置内容，并在启动的时候从配置中心获取和加载配置信息")]),s._v("。配置服务器默认采用 git 来存储配置信息，这样就有助于对环境配置进行版本管理。并且可用通过 git 客户端工具来方便的管理和访问配置内容。")]),s._v(" "),n("p",[n("strong",[s._v("spring cloud config 分布式配置中心能干嘛？")])]),s._v(" "),n("ul",[n("li",[s._v("集中式管理配置文件")]),s._v(" "),n("li",[s._v("不同环境，不同配置，动态化的配置更新，分环境部署，比如 /dev /test /prod /beta /release")]),s._v(" "),n("li",[s._v("运行期间动态调整配置，不再需要在每个服务部署的机器上编写配置文件，服务会向配置中心统一拉取配置自己的信息")]),s._v(" "),n("li",[s._v("当配置发生变动时，服务不需要重启，即可感知到配置的变化，并应用新的配置")]),s._v(" "),n("li",[s._v("将配置信息以 REST 接口的形式暴露")])]),s._v(" "),n("h3",{attrs:{id:"_7-1-服务端与-git-整合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-服务端与-git-整合"}},[s._v("#")]),s._v(" 7.1 服务端与 git 整合")]),s._v(" "),n("p",[n("strong",[s._v("spring cloud config 分布式配置中心与 GitHub 整合")])]),s._v(" "),n("p",[s._v("由于 spring cloud config 默认使用 git 来存储配置文件 (也有其他方式，比如自持 SVN 和本地文件)，但是最推荐的还是 git ，而且使用的是 http / https 访问的形式。")]),s._v(" "),n("p",[s._v("案例："),n("br"),s._v("\n新建 springcloud-config-server-3344 模块导入 pom.xml 依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependencies>\n    \x3c!--web--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    \x3c!--config--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-config-server</artifactId>\n        <version>2.1.1.RELEASE</version>\n    </dependency>\n    \x3c!--actuator完善监控信息--\x3e\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n</dependencies>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("resource 下创建 application.yml 配置文件，Spring Cloud Config 服务器从 git 存储库（必须提供）为远程客户端提供配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server:\n  port: 3344\n\nspring:\n  application:\n    name: springcloud-config-server\n  cloud: #连接码云远程仓库\n    config:\n      server:\n        git:\n          uri: https://gitee.com/Filwaod/springcloud-config.git # https的url\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("主启动类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@EnableConfigServer // 开启spring cloud config server服务\n@SpringBootApplication\npublic class Config_server_3344 {\n    public static void main(String[] args) {\n        SpringApplication.run(Config_server_3344.class,args);\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("上传一个配置文件到远程仓库，内容如下")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  profiles:\n    active: dev\n\n---\nspring:\n  profiles: dev\n  application:\n    name: springcloud-config-dev\n\n---\nspring:\n  profiles: test\n  application:\n    name: springcloud-config-test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("HTTP 服务具有以下格式的资源：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/{application}/{profile}[/{label}]\n/{application}-{profile}.yml\n/{label}/{application}-{profile}.yml\n/{application}-{profile}.properties\n/{label}/{application}-{profile}.properties\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("开启 3344 服务，测试能不能访问到"),n("br"),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/2021042621353480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}}),n("br"),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426213608161.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}}),n("br"),s._v("\n服务端是 ok 的")]),s._v(" "),n("h3",{attrs:{id:"_7-2-客户端与-git-整合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-客户端与-git-整合"}},[s._v("#")]),s._v(" 7.2 客户端与 git 整合")]),s._v(" "),n("p",[s._v("新建一个 springcloud-config-client-3355 模块，并导入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependencies>\n    \x3c!--config--\x3e\n    <dependency>\n        <groupId>org.springframework.cloud</groupId>\n        <artifactId>spring-cloud-starter-config</artifactId>\n        <version>2.1.1.RELEASE</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n</dependencies>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("resources 下创建 application.yml 和 bootstrap.yml 配置文件，bootstrap 比 application 级别更高，属于系统配置，而 application 属于用户配置")]),s._v(" "),n("p",[s._v("bootstrap.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  cloud:\n    config:\n      name: config-client # 从git上要读取的文件名，不要后缀\n      profile: dev # 读取什么环境的配置\n      label: master # 哪个分支\n      uri: http://localhost:3344 # 客户端url\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("application.yml")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  application:\n    name: springcloud-config-server-3355\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("创建 controller 包下的 ConfigClientController.java 用于测试")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@RestController\npublic class ConfigClientController {\n\n    @Value("${spring.application.name}")\n    private String applicationName;\n\n    @Value("${eureka.client.service-url.defaultZone}")\n    private String eurekaServer;\n\n    @Value("${server.port}")\n    private String port;\n\n    @RequestMapping("/config")\n    public String getConfig(){\n        return "applicationName: "+applicationName +"\\n"\n                +"eurekaServer: "+eurekaServer+"\\n"\n                +"port: "+port;\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("主启动类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@SpringBootApplication\npublic class ConfigClient {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigClient.class,args);\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("上传一个 springcloud-config 到远程仓库")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  profiles:\n    active: dev\n\n---\n\nserver:\n  port: 9090\n\nspring:\n  profiles: dev\n  application:\n    name: springcloud-config-dev\n    \neureka:\n  client:\n    service-url:\n      defaultZone: http://eureka7004.com:7004/eureka/\n      \n---\n\nserver:\n  port: 7070\n\nspring:\n  profiles: test\n  application:\n    name: springcloud-config-test\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://eureka7004.com:7004/eureka/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br")])]),n("p",[s._v("访问：http://localhost:9090/config/，端口号看启动信息"),n("br"),s._v(" "),n("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210427200752309.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),n("h3",{attrs:{id:"_7-3-案例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-案例"}},[s._v("#")]),s._v(" 7.3 案例")]),s._v(" "),n("p",[s._v("新建 springcloud-config-eureka-7002 模块，并将原来的 springcloud-eureka-7002 模块下的内容拷贝的该模块。"),n("br"),s._v("\n导入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\x3c!--config--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-config</artifactId>\n    <version>2.1.1.RELEASE</version>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("清空该模块的 application.yml 配置，并新建 bootstrap.yml 连")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  cloud:\n    config:\n      name: config-eureka # 仓库中的配置文件名称\n      label: master\n      profile: dev\n      uri: http://localhost:3344\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("修改启动类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("@EnableEurekaServer\n@SpringBootApplication\npublic class ConfigEurekaServer_7002 {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigEurekaServer_7002.class,args);\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("启动 Config_Server_3344，并访问 http://localhost:3344/config-eureka-dev.yml 测试")]),s._v(" "),n("p",[s._v("新建 springcloud-config-provider-dept-8001 模块并拷贝 springcloud-provider-dept-8001 的内容"),n("br"),s._v("\n导入依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\x3c!--config--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-config</artifactId>\n    <version>2.1.1.RELEASE</version>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("清空 application.yml 、新建 bootstrap.yml 配置文件并配置")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  cloud:\n    config:\n      name: config-dept\n      label: master\n      profile: dev\n      uri: http://localhost:3344\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("修改主启动类，测试")])])}),[],!1,null,null,null);n.default=r.exports}}]);