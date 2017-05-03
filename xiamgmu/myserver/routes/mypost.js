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
 
connection.query('select mypost.marketid,mypost.marketname,mypost.proid,mypost.proname,mypost.price from mypost where mypost.username = ?',[req.query.username],function(err,result1) {
            if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
 
       console.log('--------------------------mypost----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result1); 
       res.type('application/json');
       res.jsonp(result1)       
       console.log('-----------------------------------------------------------------\n\n'); 
    })
 
connection.end();  
});

module.exports = router;
