module.exports = (app) => {
	const courseController = require('../controller/courseController');
	app.post('/course', courseController.create);
	app.get('/course', courseController.findAll);
	app.get('/course:id', courseController.findOne);
	app.put('/course:id', courseController.update);
	app.delete('/course:id', courseController.delete);
};
