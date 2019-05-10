module.exports = (app) => {
	const messageController = require('../controller/message');
	app.post('/send', messageController.sendMsg);
};
