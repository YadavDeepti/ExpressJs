const express = require('express')
const fs = require('fs');

const router = express.Router();


router.get('/',(req, res, next) =>{
    fs.readFile('message.txt', { encoding: "utf-8"}, (err, data) =>{
        if(err){
            console.log(err);
        }
        console.log('data from file' + data);
    res.send(`<html>${data}</html>`)
    })
}); 

module.exports = router;