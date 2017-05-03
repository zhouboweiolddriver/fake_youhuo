var express = require('express');
var router = express.Router();
var mysql  = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
 console.log(req.query)
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'xiangmu', 
}); 
 
connection.connect();
 
var  sql = 'SELECT a.marketid FROM market as a where a.proid=? ';
//查
connection.query(sql,[req.query.proid],function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       // console.log('--------------------------SELECT----------------------------');
       // console.log('recommendation result')
       // console.log(result);
       // //res.type('application/json');
       // //res.jsonp(result)
       // console.log('------------------------------------------------------------\n\n');
       else{
        console.log(result[0].marketid)
        connection.query('select * from market where market.marketid =?',[result[0].marketid],function(err, result1){
       if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
         console.log('--------------------------SELECT----------------------------');
       console.log('recommendation result')
       console.log(result1);
       res.type('application/json');
       res.jsonp(result1)
       console.log('------------------------------------------------------------\n\n');
})
       }

connection.end();
});
 

});

module.exports = router;
