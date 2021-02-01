const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 5;
const jwt = require('jsonwebtoken');
const privatKey = 'shhhhh';

//форма регистрации
exports.registration =  (req, res) => {
	const {login, password, contact, name_Users} = req.body;
	const hash = bcrypt.hashSync(password, saltRounds);
	db.users.create({
    login,
    password: hash,
    group_id:0,
    contact,
    name_Users,
    isAdmin:0
	}).then(newUser => res.send({registration: "complete", login: newUser.login}))
	.catch(err=>console.log(err));
};
//авторизация
exports.login =  (req, res) => {
	const {login,password} = req.body
	db.users.findOne({where: {login: login}}).then(users=>{
    console.log(login);
		if(!users || !bcrypt.compareSync(password, users.password)){
			return res.send({status: res.status})
		}
		const token = jwt.sign({ users_id: users.id, isAdmin: users.is_Admin}, privatKey);
		res.send({login:"login success", token:token});
	}).catch(err=>console.log(err));
};
exports.products =  (req, res) => {
	db.products.findAll().then(products=>{
		res.send(products);
	}).catch(err=>console.log(err));
};
exports.productsCategory =  (req, res) => {
	db.category.findAll().then(category=>{
		res.send(category);
	}).catch(err=>console.log(err));
};