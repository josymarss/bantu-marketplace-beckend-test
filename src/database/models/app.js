const mongoose = require('mongoose');

const business = {
      nameusario:'',
      description:'',
      idusernegotiatior: mongoose.Types.ObjectId
};

const AppSchema = mongoose.Schema({
      name:{
            type:String
      },
      negociation:[business],
      stars:{
            type:Number,
            default:0
      },
      iduser:{
            type:mongoose.Types.ObjectId
      }
});

module.exports = mongoose.model('App',AppSchema);