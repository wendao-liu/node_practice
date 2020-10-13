const Sequelize = require('sequelize');
test('练习04 完成一个一对多查询', async () => {
    const sequelize = new Sequelize("kaikeba", "root", "example", {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: false
    });

    // 初始化模型
    const { initModel } = require('../index')
    await initModel(sequelize);
    const { Product, User } = await initModel(sequelize)
    let user = await User.findByPk(1)
    // 设置数据
    if (!user) {
        user = await User.create({
            name: 'Tom',
        })
    }

    await user.createProduct({
        title: '商品一'
    })
    await user.createProduct({
        title: '商品二'
    })
    const ret = await Product.findAll({
        attributes: ['title']
    })
    expect(JSON.parse(JSON.stringify(ret))).toEqual([{ "title": "商品一" }, { "title": "商品二" }])
})