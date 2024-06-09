// ！！！注：此文件没有使用到，仅用于测试和侧边栏数据格式的参考。

// 侧边栏
module.exports = {
  '/01.前端/': [
    {
      title: '',
      collapsable: false, //是否可折叠，可选的，默认true
      children: [
      ]
    },
  ],
  '/02.后端/': [
    {
      title: '',
      collapsable: false,
      children: [
      ]
    },
  ],
  '/03.技术/': [
    {
      title: '',
      collapsable: false, //是否可折叠，可选的，默认true
      sidebarDepth: 2, // 深度，可选的, 默认值是 1
      children: [
      ]
    }
  ],
  '/04.其他/': [
    {
      title: '',
      collapsable: false,
      children: [
        ['01.学习/01.学习网站','学习网站'],
        ['01.学习/02.学习效率低，忘性很大怎么办？','学习效率低，忘性很大怎么办？'],
      ]
    },
    {
      title: '学习笔记',
      collapsable: false,
      children: [
        ['02.学习笔记/01.小程序笔记','小程序笔记'],
      ]
    },
    {
      title: '面试',
      collapsable: false, //是否可折叠，可选的，默认true
      children: [
        ['03.面试/01.面试问题集锦','面试问题集锦'],
      ]
    },
    ['01.在线工具','在线工具'],
    ['02.友情链接','友情链接'],
  ],
  // '/': [ // 在最后定义，在没有单独设置侧边栏时统一使用这个侧边栏
  //   '',
  //   'git',
  //   'github',
  //   'markdown',
  //   'study',
  //   'interview'
  //   // '/',
  //   // {
  //   //   title: 'foo', // 标题，必要的
  //   //   path: '/foo/', // 标题的路径，可选的, 应该是一个绝对路径
  //   //   collapsable: false, // 是否可折叠，可选的，默认true
  //   //   sidebarDepth: 1,    // 深度，可选的, 默认值是 1
  //   //   children: [
  //   //     ['foo/', '子页1'],
  //   //     'foo/1',
  //   //     'foo/2',
  //   //   ]
  //   // },
  //   // {
  //   //   title: 'bar',
  //   //   children: [
  //   //     ['bar/', '子页2'],
  //   //     'bar/3',
  //   //     'bar/4',
  //   //   ]
  //   // }
  // ],
}
