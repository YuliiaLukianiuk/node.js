module.exports = (sequelize, DataTypes) => {
  //сопоставления  между моделью и таблицей, используйте
  const category = sequelize.define("category", {
    category_id: {type:DataTypes.INTEGER.UNSIGNED, 
        primaryKey: true,autoIncrement: true,
        allowNull: false},
    discription: {type:DataTypes.STRING,allowNull: true},
    title: {type:DataTypes.STRING,allowNull: true}
  });
  return category;
};