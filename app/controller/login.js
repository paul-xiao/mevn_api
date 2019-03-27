const User = require('../models/User');

exports.create = (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });
    newUser.save().then(data => {
        res.send(data);
        console.log('inseted data' + data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};
exports.findAll = (req, res) => {
    User.find().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    })
};
exports.findOne = (req, res) => {
    User.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.id
                });
            }
            res.send(data);
        })
};

exports.findByName = (req, res) => {
    console.log(req.query)
    User.findOne({username: req.params.username,password: req.params.password}).then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });
        }
        res.send(data);
    })
}
exports.update = (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        username: req.body.username,
        password: req.body.password
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
    User.findByIdAndRemove(req.params.id)
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
