module.exports = (sequelize, DataTypes) => {
  //сопоставления  между моделью и таблицей, используйте
  const order = sequelize.define("order", {
    order_id: {type:DataTypes.INTEGER.UNSIGNED, 
        primaryKey: true,autoIncrement: true,
        allowNull: false},
    user_id: {type:DataTypes.INTEGER, allowNull: false},
    product_id: {type:DataTypes.INTEGER, allowNull: false},
    qwnt: {type:DataTypes.STRING,allowNull: false},
    product_price: {type:DataTypes.DECIMAL(10, 0).UNSIGNED ,allowNull: false},
    order_price: {type:DataTypes.DECIMAL(10, 0).UNSIGNED ,allowNull: false},
    data: {type: DataTypes.DATE , allowNull: false}

  });
  return order;
};