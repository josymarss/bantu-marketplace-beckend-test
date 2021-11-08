const mongoose = require('mongoose');

const seguir = {
    _id:mongoose.Types.ObjectId,
};
const FollowerSchema = mongoose.Schema({
    myid:mongoose.Types.ObjectId,
    following:[seguir]
});

module.exports = mongoose.model('Follower', FollowerSchema);