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
            { text: '文章', link: '/javaScript/prototype' },
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
                        ['/form/javaScript/prototype', 'JavaScript深入之从原型到原型链'],
                        ['/form/javaScript/inherit', 'JavaScript深入之继承的多种方式'],
                        ['/form/javaScript/scope', 'JavaScript深入之作用域链'],
                        ['/form/javaScript/closure', 'JavaScript深入之闭包'],
                    ]
                },
                {
                    title:'算法',
                    collapsable: true,
                    children: [
                        ['/form/algorithm/1', '两数之和'],
                        ['/form/algorithm/2', '排序'],
                    ]
                },
                {
                    title:'网络',
                    collapsable: true,
                    children: [
                        ['/form/internet/http', 'http'],
                    ]
                }
            ]
        }
    }
}
