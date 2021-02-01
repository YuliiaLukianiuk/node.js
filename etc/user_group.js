module.exports = (sequelize, DataTypes) => {
  //сопоставления  между моделью и таблицей, используйте
  const user_group = sequelize.define("user_group", {
    id: {type:DataTypes.INTEGER.UNSIGNED, 
        primaryKey: true,autoIncrement: true,
        allowNull: false},
    name: {type:DataTypes.STRING,allowNull: false}
  });
  return user_group;
};