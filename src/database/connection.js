const mongoose = require('mongoose');

const connect = async ()  => {
      try{
            const result = await mongoose.connect('mongodb://localhost:27017/bantutest'); 
            result? console.log('Connected') : '';
      }catch(e){
            e ? console.log('An error') : '';
      }
}

module.exports = connect;


