(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{423:function(n,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h2",{attrs:{id:"_3-ribbon-负载均衡-基于客户端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-ribbon-负载均衡-基于客户端"}},[n._v("#")]),n._v(" 3. Ribbon：负载均衡 (基于客户端)")]),n._v(" "),s("h3",{attrs:{id:"_3-1-ribbon-简介及负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-ribbon-简介及负载均衡"}},[n._v("#")]),n._v(" 3.1 Ribbon 简介及负载均衡")]),n._v(" "),s("p",[n._v("Spring Cloud Ribbon 是一个基于 HTTP 和 TCP 的客户端负载均衡工具，它基于 Netflix Ribbon 实现。")]),n._v(" "),s("p",[n._v("简单的说，Ribbon 是 Netflix 发布的开源项目，主要功能是提供客户端的软件负载均衡算法，将 Netflix 的中间层服务连接在一起。Ribbon 的客户端组件提供一系列完整的配置项，如：连接超时、重试等。简单的说，就是在配置文件中列出 LoadBalancer (简称 LB：负载均衡) 后面所有的及其，Ribbon 会自动的帮助你基于某种规则 (如简单轮询，随机连接等等) 去连接这些机器。我们也容易使用 Ribbon 实现自定义的负载均衡算法！"),s("br"),n._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210425201056964.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}})]),n._v(" "),s("ul",[s("li",[n._v("LB，即负载均衡 (LoadBalancer) ，在微服务或分布式集群中经常用的一种应用。")]),n._v(" "),s("li",[n._v("负载均衡简单的说就是将用户的请求平摊的分配到多个服务上，从而达到系统的 HA (高用)。")]),n._v(" "),s("li",[n._v("常见的负载均衡软件有 Nginx、Lvs 等等。")]),n._v(" "),s("li",[n._v("Dubbo、SpringCloud 中均给我们提供了负载均衡，SpringCloud 的负载均衡算法可以自定义。")]),n._v(" "),s("li",[n._v("负载均衡简单分类：\n"),s("ul",[s("li",[n._v("集中式 LB\n"),s("ul",[s("li",[n._v("即在服务的提供方和消费方之间使用独立的 LB 设施，如 Nginx(反向代理服务器)，由该设施负责把访问请求通过某种策略转发至服务的提供方！")])])]),n._v(" "),s("li",[n._v("进程式 LB\n"),s("ul",[s("li",[n._v("将 LB 逻辑集成到消费方，消费方从服务注册中心获知有哪些地址可用，然后自己再从这些地址中选出一个合适的服务器。")]),n._v(" "),s("li",[n._v("Ribbon 就属于进程内 LB，它只是一个类库，集成于消费方进程，消费方通过它来获取到服务提供方的地址！")])])])])])]),n._v(" "),s("h3",{attrs:{id:"_3-2-ribbon-集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-ribbon-集成"}},[n._v("#")]),n._v(" 3.2 Ribbon 集成")]),n._v(" "),s("p",[n._v("springcloud-consumer-dept-80 向 pom.xml 中添加 Ribbon 和 Eureka 依赖")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("\x3c!--Ribbon--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-ribbon</artifactId>\n    <version>1.4.6.RELEASE</version>\n</dependency>\n\x3c!--Eureka: Ribbon需要从Eureka服务中心获取要拿什么--\x3e\n<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-eureka</artifactId>\n    <version>1.4.6.RELEASE</version>\n</dependency>\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br")])]),s("p",[n._v("配置文件中配置 Eureka")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("# Eureka配置\neureka:\n  client:\n    register-with-eureka: false # 不向 Eureka注册自己\n    service-url: # 从三个注册中心中随机取一个去访问\n      defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br")])]),s("p",[n._v("主启动类加注解开启 Eureka")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("//Ribbon 和 Eureka 整合以后，客户端可以直接调用，不用关心IP地址和端口号\n@SpringBootApplication\n@EnableEurekaClient //开启Eureka 客户端\npublic class DeptConsumer_80 {\n    public static void main(String[] args) {\n        SpringApplication.run(DeptConsumer_80.class, args);\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("p",[n._v("自定义 Spring 配置类：ConfigBean.java 配置负载均衡实现 RestTemplate")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class ConfigBean {\n\n    @LoadBalanced //配置负载均衡实现RestTemplate\n    @Bean\n    public RestTemplate getRestTemplate() {\n        return new RestTemplate();\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br")])]),s("p",[n._v("修改 conroller：DeptConsumerController.java")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('//Ribbon:我们这里的地址，应该是一个变量，通过服务名来访问\n//private static final String REST_URL_PREFIX = "http://localhost:8001";\nprivate static final String REST_URL_PREFIX = "http://SPRINGCLOUD-PROVIDER-DEPT";\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br")])]),s("h3",{attrs:{id:"_3-3-使用-ribbon-实现负载均衡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-使用-ribbon-实现负载均衡"}},[n._v("#")]),n._v(" 3.3 使用 Ribbon 实现负载均衡")]),n._v(" "),s("p",[n._v("流程图："),s("br"),n._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210425201437455.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}}),s("br"),n._v("\n图中黑色实线就是 Ribbon 做的事")]),n._v(" "),s("ol",[s("li",[s("p",[n._v("新建两个服务提供者 Moudle：springcloud-provider-dept-8003、springcloud-provider-dept-8002")])]),n._v(" "),s("li",[s("p",[n._v("参照 springcloud-provider-dept-8001 依次为另外两个 Moudle 添加 pom.xml 依赖 、resourece 下的 mybatis 和 application.yml 配置，Java 代码")])]),n._v(" "),s("li",[s("p",[n._v("启动所有服务测试 (根据自身电脑配置决定启动服务的个数)，访问 http://eureka7001.com:7002 / 查看结果"),s("br"),n._v("\n第一次访问"),s("br"),n._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210425201938952.png",alt:""}}),s("br"),n._v("\n第二次访问"),s("br"),n._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210425202026557.png",alt:""}}),s("br"),n._v("\n默认使用的轮询算法")])])]),n._v(" "),s("p",[n._v("在 springcloud-provider-dept-80 模块下的 ConfigBean 中进行配置，切换使用不同的算法")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class ConfigBean {\n\n    /**\n     * IRule:\n     * RoundRobinRule 轮询策略\n     * RandomRule 随机策略\n     * AvailabilityFilteringRule ： 会先过滤掉，跳闸，访问故障的服务~，对剩下的进行轮询~\n     * RetryRule ： 会先按照轮询获取服务~，如果服务获取失败，则会在指定的时间内进行，重试\n     */\n    @Bean\n    public IRule myRule() {\n        return new RandomRule();//使用随机策略\n        //return new RoundRobinRule();//使用轮询策略\n        //return new AvailabilityFilteringRule();//使用轮询策略\n        //return new RetryRule();//使用轮询策略\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br")])]),s("h3",{attrs:{id:"_3-4-自定义-ribbon-负载均衡算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-自定义-ribbon-负载均衡算法"}},[n._v("#")]),n._v(" 3.4 自定义 Ribbon 负载均衡算法")]),n._v(" "),s("p",[n._v("在 myRule 包下自定义一个配置类 MyRule.java，注意：该包不要和主启动类所在的包同级，要跟启动类所在包同级"),s("br"),n._v(" "),s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210425202305543.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70",alt:""}}),s("br"),n._v("\nMyRule.java")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("@Configuration\npublic class MyRule {\n\n    @Bean\n    public IRule myRule(){\n        return new MyRandomRule();//默认是轮询RandomRule,现在自定义为自己的\n    }\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br")])]),s("p",[n._v("MyRandomRule.java")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('public class MyRandomRule extends AbstractLoadBalancerRule {\n\n    /**\n     * 每个服务访问5次则换下一个服务(总共3个服务)\n     * <p>\n     * total=0,默认=0,如果=5,指向下一个服务节点\n     * index=0,默认=0,如果total=5,index+1\n     */\n    private int total = 0;//被调用的次数\n    private int currentIndex = 0;//当前是谁在提供服务\n\n    //@edu.umd.cs.findbugs.annotations.SuppressWarnings(value = "RCN_REDUNDANT_NULLCHECK_OF_NULL_VALUE")\n    public Server choose(ILoadBalancer lb, Object key) {\n        if (lb == null) {\n            return null;\n        }\n        Server server = null;\n\n        while (server == null) {\n            if (Thread.interrupted()) {\n                return null;\n            }\n            List<Server> upList = lb.getReachableServers();//获得当前活着的服务\n            List<Server> allList = lb.getAllServers();//获取所有的服务\n\n            int serverCount = allList.size();\n            if (serverCount == 0) {\n                /*\n                 * No servers. End regardless of pass, because subsequent passes\n                 * only get more restrictive.\n                 */\n                return null;\n            }\n\n            //int index = chooseRandomInt(serverCount);//生成区间随机数\n            //server = upList.get(index);//从或活着的服务中,随机获取一个\n\n            //=====================自定义代码=========================\n\n            if (total < 5) {\n                server = upList.get(currentIndex);\n                total++;\n            } else {\n                total = 1;\n                currentIndex++;\n                if (currentIndex >= upList.size()) {\n                    currentIndex = 0;\n                }\n                server = upList.get(currentIndex);//从活着的服务中,获取指定的服务来进行操作\n            }\n            \n            //======================================================\n            \n            if (server == null) {\n                /*\n                 * The only time this should happen is if the server list were\n                 * somehow trimmed. This is a transient condition. Retry after\n                 * yielding.\n                 */\n                Thread.yield();\n                continue;\n            }\n            if (server.isAlive()) {\n                return (server);\n            }\n            // Shouldn\'t actually happen.. but must be transient or a bug.\n            server = null;\n            Thread.yield();\n        }\n        return server;\n    }\n\n    protected int chooseRandomInt(int serverCount) {\n        return ThreadLocalRandom.current().nextInt(serverCount);\n    }\n\n    @Override\n    public Server choose(Object key) {\n        return choose(getLoadBalancer(), key);\n    }\n\n    @Override\n    public void initWithNiwsConfig(IClientConfig clientConfig) {\n        // TODO Auto-generated method stub\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br"),s("span",{staticClass:"line-number"},[n._v("62")]),s("br"),s("span",{staticClass:"line-number"},[n._v("63")]),s("br"),s("span",{staticClass:"line-number"},[n._v("64")]),s("br"),s("span",{staticClass:"line-number"},[n._v("65")]),s("br"),s("span",{staticClass:"line-number"},[n._v("66")]),s("br"),s("span",{staticClass:"line-number"},[n._v("67")]),s("br"),s("span",{staticClass:"line-number"},[n._v("68")]),s("br"),s("span",{staticClass:"line-number"},[n._v("69")]),s("br"),s("span",{staticClass:"line-number"},[n._v("70")]),s("br"),s("span",{staticClass:"line-number"},[n._v("71")]),s("br"),s("span",{staticClass:"line-number"},[n._v("72")]),s("br"),s("span",{staticClass:"line-number"},[n._v("73")]),s("br"),s("span",{staticClass:"line-number"},[n._v("74")]),s("br"),s("span",{staticClass:"line-number"},[n._v("75")]),s("br"),s("span",{staticClass:"line-number"},[n._v("76")]),s("br"),s("span",{staticClass:"line-number"},[n._v("77")]),s("br"),s("span",{staticClass:"line-number"},[n._v("78")]),s("br"),s("span",{staticClass:"line-number"},[n._v("79")]),s("br"),s("span",{staticClass:"line-number"},[n._v("80")]),s("br"),s("span",{staticClass:"line-number"},[n._v("81")]),s("br"),s("span",{staticClass:"line-number"},[n._v("82")]),s("br"),s("span",{staticClass:"line-number"},[n._v("83")]),s("br"),s("span",{staticClass:"line-number"},[n._v("84")]),s("br"),s("span",{staticClass:"line-number"},[n._v("85")]),s("br"),s("span",{staticClass:"line-number"},[n._v("86")]),s("br")])]),s("p",[n._v("主启动类开启负载均衡并指定自定义的 MyRule 配置类")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('//Ribbon 和 Eureka 整合以后，客户端可以直接调用，不用关心IP地址和端口号\n@SpringBootApplication\n@EnableEurekaClient\n//在微服务启动的时候就能加载自定义的Ribbon类(自定义的规则会覆盖原有默认的规则)\n@RibbonClient(name = "SPRINGCLOUD-PROVIDER-DEPT",configuration = MyRule.class)//开启负载均衡,并指定自定义的规则\npublic class DeptConsumer_80 {\n    public static void main(String[] args) {\n        SpringApplication.run(DeptConsumer_80.class, args);\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);