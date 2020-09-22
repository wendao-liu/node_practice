const { resolve } = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    const list = fs.readdirSync(path);
    return (
        `export default new Router({
            mode: 'history',
            base: process.env.BASE_URL,
            routes: [
                ${list.map(item => (
                    `{
                        paht: '/${item.replace('.vue', '')}',
                        name: '${item.replace('.vue', '')}',
                        component: () => import(./views/${item})
                    }`
                    )).join('')
                }
            ]
        })`
    )
}

