var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var crypto = require('crypto');
function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};
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


connection.query("select user.* from user where username = ?",[req.query.username],function(err,result1) {
            if(err){
         console.log('[login meg] - ',err.message);
         return;
        }
        console.log("login msg")
      console.log(result1[0])        
      if(result1[0]){
        //console.log('不为空')
        //console.log(result1[0].pw)
        if(result1[0].pw == md5(req.query.pw) ){
          res.type('application/json');
        res.jsonp('yes')
      }else{
         res.type('application/json');
        res.jsonp('pw is wrong')
      }

      }else{
        console.log('空')
        res.type('application/json');
        res.jsonp('username not exist') 
      }
       console.log('--------------------------mypost----------------------------');
       //console.log('INSERT ID:',result.insertId);        
       // console.log('INSERT ID:',result1); 
       // res.type('application/json');
       // res.jsonp(result1)       
       console.log('-----------------------------------------------------------------\n\n'); 
    })
 
connection.end();  
});

module.exports = router;
