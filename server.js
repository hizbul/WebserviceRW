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

// Mengambil data warga
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

// Add data warga
app.post('/dataWarga',function (req,res){
    var noIdentitas = req.body.no_identitas;
    var Nama = req.body.nama;
    var tempatLahir = req.body.tempat_lahir;
    var tanggalLahir = req.body.tanggal_lahir;
    var Alamat = req.body.alamat;
    var rtRw= req.body.rt/rw;
    var kelDesa = req.body.kel/desa;
    var Kecamatan = req.body.kecamatan;
    var Agama = req.body.agama;
    var statusPerkawinan= req.body.status_perkawinan;
    var statusKependudukan= req.body.status_kependudukan;
    var data ={
        "error":1,
        "Informasi":""
    };
    if(!!noIdentitas && !!Nama && !!tempatLahir && !!tanggalLahir && !!Alamat && !!rtRw && !!kelDesa && !!Kecamatan && !!Agama && !!statusPerkawinan && !!statusKependudukan){
        connection.query("INSERT INTO tb_penduduk VALUES(?,?,?,?,?,?,?,?,?,?,?)",[noIdentitas,Nama,tempatLahir,tanggalLahir,Alamat,rtRw,kelDesa,Kecamatan,Agama,statusPerkawinan,statusKependudukan],function(err,rows,fields){
            if(!!err){
                data["Informasi"] = "kesalahan penambahan data";
            }else{
                data["error"] = 0;
                data["Informasi"] = "Data kependudukan telah berhasil ditambahkan";
            }
            res.json(data);
        });
    }else{
        data["Informasi"] = "inputkan data berdasarkan (i.e : judul,tanggal_publikasi,kontent,sumber";
        res.json(data);
    }
});

// Edit data warga
app.put('/dataWarga',function (req,res){
    var noIdentitas = req.body.no_identitas;
    var Nama = req.body.nama;
    var tempatLahir = req.body.tempat_lahir;
    var tanggalLahir = req.body.tanggal_lahir;
    var Alamat = req.body.alamat;
    var rtRw= req.body.rt/rw;
    var kelDesa = req.body.kel/desa;
    var Kecamatan = req.body.kecamatan;
    var Agama = req.body.agama;
    var statusPerkawinan= req.body.status_perkawinan;
    var statusKependudukan= req.body.status_kependudukan;
    var data ={
        "error":1,
        "Informasi":""
    };
    if(!!noIdentitas && !!Nama && !!tempatLahir && !!tanggalLahir && !!Alamat && !!rtRw && !!kelDesa && !!Kecamatan && !!Agama && !!statusPerkawinan && !!statusKependudukan){
            connection.query("UPDATE tb_penduduk SET no_identitas=?, nama=?, konten=?, tempat_lahir=?, tanggal_lahir=?, alamat=?, rt/rw=?, kel/desa=?, kecamatan=?, agama=?, status_perkawinan=?, status_kependudukan=?  WHERE no_identitas=?",[noIdentitas,Nama,tempatLahir,tanggalLahir,Alamat,rtRw,kelDesa,Kecamatan,Agama,statusPerkawinan,statusKependudukan,noIdentitas],function(err,rows,fields){
            if(!!err){
                data["Informasi"] = "kesalahan penambahan data";
            }else{
                data["error"] = 0;
                data["Informasi"] = "Data kependudukan telah berhasil ditambahkan";
            }
            res.json(data);
        });
    }else{
        data["Informasi"] = "inputkan data berdasarkan (i.e : judul,tanggal_publikasi,kontent,sumber";
        res.json(data);
    }
});

// Mengambil data informasi
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

// Add data informasi
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

// Edit data informasi
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

// Hapus data informasi
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