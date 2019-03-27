module.exports = (app) => {
	const loginController = require('../controller/login');
	//app.post('/login',loginController.create)
	app.get('/login:user', loginController.findByName)
}