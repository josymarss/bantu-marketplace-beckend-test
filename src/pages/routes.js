const express = require('express');
const app = express();
const router = express.Router();

const User = require('../database/models/user');
const App = require('../database/models/app');

// ** section user ** //
router.post('/user/create', async (req,res) =>{
      //criar usuario no banco de dados ** 
      const query = {"phone":req.body.phone};
      const user = req.body;
      let alredyExist = await User.findOne(query);
      console.log(alredyExist);
      if(!alredyExist){
            await User.create(user).save();
            return res.send(true);
      }else{
            return res.send(false);
      }
});
router.get('/users',async (req,res) =>{
      //retorna todos, especifico para procurar usuarios ** 
      const users = await User.find({});
      res.send(users);
});
router.get('/user/:id', async(req,res) =>{
      //retorna usuario especifico ** 
      const specificUser = await User.find({_id:req.params.id},{});
      res.send(specificUser);
});
router.put('/user/follow/:id', async (req,res)=>{
      //Seguir um usuario **
      //Meu id vem do localstorage 
      const myId = '';
      const userResult = await User.findOne({_id:myId},{name:1,_id:1});//buscar meu nome
      const user = await User.updateOne({_id:req.params.id},
            { $push: { followers: userResult } }
      );//ir na pessoa que quero seguir e adicionar meu nome

      res.send(user);
})
// ** setion app ** //
router.post('/app/create', async (req,res)=> {
      //Inserir apps com o id do usuario(relacao 1 para m)
      const appToCreate = req.body;
      const appCreated = await App.create(appToCreate).save();
      res.send(appCreated);
});

router.get('/apps', async(req,res) => {
      //apps para a pagina de aplicativos
      const apps  = await App.find({});
      res.send(apps);
});
router.get('/app/user/:id', async (req,res)=>{
      //all apps from specific user
      const myId = req.params.id;
      const appsFromSpecificUser = await App.find({iduser:myId},{});
      res.send(appsFromSpecificUser);
});
// ** setion negotiations ** //

router.post('/negociation/:id', async (req,res) =>{
      //Ir no app especifico com id e fazer a negociacao
      //const { nameusario,description,idusernegotiatior } = req.body;
      //console.log(req.body);
      const negotiationResult = await App.updateOne(
            {_id:req.params.id},
            {$push: { negociation:req.body } }      
      );
      res.send(negotiationResult);
});



module.exports = router;