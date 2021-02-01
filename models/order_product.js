module.exports = (sequelize, DataTypes) => {
  //сопоставления  между моделью и таблицей, используйте
  const order_products = sequelize.define("order_product", {
    id: {type:DataTypes.INTEGER.UNSIGNED, 
        primaryKey: true,autoIncrement: true,
        allowNull: false},
    order_id: {type:DataTypes.INTEGER, allowNull: false},
    product_id: {type:DataTypes.INTEGER, allowNull: false},
    qwnt: {type:DataTypes.STRING, allowNull: false}
  });
  order_products.associate = models => {
		order_products.belongsTo(models.products,{
			foreignKey: 'product_id'
		});
	}
  return order_products;
};