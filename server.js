var app = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'db_rw',
    });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',function(req,res){
    var data = {
        "Data":""
    };
    data["Data"] = "Pelayanan Rukun Warga";
    res.json(data);
});

app.get('/informasi',function (req,res) {
    var data = {
        "error":1,
        "informasi":""
    };
    connection.query("SELECT * from tb_pengumuman", function (err, rows, fields) {
      if (rows.length !=0){
          data["error"] = 0;
          data["Pengumuman"] = rows;
          res.json(data);
      } else{
          data["Pengumuman"] = 'Tidak Ada Pengumuman...';
          res.json(data);
      }
    })
});

app.get('/dataWarga',function (req,res) {
    var data = {
        "error":1,
        "dataWarga":""
    };
    connection.query("SELECT * from tb_penduduk", function (err, rows, fields) {
        if (rows.length !=0){
            data["error"] = 0;
            data["Pengumuman"] = rows;
            res.json(data);
        } else{
            data["Data Warga"] = 'Tidak Ada data Warga...';
            res.json(data);
        }
    })
});

app.post('/dataWarga',function (req,res) {


});

http.listen(5000,function(){
    console.log("Connected & Listen to port 5000");
});