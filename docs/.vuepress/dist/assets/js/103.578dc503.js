(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{424:function(n,s,e){"use strict";e.r(s);var a=e(4),t=Object(a.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"_4-feign-负载均衡-基于客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-feign-负载均衡-基于客户端"}},[n._v("#")]),n._v(" 4. Feign：负载均衡 (基于客户端)")]),n._v(" "),s("h3",{attrs:{id:"_4-1-feign-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-feign-简介"}},[n._v("#")]),n._v(" 4.1 Feign 简介")]),n._v(" "),s("p",[n._v("Feign 是声明式 Web Service 客户端，它让微服务之间的调用变得更简单，类似 controller 调用 service。SpringCloud 集成了 Ribbon 和 Eureka，可以使用 Feigin 提供负载均衡的 http 客户端")]),n._v(" "),s("p",[n._v("Feign，主要是社区版，大家都习惯面向接口编程。这个是很多开发人员的规范。调用微服务访问两种方法")]),n._v(" "),s("ul",[s("li",[n._v("微服务名字 【ribbon】")]),n._v(" "),s("li",[n._v("接口和注解 【feign】")])]),n._v(" "),s("p",[n._v("feign 和 ribbon 是 Spring Cloud 的 Netflix 中提供的两个实现软负载均衡的组件，Ribbon 和 Feign 都是用于调用其他服务的，方式不同。"),s("strong",[n._v("Feign 则是在 Ribbon 的基础上进行了一次改进")]),n._v("，采用接口的方式，将需要调用的其他服务的方法定义成抽象方法即可，不需要自己构建 http 请求。不过要注意的是抽象方法的注解、方法签名要和提供服务的方法完全一致。")]),n._v(" "),s("h3",{attrs:{id:"_4-2-feign-使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-feign-使用"}},[n._v("#")]),n._v(" 4.2 Feign 使用")]),n._v(" "),s("ol",[s("li",[n._v("改造 springcloud-api 模块代码"),s("br"),n._v("\n添加依赖")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\x3c!--Feign的依赖--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-feign</artifactId>\n    <version>1.4.6.RELEASE</version>\n</dependency>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("新建 service 包，并新建 DeptClientService.java 接口")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@Component\n// @FeignClient:微服务客户端注解,value:指定微服务的名字,这样就可以使Feign客户端直接找到对应的微服务\n@FeignClient(value = "SPRINGCLOUD-PROVIDER-DEPT")\npublic interface DeptClientService {\n\n    @GetMapping("/dept/get/{id}")\n    public Dept queryById(@PathVariable("id") Long id);\n\n    @GetMapping("/dept/list")\n    public Dept queryAll();\n\n    @GetMapping("/dept/add")\n    public Dept addDept(Dept dept);\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[n._v("创建 springcloud-consumer-dept-feign 模块"),s("br"),n._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210425195900292.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}}),s("br"),n._v("\n拷贝 springcloud-consumer-dept-80 模块下的 pom.xml，resource，以及 java 代码到 springcloud-consumer-feign 模块，并添加 feign 依赖。")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\x3c!--Feign的依赖--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-feign</artifactId>\n    <version>1.4.6.RELEASE</version>\n</dependency>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("启动类上添加注解开启 Feign")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@SpringBootApplication\n@EnableEurekaClient\n// feign客户端注解,并指定要扫描的包以及配置接口DeptClientService\n@EnableFeignClients(basePackages = {"com.kuang.springcloud"})\n// 切记不要加这个注解，不然会出现404访问不到\n//@ComponentScan("com.kuang.springcloud")\npublic class FeignConsumer_80 {\n    public static void main(String[] args) {\n        SpringApplication.run(FeignConsumer_80.class,args);\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[s("strong",[n._v("Feign")]),n._v("：修改 controller")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@RestController\npublic class DeptConsumerController {\n\n    @Autowired\n    private DeptClientService deptClientService;\n\n    @PostMapping("/consumer/dept/add")\n    public boolean add(Dept dept){\n        return deptClientService.addDept(dept);\n    }\n\n    @GetMapping("/dept/get/{id}")\n    public Dept getById(@PathVariable("id") Long id){\n        return deptClientService.queryById(id);\n    }\n\n    @RequestMapping("/consumer/dept/list")\n    public List<Dept> list() {\n        return deptClientService.queryAll();\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br")])]),s("p",[s("strong",[n._v("Ribbon")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('@RestController\npublic class DeptConsumerController {\n\n    @Autowired\n    private RestTemplate restTemplate;\n\n    private static final String REST_URL_PREFIX = "http://SPRINGCLOUD-PROVIDER-DEPT";\n\n    @RequestMapping("/consumer/dept/add")\n    public boolean add(Dept dept) {\n        // postForObject(服务提供方地址(接口),参数实体,返回类型.class)\n        return restTemplate.postForObject(REST_URL_PREFIX + "/dept/add", dept, Boolean.class);\n    }\n\n    @RequestMapping("/consumer/dept/get/{id}")\n    public Dept get(@PathVariable("id") Long id) {\n        // getForObject(服务提供方地址(接口),返回类型.class)\n        return restTemplate.getForObject(REST_URL_PREFIX + "/dept/get/" + id, Dept.class);\n    }\n\n    @RequestMapping("/consumer/dept/list")\n    public List<Dept> list() {\n        return restTemplate.getForObject(REST_URL_PREFIX + "/dept/list", List.class);\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br")])]),s("p",[s("strong",[n._v("Feign 和 Ribbon 二者对比，前者显现出面向接口编程特点，代码看起来更清爽，而且 Feign 调用方式更符合我们之前在做 SSM 或者 SprngBoot 项目时，Controller 层调用 Service 层的编程习惯！")])]),n._v(" "),s("h3",{attrs:{id:"_4-3-feign-和-ribbon-选择"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-feign-和-ribbon-选择"}},[n._v("#")]),n._v(" 4.3 Feign 和 Ribbon 选择")]),n._v(" "),s("p",[s("strong",[n._v("根据个人习惯而定，如果喜欢 REST 风格使用 Ribbon；如果喜欢社区版的面向接口风格使用 Feign。")])]),n._v(" "),s("p",[n._v("Feign 本质上也是实现了 Ribbon，只不过后者是在调用方式上，为了满足一些开发者习惯的接口调用习惯！")])])}),[],!1,null,null,null);s.default=t.exports}}]);