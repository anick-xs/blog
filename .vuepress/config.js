module.exports = {
    base: '/blog/',
    title: '前端笔记',  // 设置网站标题
    description : '生活就像海洋，只有意志坚强的人才能到达彼岸',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    serviceWorker: true,
    themeConfig: {
        //导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '基础', link: '/form/javaScript/prototype' },
            { text: '算法', link: '/algorithm/a/1' },
            {
                text: 'GitHub',
                link: 'https://github.com/anick-xs/blog'
            }
        ],
        //侧边栏
        sidebar:{
            '/form': [
                {
                    title:'javaScript',
                    collapsable: true,
                    children: [
                        ['/form/javaScript/prototype', '原型链'],
                        ['/form/javaScript/inherit', '继承'],
                        ['/form/javaScript/scope', '作用域'],
                        ['/form/javaScript/closure', '闭包'],
                        ['/form/javaScript/variable', '变量提升'],
                        ['https://segmentfault.com/a/1190000003985390', 'this指向'],
                        ['https://segmentfault.com/a/1190000003985390', '立即执行函数'],
                        ['https://juejin.cn/post/6844903613584654344', 'instanceof原理'],
                        ['https://juejin.cn/post/6844903613584654344', 'bind原理'],
                        ['https://segmentfault.com/a/1190000018017796', 'apply和call'],
                        ['/form/javaScript/currying', '柯里化'],
                        ['https://juejin.cn/post/6844904016325902344', 'v8垃圾回收机制'],
                        ['/form/javaScript/floatingPoint', '浮点数精度'],
                        ['/form/javaScript/new', 'new操作符'],
                        ['https://zhuanlan.zhihu.com/p/33058983', '事件循环机制'],
                        ['https://juejin.cn/post/6844904063570542599', 'promise原理'],
                        ['http://www.alloyteam.com/2016/02/generators-in-depth', 'generator原理'],
                    ]
                },
                {
                    title:'网络',
                    collapsable: true,
                    children: [
                        ['/form/internet/http', 'http'],
                    ]
                }
            ],
            '/algorithm': [
                {
                    title:'数组与字符串',
                    collapsable: true,
                    children: [
                        ['/algorithm/a/1', '两数之和']
                    ]
                }
            ]
        }
    }
}
