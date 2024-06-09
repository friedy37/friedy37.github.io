(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{414:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"p9、springboot-整合-mybatis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p9、springboot-整合-mybatis"}},[s._v("#")]),s._v(" P9、SpringBoot 整合 mybatis")]),s._v(" "),n("h3",{attrs:{id:"_9-1、导入-mybatis-所需要的依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-1、导入-mybatis-所需要的依赖"}},[s._v("#")]),s._v(" 9.1、导入 mybatis 所需要的依赖")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\x3c!-- 引入 myBatis，这是 MyBatis官方提供的适配 Spring Boot 的，而不是Spring Boot自己的--\x3e\n        <dependency>\n            <groupId>org.mybatis.spring.boot</groupId>\n            <artifactId>mybatis-spring-boot-starter</artifactId>\n            <version>2.1.0</version>\n        </dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"_9-2、配置数据库连接信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-2、配置数据库连接信息"}},[s._v("#")]),s._v(" 9.2、配置数据库连接信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring.datasource.username=root\nspring.datasource.password=123456\nspring.datasource.url=jdbc:mysql://localhost:3306/mybatis?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\nspring.datasource.driver-class-name=com.mysql.jdbc.Driver\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_9-3、我们这里就是用默认的数据源了-先去测试一下连接是否成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-3、我们这里就是用默认的数据源了-先去测试一下连接是否成功"}},[s._v("#")]),s._v(" 9.3、我们这里就是用默认的数据源了；先去测试一下连接是否成功！")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@RunWith(SpringRunner.class)\n@SpringBootTest\npublic class SpringbootDemoMybatisApplicationTests {\n\n    @Autowired\n    DataSource dataSource;\n\n    @Test\n    public void contextLoads() throws SQLException {\n\n        System.out.println("数据源>>>>>>" + dataSource.getClass());\n        Connection connection = dataSource.getConnection();\n        System.out.println("连接>>>>>>>>>" + connection);\n        System.out.println("连接地址>>>>>" + connection.getMetaData().getURL());\n        connection.close();\n\n    }\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[n("strong",[s._v("查看输出结果，数据库配置 OK！")])]),s._v(" "),n("h3",{attrs:{id:"_9-4、创建实体类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-4、创建实体类"}},[s._v("#")]),s._v(" 9.4、创建实体类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.kuang.mybatis.pojo;\n\npublic class User {\n\n    private int id;\n    private String name;\n    private String pwd;\n\n    public User() {\n    }\n\n    public User(int id, String name, String pwd) {\n        this.id = id;\n        this.name = name;\n        this.pwd = pwd;\n    }\n\n    public int getId() {\n        return id;\n    }\n\n    public void setId(int id) {\n        this.id = id;\n    }\n\n    public String getName() {\n        return name;\n    }\n\n    public void setName(String name) {\n        this.name = name;\n    }\n\n    public String getPwd() {\n        return pwd;\n    }\n\n    public void setPwd(String pwd) {\n        this.pwd = pwd;\n    }\n\n    @Override\n    public String toString() {\n        return \"User{\" +\n                \"id=\" + id +\n                \",  + name + '\\'' +\n                \", pwd='\" + pwd + '\\'' +\n                '}';\n    }\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br")])]),n("h3",{attrs:{id:"_9-5、配置-mapper-接口类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-5、配置-mapper-接口类"}},[s._v("#")]),s._v(" 9.5、配置 Mapper 接口类")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("package com.kuang.mybatis.pojo.mapper;\n\nimport com.kuang.mybatis.pojo.User;\nimport org.apache.ibatis.annotations.Mapper;\nimport org.springframework.stereotype.Repository;\n\nimport java.util.List;\n\n//@Mapper : 表示本类是一个 MyBatis 的 Mapper，等价于以前 Spring 整合 MyBatis 时的 Mapper 接口\n@Mapper\n@Repository\npublic interface UserMapper {\n\n    //选择全部用户\n    List<User> selectUser();\n    //根据id选择用户\n    User selectUserById(int id);\n    //添加一个用户\n    int addUser(User user);\n    //修改一个用户\n    int updateUser(User user);\n    //根据id删除用户\n    int deleteUser(int id);\n\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("h3",{attrs:{id:"_9-6、对应-mapper-映射文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-6、对应-mapper-映射文件"}},[s._v("#")]),s._v(" 9.6、对应 Mapper 映射文件")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n\n<mapper namespace="com.kuang.mybatis.pojo.mapper.UserMapper">\n\n    <select id="selectUser" resultType="User">\n    select * from user\n  </select>\n\n    <select id="selectUserById" resultType="User">\n    select * from user where id = #{id}\n</select>\n\n    <insert id="addUser" parameterType="User">\n    insert into user (id,name,pwd) values (#{id},#{name},#{pwd})\n</insert>\n\n    <update id="updateUser" parameterType="User">\n    update user set name=#{name},pwd=#{pwd} where id = #{id}\n</update>\n\n    <delete id="deleteUser" parameterType="int">\n    delete from user where id = #{id}\n</delete>\n</mapper>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("h3",{attrs:{id:"_9-7、maven-配置资源过滤问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-7、maven-配置资源过滤问题"}},[s._v("#")]),s._v(" 9.7、maven 配置资源过滤问题")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<resources>\n    <resource>\n        <directory>src/main/java</directory>\n        <includes>\n            <include>**/*.xml</include>\n        </includes>\n        <filtering>true</filtering>\n    </resource>\n</resources>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"_9-8、springboot-整合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-8、springboot-整合"}},[s._v("#")]),s._v(" 9.8、SpringBoot 整合！")]),s._v(" "),n("p",[s._v("以前 MyBatis 未与 spring 整合时，配置数据源、事务、连接数据库的账号、密码等都是在 myBatis 核心配置文件中进行的 myBatis 与 spring 整合后，配置数据源、事务、连接数据库的账号、密码等就交由 spring 管理。因此，在这里我们即使不使用 mybatis 配置文件也完全 ok！"),n("br"),s._v(" "),n("strong",[s._v("既然已经提供了 myBatis 的映射配置文件，自然要告诉 spring boot 这些文件的位置")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring.datasource.username=root\nspring.datasource.password=123456\nspring.datasource.url=jdbc:mysql://localhost:3306/mybatis?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\nspring.datasource.driver-class-name=com.mysql.jdbc.Driver\n\n#指定myBatis的核心配置文件与Mapper映射文件\nmybatis.mapper-locations=classpath:mybatis/mapper/*.xml\n# 注意：对应实体类的路径\nmybatis.type-aliases-package=com.kuang.mybatis.pojo\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("已经说过 spring boot 官方并没有提供 myBaits 的启动器，是 myBatis 官方提供的开发包来适配的 spring boot，从 pom.xml 文件中的依赖包名也能看出来，并非是以 spring-boot 开头的；")]),s._v(" "),n("p",[s._v("同理上面全局配置文件中的这两行配置也是以 mybatis 开头 而非 spring 开头也充分说明这些都是 myBatis 官方提供的")]),s._v(" "),n("p",[s._v("可以从 org.mybatis.spring.boot.autoconfigure.MybatisProperties 中查看所有配置项")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('@ConfigurationProperties(\n    prefix = "mybatis"\n)\npublic class MybatisProperties {\n    public static final String MYBATIS_PREFIX = "mybatis";\n    private static final ResourcePatternResolver resourceResolver = new PathMatchingResourcePatternResolver();\n    private String configLocation;\n    private String[] mapperLocations;\n    private String typeAliasesPackage;\n    private Class<?> typeAliasesSuperType;\n    private String typeHandlersPackage;\n    private boolean checkConfigLocation = false;\n    private ExecutorType executorType;\n    private Class<? extends LanguageDriver> defaultScriptingLanguageDriver;\n    private Properties configurationProperties;\n    @NestedConfigurationProperty\n    private Configuration configuration;\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("也可以直接去查看 "),n("a",{attrs:{href:"http://www.mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),n("OutboundLink")],1)]),s._v(" "),n("h3",{attrs:{id:"_9-9、编写-controller"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-9、编写-controller"}},[s._v("#")]),s._v(" 9.9、编写 controller")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('package com.kuang.mybatis.controller;\n\nimport com.kuang.mybatis.pojo.User;\nimport com.kuang.mybatis.pojo.mapper.UserMapper;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\nimport java.util.List;\n\n@RestController\npublic class UserController {\n\n    @Autowired\n    private UserMapper userMapper;\n\n    //选择全部用户\n    @GetMapping("/selectUser")\n    public String selectUser(){\n        List<User> users = userMapper.selectUser();\n        for (User user : users) {\n            System.out.println(user);\n        }\n\n        return "ok";\n    }\n    //根据id选择用户\n    @GetMapping("/selectUserById")\n    public String selectUserById(){\n        User user = userMapper.selectUserById(1);\n        System.out.println(user);\n        return "ok";\n    }\n    //添加一个用户\n    @GetMapping("/addUser")\n    public String addUser(){\n        userMapper.addUser(new User(5,"阿毛","456789"));\n        return "ok";\n    }\n    //修改一个用户\n    @GetMapping("/updateUser")\n    public String updateUser(){\n        userMapper.updateUser(new User(5,"阿毛","421319"));\n        return "ok";\n    }\n    //根据id删除用户\n    @GetMapping("/deleteUser")\n    public String deleteUser(){\n        userMapper.deleteUser(5);\n        return "ok";\n    }\n\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br")])]),n("h3",{attrs:{id:"_9-10、启动项目访问进行测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9-10、启动项目访问进行测试"}},[s._v("#")]),s._v(" 9.10、启动项目访问进行测试！")]),s._v(" "),n("p",[n("strong",[s._v("步骤：")])]),s._v(" "),n("p",[s._v("Mybatis 整合包")]),s._v(" "),n("p",[s._v("mybatis-spring-boot-starter")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("导入包")])]),s._v(" "),n("li",[n("p",[s._v("配置文件")])])]),s._v(" "),n("p",[s._v("3.mybatis 配置")]),s._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[s._v("编写 sql")])]),s._v(" "),n("p",[s._v("5.service 层调用 dao 层")]),s._v(" "),n("p",[s._v("6.controller 调用 service 层")]),s._v(" "),n("h3",{attrs:{id:"注-配置数据库连接信息-不变"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注-配置数据库连接信息-不变"}},[s._v("#")]),s._v(" 注：配置数据库连接信息（不变）")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("spring:\n  datasource:\n    username: root\n    password: 123456\n    #?serverTimezone=UTC解决时区的报错\n    url: jdbc:mysql://localhost:3306/mybatis?serverTimezone=UTC&useUnicode=true&characterEncoding=utf-8\n    driver-class-name: com.mysql.jdbc.Driver\n    type: com.alibaba.druid.pool.DruidDataSource\n\n    #Spring Boot 默认是不注入这些属性值的，需要自己绑定\n    #druid 数据源专有配置\n    initialSize: 5\n    minIdle: 5\n    maxActive: 20\n    maxWait: 60000\n    timeBetweenEvictionRunsMillis: 60000\n    minEvictableIdleTimeMillis: 300000\n    validationQuery: SELECT 1 FROM DUAL\n    testWhileIdle: true\n    testOnBorrow: false\n    testOnReturn: false\n    poolPreparedStatements: true\n\n    #配置监控统计拦截的filters，stat:监控统计、log4j：日志记录、wall：防御sql注入\n    #如果允许时报错  java.lang.ClassNotFoundException: org.apache.log4j.Priority\n    #则导入 log4j 依赖即可，Maven 地址： https://mvnrepository.com/artifact/log4j/log4j\n    filters: stat,wall,log4j\n    maxPoolPreparedStatementPerConnectionSize: 20\n    useGlobalDataSourceStat: true\n    connectionProperties: druid.stat.mergeSql=true;druid.stat.slowSqlMillis=500\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br")])]),n("h3",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);