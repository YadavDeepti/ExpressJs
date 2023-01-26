const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const router = express.Router();


router.use(express.json());
router.use(bodyParser.urlencoded({extended: false}));


router.get('/message',(req, res, next) =>{
    res.send("<form action='/message' method='POST'><input type='text' name='message' placeholder='Enter message'><button type='submit'>Send</button></form>");
}); 


router.post('/message',(req, res) =>{
    let userData = req.body.message;
    console.log(userData); 
    fs.appendFile('message.txt', userData, err=>{
        res.redirect("/");
       console.log(err);
    }) 
    
});




module.exports = router;