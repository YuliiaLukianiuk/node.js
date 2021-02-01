module.exports = (sequelize, DataTypes) => {
  //сопоставления  между моделью и таблицей, используйте
  const products = sequelize.define("products", {
    product_id: {type:DataTypes.INTEGER.UNSIGNED, 
        primaryKey: true,autoIncrement: true,
        allowNull: false},
    title: {type:DataTypes.STRING,allowNull: true},
    price: {type:DataTypes.DECIMAL(8,2).UNSIGNED ,allowNull: false},
    category_id: {type:DataTypes.STRING,allowNull: false},
    });
    products.associate = models => {
      products.hasMany(models.order_product,{
        foreignKey: 'id'
      });
    }
    return products;
  };
