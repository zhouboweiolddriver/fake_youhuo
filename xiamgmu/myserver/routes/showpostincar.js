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


connection.query("select c.imgsrc,c.proid,c.proname,c.price,sum(c.count) as mycount,sum(c.price) as tot from (SELECT a.*, b.imgsrc FROM mypost as a left join market as b on a.proid = b.proid where a.username = ? ) as c  group by c.proid",[req.query.username],function(err,result1) {
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
