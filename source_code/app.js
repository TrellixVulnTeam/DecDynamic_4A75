const express = require('express');

const app = express();

app.get('/',function(req,res){
	res.send('HELLO WORLD')
})

app.listen(9000,function(req,res){
	copnsole.log('RUNNING..')
})