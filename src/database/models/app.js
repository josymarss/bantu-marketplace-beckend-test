const mongoose = require('mongoose');

const business = {
      nameusario:'',
      description:'',
      idusernegotiatior: mongoose.Schema.Types.ObjectId
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
            type:mongoose.Schema.Types.ObjectId,
            ref: 'User' 
      }
});

module.exports = mongoose.model('App',AppSchema);