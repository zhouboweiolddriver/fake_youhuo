var express = require('express');
var router = express.Router();
var mysql  = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query.username)
  var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'xiangmu', 
}); 
 
connection.connect();
 

var  addSql = 'INSERT INTO mypost(Id,marketid,marketname,username,proid,price,proname,count) VALUES(0,?,?,?,?,?,?,1)';

connection.query('select market.marketid,market.marketname,market.proid,market.proname,market.price from market where market.proid = ?',[req.query.proid],function(err,result1) {
  if(err){
    console.log('[INSERT ERROR] - ',err.message);
         return;
       }else{

       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID1111:',result1);
       //res.type('application/json');
       //res.jsonp(result1)        
       console.log('-----------------------------------------------------------------\n\n');  
       //console.log(result1[0].marketname)
connection.query(addSql,[result1[0].marketid,result1[0].marketname,req.query.username,result1[0].proid,result1[0].price,result1[0].proname],function (err, result) {
  if(err){
    console.log('[INSERT ERROR] - ',err.message);
         return;
       }
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID1111:',result1);
       res.type('application/json');
       res.jsonp(result1)        
       console.log('-----------------------------------------------------------------\n\n');  

})
 }
connection.end();       
})
 

});

module.exports = router;
