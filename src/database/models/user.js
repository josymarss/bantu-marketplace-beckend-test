const mongoose = require('mongoose');

const userfollow = {
      name:'',
      idfollower:mongoose.Schema.Types.ObjectId
}
const UserSchema = mongoose.Schema({
      name:{type:String},
      password:{type:String},
      followers:[userfollow]
});

module.exports = mongoose.model('User',UserSchema);