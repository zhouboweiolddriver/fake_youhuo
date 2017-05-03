var express = require('express');
var router = express.Router();
var mysql  = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
 //console.log(req.query)
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'xiangmu', 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM proshowlist where proshowlist.proid=?';
//查
connection.query(sql,[req.query.proid],function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       res.type('application/json');
       res.jsonp(result)
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();
});

module.exports = router;
