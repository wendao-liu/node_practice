test('练习01 自动化生成路由配置',() => {
    const {getRouter} = require('../index')
    const ret = getRouter(__dirname + '/data')
    console.log(ret,'ret')
    expect(ret).toBe(
        `export default new Router({
            mode: 'history',
            base: process.env.BASE_URL,
            routes: [
                {
                        paht: '/about',
                        name: 'about',
                        component: () => import(./views/about.vue)
                    }{
                        paht: '/index',
                        name: 'index',
                        component: () => import(./views/index.vue)
                    }
            ]
        })`
    )
})