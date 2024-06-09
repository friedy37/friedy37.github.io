---
title: 07SpringCloud Config分布式配置
date: 2024-06-08 18:25:27
permalink: /pages/2601e8/
categories:
  - 《SpringCloud》笔记
tags:
  - SpringCloud
author: 
  name: friedy37
  link: https://github.com/friedy37
---
## 7. Spring Cloud Config 分布式配置

Spring Cloud Config 为分布式系统中的外部配置提供服务器和客户端支持。使用 Config Server，您可以在所有环境中管理应用程序的外部属性。客户端和服务器上的概念映射与 Spring Environment 和 PropertySource 抽象相同，因此它们与 Spring 应用程序非常契合，但可以与任何以任何语言运行的应用程序一起使用。随着应用程序通过从开发人员到测试和生产的部署流程，您可以管理这些环境之间的配置，并确定应用程序具有迁移时需要运行的一切。服务器存储后端的默认实现使用 git，因此它轻松支持标签版本的配置环境，以及可以访问用于管理内容的各种工具。很容易添加替代实现，并使用 Spring 配置将其插入。

**概述  
分布式系统面临的–配置文件问题**

微服务意味着要将单体应用中的业务拆分成一个个子服务，每个服务的粒度相对较小，因此系统中会出现大量的服务，由于每个服务都需要必要的配置信息才能运行，所以一套集中式的，动态的配置管理设施是必不可少的。spring cloud 提供了 configServer 来解决这个问题，我们每一个微服务自己带着一个 application.yml，那上百个的配置文件修改起来，令人头疼！

