const jwt = require('jsonwebtoken');
const privatKey = 'shhhhh';
exports.getUserId =  (token) => {
	if(!token){
		return false
	}
	const decoded = jwt.verify(token, privatKey);
	if(!decoded || !decoded.users_id){
		return false
	}
	return decoded.users_id
};
// exports.getAdminId =  (token) => {
// 	if(!token){
// 		return false
// 	}
// 	const decoded = jwt.verify(token, privatKey);
// 	if(!decoded || !decoded.users_id || !decoded.isAdmin){
// 		return false
// 	}
// 	return decoded.users_id;
// };