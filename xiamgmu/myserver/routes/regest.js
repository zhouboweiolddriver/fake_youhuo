var express = require('express');
var router = express.Router();
var mysql  = require('mysql');
var crypto = require('crypto');
function md5 (text) {
  return crypto.createHash('md5').update(text).digest('hex');
};
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('insert run')
  console.log(req.query)
  var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'xiangmu', 
}); 
 
connection.connect();
 
var  addSql = 'INSERT INTO user(Id,username,pw) VALUES(0,?,?)';
var pwstr = md5(req.query.pw)
console.log(pwstr)
var  addSqlParams = [req.query.username,pwstr];
//增
var username = req.query.username
var pw = req.query.pw
if(username.length<7){
  console.log('过短')
  res.type('application/json');
  res.jsonp('username length at last xxx')
  return
}
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         //console.log('[INSERT ERROR] - ',err.message);
         console.log('--------------------------ERR----------------------------');
         console.log(err.errno)
         console.log('重复用户名')
         if(err.errno == 1062)
          res.type('application/json');
          res.jsonp('same username')
         console.log('-----------------------------------------------------------------\n\n');
         return;
        }        
 
       console.log('--------------------------INSERT----------------------------');
       //console.log('INSERT ID:',result.insertId); 
       console.log('插入成功')       
       console.log('INSERT ID:',result);
       res.type('application/json');
       res.jsonp(result) 
       console.log('-----------------------------------------------------------------\n\n');  
});
 
connection.end();
});

module.exports = router;
