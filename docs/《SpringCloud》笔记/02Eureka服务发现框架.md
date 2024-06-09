---
title: 02Eureka服务发现框架
date: 2024-06-08 18:25:27
permalink: /pages/f64dfe/
categories:
  - 《SpringCloud》笔记
tags:
  - SpringCloud
author: 
  name: friedy37
  link: https://github.com/friedy37
---
## 2.Eureka 服务发现框架

`Eureka`是`Netflix`开发的`服务发现`框架，本身是一个`基于REST的服务`，主要用于定位运行在 AWS 域中的中间层服务，以达到服务发现和中间层服务故障转移的目的。功能类似于 Zookeeper。

### 2.1 工作原理

![](https://img-blog.csdnimg.cn/20210421134508128.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
Eureka 采用了`C-S的架构设计`，`EurekaServer`是服务端，`Service Provider`和`Service Consumer`都是客户端。

Eureka Server 提供服务注册，各个节点启动后，会在 EurekaServer 中进行注册，这样 Eureka Server 中的服务注册表中将会储存所有课用服务节点的信息，服务节点的信息可以在界面中直观的看到。

Eureka Client 是一个 Java 客户端，用于简化 EurekaServer 的交互，客户端同时也具备一个内置的，使用轮询算法的负载均衡器。在应用启动后，将会向 EurekaServer 发送心跳 (默认周期为 30 秒) 。如果 Eureka Server 在多个心跳周期内没有接收到某个节点的心跳，EurekaServer 将会从服务注册表中把这个服务节点移除掉 (默认周期为 90s)。

**详细的 Eureka 可查看**：[https://blog.csdn.net/qwe86314/article/details/94552801](https://blog.csdn.net/qwe86314/article/details/94552801)

### 2.2 工作流程

1、`Eureka Server` 启动成功，等待服务端注册。在启动过程中如果配置了集群，集群之间定时通过 `Replicate`同步注册表，每个`Eureka Server` 都存在独立完整的服务注册表信息

2、`Eureka Client`启动时根据配置的`Eureka Server` 地址去注册中心注册服务

3、`Eureka Client` 会每 `30s` 向 `Eureka Server` 发送一次心跳请求，证明客户端服务正常

4、当 `Eureka Server 90s`内没有收到 `Eureka Client` 的心跳，注册中心则认为该节点失效，会注销该实例

5、单位时间内 `Eureka Server` 统计到有大量的 `Eureka Client`没有上送心跳，则认为可能为网络异常，进入自我保护机制，不再剔除没有送上心跳的客户端

6、当 `Eureka Client`心跳请求恢复正常之后，`Eureka Server` 自动退出自我保护模式

7、`Eureka Client`定时全量或者增量从注册中心获取服务注册表，并且将获取到的信息缓存到本地

8、服务调用时，`Eureka Client` 会先从本地缓存找寻调取的服务。如果获取不到，先从注册中心刷新注册表，再同步到本地缓存

9、`Eureka Client`获取到目标服务器信息，发起服务调用

10、`Eureka Client` 程序关闭时向 `Eureka Server` 发送取消请求，`Eureka Server` 将实例从注册表中删除

### 2.3 springcloud 中使用

**1. 创建 Eureka Server（springcloud-eureka-7001）**

pox.xml 中导入依赖

```
<dependencies>
    <!--导入Eureka Server依赖-->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-eureka-server</artifactId>
        <version>1.4.6.RELEASE</version>
    </dependency>
    <!--热部署工具-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
    </dependency>
</dependencies>
```

配置文件中配置，application.yml

```
server:
  port: 7001

# Eureka配置
eureka:
  instance:
    # Eureka服务端的实例名字（localhost，ip，域名）
    hostname: 127.0.0.1
  client:
    # 表示是否向 Eureka 注册中心注册自己，自己就是服务端，所有false
    register-with-eureka: false
    # fetch-registry如果为false,则表示自己为注册中心,客户端为 ture
    fetch-registry: false
    # Eureka监控页面
    service-url:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
```

主启动类加注解开启 Eureka Server

```
@SpringBootApplication
// @EnableEurekaServer 开启EurekaServer，可以注册了
@EnableEurekaServer
public class EurekaServer_7001 {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServer_7001.class,args);
    }
}
```

启动成功后访问 http://localhost:7001/ 得到以下页面  
![](https://img-blog.csdnimg.cn/20210421140248188.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
**2. 创建 Eureka Client，修改之前的服务提供模块（springlouc-provider-dept-8001）**  
pom.xml 导入 Eureka Client 依赖

```
<!--Eureka依赖-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-eureka</artifactId>
    <version>1.4.6.RELEASE</version>
</dependency>
```

配置文件中配置

```
# Eureka配置：配置服务注册中心地址
eureka:
  client:
    service-url:
      defaultZone: http://localhost:7001/eureka/
```

为主启动类添加注解，开启 Eureka Client

```
@SpringBootApplication
// @EnableEurekaClient 开启Eureka客户端注解，在服务启动后自动向注册中心注册服务
@EnableEurekaClient
public class DeptProvider_8001 {
    public static void main(String[] args) {
        SpringApplication.run(DeptProvider_8001.class,args);
    }
}
```

启动服务端和客户端，访问 http://localhost:7001/ ，可以看到服务已经注册进来了。  
![](https://img-blog.csdnimg.cn/20210421190632749.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70#pic_left)

修改 Eureka 上的默认描述信息

```
# Eureka配置：配置服务注册中心地址
eureka:
  client:
    service-url:
      defaultZone: http://localhost:7001/eureka/
  instance:
    instance-id: springcloud-provider-dept-8001 #修改Eureka上的默认描述信息
```

![](https://img-blog.csdnimg.cn/20210421190649639.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70#pic_left)

配置关于服务加载的监控信息

```
<!--actuator完善监控信息-->
<dependency>
 <groupId>org.springframework.boot</groupId>
 <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

```
# info配置
info:
  # 项目名
  app.name: kuang-springcloud
  #公司名
  company.name: 阿里巴巴有限公司
```

刷新监控页，点击  
![](https://img-blog.csdnimg.cn/20210421141016208.png)  
会显示刚才配置的信息  
![](https://img-blog.csdnimg.cn/20210425203044266.png)

**自我保护机制**

默认情况下，如果 Eureka Server 在一定的 90s 内没有接收到某个微服务实例的心跳，会注销该实例。

但是，如果`短时间内丢失大量的实例心跳，便会触发eureka server的自我保护机制`，比如在开发测试时，需要频繁地重启微服务实例，但是我们很少会把 eureka server 一起重启（因为在开发过程中不会修改 eureka 注册中心），当一分钟内收到的心跳数大量减少时，会触发该保护机制。可以在 eureka 管理界面看到 Renews threshold 和 Renews(last min)，当后者（最后一分钟收到的心跳数）小于前者（心跳阈值）的时候，触发保护机制，会出现红色的警告：`EMERGENCY!EUREKA MAY BE INCORRECTLY CLAIMING INSTANCES ARE UP WHEN THEY'RE NOT.RENEWALS ARE LESSER THAN THRESHOLD AND HENCE THE INSTANCES ARE NOT BEGING EXPIRED JUST TO BE SAFE.`从警告中可以看到，eureka 认为虽然收不到实例的心跳，但它认为实例还是健康的，eureka 会保护这些实例，不会把它们从注册表中删掉。

Eureka 自我保护机制是为了防止误杀服务而提供的一个机制。当个别客户端出现心跳失联时，则认为是客户端的问题，剔除掉客户端；当 Eureka 捕获到大量的心跳失败时，则认为可能是网络问题，进入自我保护机制；当客户端心跳恢复时，Eureka 会自动退出自我保护机制。

如果在保护期内刚好这个服务提供者非正常下线了，此时服务消费者就会拿到一个无效的服务实例，即会调用失败。对于这个问题需要服务消费者端要有一些容错机制，如重试，断路器等。

开发环境下建议关闭

```
eureka.server.enable-self-preservation=false
```

![](https://img-blog.csdnimg.cn/20210421190721179.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70#pic_left)

**注册进来的微服务，获取一些消息（团队开发会用到）**

DeptController.java 新增一个方法

```
/**
 * DiscoveryClient 可以用来获取一些配置的信息，得到具体的微服务！
 */
@Autowired
private DiscoveryClient client;

/**
 * 获取一些注册进来的微服务的信息~，
 *
 * @return
 */
@GetMapping("/dept/discovery")
public Object discovery() {
    // 获取微服务列表的清单
    List<String> services = client.getServices();
    System.out.println("discovery=>services:" + services);
    // 得到一个具体的微服务信息,通过具体的微服务id，applicaioinName；
    List<ServiceInstance> instances = client.getInstances("SPRINGCLOUD-PROVIDER-DEPT");
    for (ServiceInstance instance : instances) {
        System.out.println(
                instance.getHost() + "\t" + // 主机名称
                        instance.getPort() + "\t" + // 端口号
                        instance.getUri() + "\t" + // uri
                        instance.getServiceId() // 服务id
        );
    }
    return this.client;
}
```

![](https://img-blog.csdnimg.cn/20210421141827108.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
主启动类中加上 @EnableDiscoveryClient 注解开启

结果：  
![](https://img-blog.csdnimg.cn/202104211419103.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
![](https://img-blog.csdnimg.cn/20210421141914833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)

### 2.4 Eureka 集群

![](https://img-blog.csdnimg.cn/20210421142003414.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)  
新建两个 moudle（springcloud-eureka-7002、springcloud-eureka-7003），导入和 7001 相同依赖

由于本机使用的全是 localhost 或 127.0.0.1，修改`C:\Windows\System32\drivers\etc`的 hosts 文件

```
127.0.0.1 eureka7001.com
127.0.0.1 eureka7002.com
127.0.0.1 eureka7003.com
```

`访问eureka7001.com的时候，会解析成127.0.0.1，也就是本机，只是模拟成3台服务器。`

修改 3 个模块的配置文件，7001 的 application.yml

```
server:
  port: 7001

#Eureka配置
eureka:
  instance:
    hostname: eureka7001.com #这里改成域名
  client:
    register-with-eureka: false #表示是否向 Eureka 注册中心注册自己(这个模块本身是服务器,所以不需要)
    fetch-registry: false #fetch-registry如果为false,则表示自己为注册中心
    service-url: #监控页面~
      #重写Eureka的默认端口以及访问路径 --->http://localhost:7001/eureka/
      # 单机： defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
      # 集群（关联）：7001关联7002、7003
      defaultZone: http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/
```

7002 的 application.yml

```
server:
  port: 7002

#Eureka配置
eureka:
  instance:
    hostname: eureka7002.com #Eureka服务端的实例名字
  client:
    register-with-eureka: false #表示是否向 Eureka 注册中心注册自己(这个模块本身是服务器,所以不需要)
    fetch-registry: false #fetch-registry如果为false,则表示自己为注册中心
    service-url: #监控页面~
      #重写Eureka的默认端口以及访问路径 --->http://localhost:7001/eureka/
      # 单机： defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka/
      # 集群（关联）：7002关联7001、7003
      defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7003.com:7003/eureka/
```

由于使用了集群，也就相当于现在有 3 个 Eureka Server 了，所以需要修改服务提供者 8001 的注册地址

```
# Eureka配置：配置服务注册中心地址
eureka:
  client:
    service-url:
      # 注册中心地址7001-7003，把所以Eureka Server都写进来，会向3个服务端注册此服务
      defaultZone: http://eureka7001.com:7001/eureka/,http://eureka7002.com:7002/eureka/,http://eureka7003.com:7003/eureka/
  instance:
    instance-id: springcloud-provider-dept-8001 #修改Eureka上的默认描述信息
```

启动监控画面  
![](https://img-blog.csdnimg.cn/20210421142933850.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQyNjY1NzQ1,size_16,color_FFFFFF,t_70)

### 2.5 Eureka 和 Zookeeper 对比

RDBMS (MySQL\Oracle\sqlServer) ===> ACID

*   A (Atomicity) 原子性
*   C (Consistency) 一致性
*   I (Isolation) 隔离性
*   D (Durability) 持久性

NoSQL (Redis\MongoDB) ===> CAP

*   C (Consistency) 强一致性
*   A (Availability) 可用性
*   P (Partition tolerance) 分区容错性

**CAP 只能三选二，做不到三个都保证：CA、AP、CP**

*   一个分布式系统不可能同时很好的满足一致性，可用性和分区容错性这三个需求
*   根据 CAP 原理，将 NoSQL 数据库分成了满足 CA 原则，满足 CP 原则和满足 AP 原则三大类
*   CA：单点集群，满足一致性，可用性的系统，通常可扩展性较差
*   CP：满足一致性，分区容错的系统，通常性能不是特别高
*   AP：满足可用性，分区容错的系统，通常可能对一致性要求低一些

**作为分布式服务注册中心，Eureka 比 Zookeeper 好在哪里？**

*   `Zookeeper 保证的是 CP` —> 满足一致性，分区容错的系统，通常性能不是特别高
*   `Eureka 保证的是 AP` —> 满足可用性，分区容错的系统，通常可能对一致性要求低一些

**Zookeeper 保证的是 CP**

 当向注册中心查询服务列表时，我们可以容忍注册中心返回的是几分钟以前的注册信息，但不能接收服务直接 down 掉不可用。也就是说，`服务注册功能对可用性的要求要高于一致性`。但 zookeeper 会出现这样一种情况，当 master 节点因为网络故障与其他节点失去联系时，剩余节点会重新进行 leader 选举。问题在于，选举 leader 的时间太长，30-120s，且选举期间整个 zookeeper 集群是不可用的，这就导致在选举期间注册服务瘫痪。在云部署的环境下，因为网络问题使得 zookeeper 集群失去 master 节点是较大概率发生的事件，虽然服务最终能够恢复，但是，漫长的选举时间导致注册长期不可用，是不可容忍的。

**Eureka 保证的是 AP**

 Eureka 看明白了这一点，因此在设计时就`优先保证可用性`。Eureka 各个节点都是平等的，几个节点挂掉不会影响正常节点的工作，剩余的节点依然可以提供注册和查询服务。而 Eureka 的客户端在向某个 Eureka 注册时，如果发现连接失败，则会自动切换至其他节点，只要有一台 Eureka 还在，就能保住注册服务的可用性，只不过查到的信息可能不是最新的，除此之外，Eureka 还有之中自我保护机制，如果在 15 分钟内超过 85% 的节点都没有正常的心跳，那么 Eureka 就认为客户端与注册中心出现了网络故障，此时会出现以下几种情况：

*   Eureka 不在从注册列表中移除因为长时间没收到心跳而应该过期的服务
*   Eureka 仍然能够接受新服务的注册和查询请求，但是不会被同步到其他节点上 (即保证当前节点依然可用)
*   当网络稳定时，当前实例新的注册信息会被同步到其他节点中

因此，Eureka 可以很好的应对因网络故障导致部分节点失去联系的情况，而不会像 zookeeper 那样使整个注册服务瘫痪

