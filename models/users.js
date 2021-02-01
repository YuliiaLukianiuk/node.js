module.exports = (sequelize, DataTypes) => {
  //сопоставления  между моделью и таблицей, используйте
  const users = sequelize.define("users", {
    id: {type:DataTypes.INTEGER.UNSIGNED, 
        primaryKey: true,autoIncrement: true,
        allowNull: false},
    login: {type:DataTypes.STRING,allowNull: false},
    password: {type:DataTypes.STRING,allowNull: false},
    group_id: {type: DataTypes.INTEGER.UNSIGNED, allowNull: false},
    contact: {type: DataTypes.STRING, allowNull: false},
    name_Users: {type:DataTypes.STRING,allowNull: false},
    isAdmin: {type: DataTypes.TINYINT, allowNull: true }
    });
    return users
  };