**什么是 SpringCloud config 分布式配置中心？**  
![](https://img-blog.csdnimg.cn/20210426212947119.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
​ spring cloud config 为微服务架构中的微服务提供集中化的外部支持，配置服务器为各个不同微服务应用的所有环节提供了一个**中心化的外部配置**。

 spring cloud config 分为**服务端**和**客户端**两部分。

 服务端也称为 **分布式配置中心**，它是一个独立的微服务应用，用来连接配置服务器并为客户端提供获取配置信息，加密，解密信息等访问接口。

 客户端则是**通过指定的配置中心来管理应用资源，以及与业务相关的配置内容，并在启动的时候从配置中心获取和加载配置信息**。配置服务器默认采用 git 来存储配置信息，这样就有助于对环境配置进行版本管理。并且可用通过 git 客户端工具来方便的管理和访问配置内容。

**spring cloud config 分布式配置中心能干嘛？**

*   集中式管理配置文件
*   不同环境，不同配置，动态化的配置更新，分环境部署，比如 /dev /test /prod /beta /release
*   运行期间动态调整配置，不再需要在每个服务部署的机器上编写配置文件，服务会向配置中心统一拉取配置自己的信息
*   当配置发生变动时，服务不需要重启，即可感知到配置的变化，并应用新的配置
*   将配置信息以 REST 接口的形式暴露

### 7.1 服务端与 git 整合

**spring cloud config 分布式配置中心与 GitHub 整合**

 由于 spring cloud config 默认使用 git 来存储配置文件 (也有其他方式，比如自持 SVN 和本地文件)，但是最推荐的还是 git ，而且使用的是 http / https 访问的形式。

案例：  
新建 springcloud-config-server-3344 模块导入 pom.xml 依赖

```
<dependencies>
    <!--web-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!--config-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-config-server</artifactId>
        <version>2.1.1.RELEASE</version>
    </dependency>
    <!--actuator完善监控信息-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
</dependencies>
```

resource 下创建 application.yml 配置文件，Spring Cloud Config 服务器从 git 存储库（必须提供）为远程客户端提供配置：

```
server:
  port: 3344

spring:
  application:
    name: springcloud-config-server
  cloud: #连接码云远程仓库
    config:
      server:
        git:
          uri: https://gitee.com/Filwaod/springcloud-config.git # https的url
```

主启动类

```
@EnableConfigServer // 开启spring cloud config server服务
@SpringBootApplication
public class Config_server_3344 {
    public static void main(String[] args) {
        SpringApplication.run(Config_server_3344.class,args);
    }
}
```

上传一个配置文件到远程仓库，内容如下

```
spring:
  profiles:
    active: dev

---
spring:
  profiles: dev
  application:
    name: springcloud-config-dev

---
spring:
  profiles: test
  application:
    name: springcloud-config-test
```

HTTP 服务具有以下格式的资源：

```
/{application}/{profile}[/{label}]
/{application}-{profile}.yml
/{label}/{application}-{profile}.yml
/{application}-{profile}.properties
/{label}/{application}-{profile}.properties
```

开启 3344 服务，测试能不能访问到  
![](https://img-blog.csdnimg.cn/2021042621353480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
![](https://img-blog.csdnimg.cn/20210426213608161.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
服务端是 ok 的

### 7.2 客户端与 git 整合

新建一个 springcloud-config-client-3355 模块，并导入依赖

```
<dependencies>
    <!--config-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-config</artifactId>
        <version>2.1.1.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

resources 下创建 application.yml 和 bootstrap.yml 配置文件，bootstrap 比 application 级别更高，属于系统配置，而 application 属于用户配置

bootstrap.yml

```
spring:
  cloud:
    config:
      name: config-client # 从git上要读取的文件名，不要后缀
      profile: dev # 读取什么环境的配置
      label: master # 哪个分支
      uri: http://localhost:3344 # 客户端url
```

application.yml

```
spring:
  application:
    name: springcloud-config-server-3355
```

创建 controller 包下的 ConfigClientController.java 用于测试

```
@RestController
public class ConfigClientController {

    @Value("${spring.application.name}")
    private String applicationName;

    @Value("${eureka.client.service-url.defaultZone}")
    private String eurekaServer;

    @Value("${server.port}")
    private String port;

    @RequestMapping("/config")
    public String getConfig(){
        return "applicationName: "+applicationName +"\n"
                +"eurekaServer: "+eurekaServer+"\n"
                +"port: "+port;
    }
}
```

主启动类

```
@SpringBootApplication
public class ConfigClient {
    public static void main(String[] args) {
        SpringApplication.run(ConfigClient.class,args);
    }
}
```

上传一个 springcloud-config 到远程仓库

```
spring:
  profiles:
    active: dev

---

server:
  port: 9090

spring:
  profiles: dev
  application:
    name: springcloud-config-dev
    
eureka:
  client:
    service-url:
      defaultZone: http://eureka7004.com:7004/eureka/
      
---

server:
  port: 7070

spring:
  profiles: test
  application:
    name: springcloud-config-test

eureka:
  client:
    service-url:
      defaultZone: http://eureka7004.com:7004/eureka/
```

访问：http://localhost:9090/config/，端口号看启动信息  
![](https://img-blog.csdnimg.cn/20210427200752309.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)

### 7.3 案例

新建 springcloud-config-eureka-7002 模块，并将原来的 springcloud-eureka-7002 模块下的内容拷贝的该模块。  
导入依赖

```
<!--config-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
    <version>2.1.1.RELEASE</version>
</dependency>
```

清空该模块的 application.yml 配置，并新建 bootstrap.yml 连

```
spring:
  cloud:
    config:
      name: config-eureka # 仓库中的配置文件名称
      label: master
      profile: dev
      uri: http://localhost:3344
```

修改启动类

```
@EnableEurekaServer
@SpringBootApplication
public class ConfigEurekaServer_7002 {
    public static void main(String[] args) {
        SpringApplication.run(ConfigEurekaServer_7002.class,args);
    }
}
```

启动 Config_Server_3344，并访问 http://localhost:3344/config-eureka-dev.yml 测试

新建 springcloud-config-provider-dept-8001 模块并拷贝 springcloud-provider-dept-8001 的内容  
导入依赖

```
<!--config-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
    <version>2.1.1.RELEASE</version>
</dependency>
```

清空 application.yml 、新建 bootstrap.yml 配置文件并配置

```
spring:
  cloud:
    config:
      name: config-dept
      label: master
      profile: dev
      uri: http://localhost:3344
```

修改主启动类，测试

