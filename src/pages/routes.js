const express = require('express');
const app = express();
const router = express.Router();

const User = require('../database/models/user');
const App = require('../database/models/app');

// ** section user ** //
router.post('/user/create', async (req,res) =>{
      //criar usuario no banco de dados
      const user = req.body;
      const userCreated = await User.create(user);
      res.send( userCreated);
});
router.get('/users',async (req,res) =>{
      //retorna todos, especifico para procurar usuarios
      const users = await User.find();
      res.send(users);
});
router.get('/user/:id', async(req,res) =>{
      //retorna usuario especifico
      const specificUser = await User.find({_id:req.params.id},{});
      res.send(specificUser);
});
// ** setion app ** //
router.post('/app/create', async (req,res)=> {
      //Inserir apps com o id do usuario(relacao 1 para m)
      const appToCreate = req.body;
      const appCreated = await App.create(appToCreate);
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

router.put('/api/negociation/:id', async (req,res) =>{
      //Ir no app especifico com id e fazer a negociacao
      const [ nameusario,description,idusernegotiatior ] = req.body;
      const negotiationResult = await App.updateOne(
            {_id:req.params.id},
            {
                  $set:{
                        nameusario,
                        description,
                        idusernegotiatior
                  }
            }
      );
      res.send(negotiationResult);
});



module.exports = router