---
title: 06Zuul路由网关
date: 2024-06-08 18:25:27
permalink: /pages/4c0a8e/
categories:
  - 《SpringCloud》笔记
tags:
  - SpringCloud
author: 
  name: friedy37
  link: https://github.com/friedy37
---
## 6.Zuul 路由网关

Zull 包含了对请求的路由 (用来跳转的) 和过滤两个最主要功能：

 其中路由功能负责将外部请求转发到具体的微服务实例上，是实现外部访问统一入口的基础，而过滤器功能则负责对请求的处理过程进行干预，是实现请求校验，服务聚合等功能的基础。Zuul 和 Eureka 进行整合，将 Zuul 自身注册为 Eureka 服务治理下的应用，同时从 Eureka 中获得其他服务的消息，也即以后的访问微服务都是通过 Zuul 跳转后获得。  
![](https://img-blog.csdnimg.cn/20210426203355449.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
案例：  
新建 springcloud-zuul-9527 模块，并导入依赖

```
<dependencies>
    <!--导入zuul依赖-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-zuul</artifactId>
        <version>1.4.6.RELEASE</version>
    </dependency>
    <!--Hystrix依赖-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-hystrix</artifactId>
        <version>1.4.6.RELEASE</version>
    </dependency>
    <!--dashboard依赖-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-hystrix-dashboar</artifactId>
        <version>1.4.6.RELEASE</version>
    </dependency>
    <!--Ribbon-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-ribbon</artifactId>
        <version>1.4.6.RELEASE</version>
    </dependency>
    <!--Eureka-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-eureka</artifactId>
        <version>1.4.6.RELEASE</version>
    </dependency>
    <!--实体类+web-->
    <dependency>
        <groupId>com.haust</groupId>
        <artifactId>springcloud-api</artifactId>
        <version>1.0-SNAPSHOT</version>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <!--热部署-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
    </dependency>
</dependencies>
```

application.yml

```
server:
  port: 9527

spring:
  application:
    name: springcloud-zuul #微服务名字

eureka:
  client:
    service-url:
      defaultZone: http://eureka7004.com:7004/eureka/,http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/
  instance:
    instance-id: zuul9527.com
    prefer-ip-address: true

info:
 app.name: kuang-springcloud
 company.name: 阿里巴巴有限公司

# zuul 路由网关配置
zuul:
  # 路由相关配置
  # 原来访问路由 eg:http://localhost:9527/springcloud-provider-dept/dept/get/1
  # zuul路由配置后访问路由 eg:http://localhost:9527/kuang/mydept/dept/get/1
  routes:
    mydept.serviceId: springcloud-provider-dept # 服务ID
    mydept.path: /mydept/** # 给原来的服务ID设置另一个路径
  ignored-services: "*" # 忽略所有服务ID，服务ID不能直接访问了
  prefix: /kuang # 前缀
```

主启动类

```
@SpringBootApplication
@EnableZuulProxy //开启zuul
public class Zuul_9527 {

    public static void main(String[] args) {
        SpringApplication.run(Zuul_9527.class,args);
    }
}
```

测试：  
未配置路由网关，访问方式：可以通过服务名访问，暴露服务名不安全  
![](https://img-blog.csdnimg.cn/20210426203737885.png)  
增加 zuul 配置后，不可以通过服务名访问了  
![](https://img-blog.csdnimg.cn/20210426204027371.png)

