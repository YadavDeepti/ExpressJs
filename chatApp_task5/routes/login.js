const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended: false})); 


router.get('/user-login',(req, res, next) =>{
    res.send("<form onsubmit='localStorage.setItem(`username`, document.getElementById(`username`).value)' action='/user-login' method='POST'><input type='text' id='username' name='user' placeholder='Enter name'><button type='submit'>Log In</button></form>");
}); 

router.post('/user-login',(req, res, next) =>{
    res.redirect("/message");
});


module.exports = router;