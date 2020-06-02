module.exports = {
    base: '/blog/',
    title: '前端博客',  // 设置网站标题
    description : '菜鸟日记',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    serviceWorker: true,
    themeConfig: {
        //导航栏
        nav: [
            { text: '主页', link: '/' },
            { text: '文章', link: '/form/form' },
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
                        ['/form/form', 'form'],
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
                        ['/form/internet/1', '网络笔记'],
                    ]
                }
            ]
        }
    }
}
