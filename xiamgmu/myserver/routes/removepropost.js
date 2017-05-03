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
 
var str1 = req.query.username+''
var str2 = req.query.proid+''
var delSql = 'DELETE FROM mypost where mypost.username = ? and mypost.proid= ?';
//删
connection.query(delSql,[str1,str2],function (err, result) {
        if(err){
          console.log('[DELETE ERROR] - ',err.message);
          return;
        }        
 
       console.log('--------------------------DELETE----------------------------');
       console.log('DELETE affectedRows',result.affectedRows);
       res.type('application/json');
       res.jsonp(result)    
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();
})
module.exports = router;
