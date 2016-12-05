var app = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
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

app.post('/informasi',function (req,res){
    var kodePengumuman = req.body.kode_penugmuman;
    var Judul = req.body.judul;
    var tanggalPublikasi = req.body.tanggal_publikasi;
    var Konten = req.body.konten;
    var Sumber = req.body.sumber;
    var data ={
        "error":1,
        "Informasi":""
    };
    if(!!kodePengumuman && !!Judul && !!tanggalPublikasi && !!Konten && !!Sumber ){
        connection.query("INSERT INTO tb_pengumuman VALUES(?,?,?,?,?)",[kodePengumuman,Judul,tanggalPublikasi,Konten,Sumber],function(err,rows,fields){
            if(!!err){
                data["Informasi"] = "kesalahan penambahan data";
            }else{
                data["error"] = 0;
                data["Informasi"] = "Data informasi telah berhasil ditambahkan";
            }
            res.json(data);
        });
    }else{
        data["Informasi"] = "inputkan data berdasarkan (i.e : judul,tanggal_publikasi,kontent,sumber";
        res.json(data);
    }


});

app.put('/informasi',function (req,res){
    var kodePengumuman = req.body.kode_penugmuman;
    var Judul = req.body.judul;
    var tanggalPublikasi = req.body.tanggal_publikasi;
    var Konten = req.body.konten;
    var Sumber = req.body.sumber;
    var data ={
        "error":1,
        "Informasi":""
    };
    if(!!kodePengumuman && !!Judul && !!tanggalPublikasi && !!Konten && !!Sumber ){
        connection.query("UPDATE tb_pengumuman SET judul=?, tanggal_publikasi=?, konten=?, sumber=? WHERE kode_penugmuman=?",[Judul,tanggalPublikasi,Konten,Sumber,kodePengumuman],function(err,rows,fields){
            if(!!err){
                data["Informasi"] = "kesalahan pengubahan data";
            }else{
                data["error"] = 0;
                data["Informasi"] = "Data informasi telah berhasil diubah";
            }
            res.json(data);
        });
    }else{
        data["Informasi"] = "inputkan data berdasarkan (i.e : judul,tanggal_publikasi,kontent,sumber";
        res.json(data);
    }


});

app.delete('/informasi',function (req,res){
    var kodePengumuman = req.body.kode_penugmuman;
    var data ={
        "error":1,
        "Informasi":""
    };
    if(!!kodePengumuman){
        connection.query("DELETE from tb_pengumuman WHERE kode_penugmuman=?",[kodePengumuman],function(err,rows,fields){
            if(!!err){
                data["Informasi"] = "kesalahan pengubahan data";
            }else{
                data["error"] = 0;
                data["Informasi"] = "Data informasi telah berhasil diubah";
            }
            res.json(data);
        });
    }else{
        data["Informasi"] = "inputkan data berdasarkan (i.e : judul,tanggal_publikasi,kontent,sumber";
        res.json(data);
    }


});

http.listen(5000,function(){
    console.log("Connected & Listen to port 5000");
});