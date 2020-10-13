const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  const User = sequelize.define("User", {
    name: { type: Sequelize.STRING(20), allowNull: false, },
  });
  const Product = sequelize.define('Product', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  });
  User.hasMany(Product)
  await User.sync({ force: false })
  await Product.sync({ force: false })
  return { User, Product }
} 
