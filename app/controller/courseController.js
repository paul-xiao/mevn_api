const Course = require('../models/Course');

exports.create = (req, res) => {
    const newCourse = new Course({
        course_name: req.body.course_name,
        course_price: req.body.course_price
    });
    newCourse.save().then(data => {
        res.send(data);
        console.log('inseted data' + data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};
exports.findAll = (req, res) => {
    Course.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    })
};
exports.findOne = (req, res) => {
    Course.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });
            }
            res.send(data);
        })
};
exports.update = (req, res) => {
    Course.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        content: req.body.content
    },{new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: 'not found with id ' + req.params.id
                })
            }
            res.send(data);
        })
};
exports.delete = (req, res) => {
    Course.findByIdAndRemove(req.params.id)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });
            }
            res.send({message: "Note deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
};
