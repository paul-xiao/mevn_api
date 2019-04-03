module.exports = (app) => {
	const loginController = require('../controller/login');
	const passport = require('passport');
	app.post('/signup', loginController.signUp);
	app.post('/signin', loginController.signIn);
	app.delete('/user:id', loginController.delete);
	app.get('/user', loginController.findAll);
	app.get('/userinfo', passport.authenticate('jwt', { session: false}),loginController.getUser);
}