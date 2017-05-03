const mysql=require('mysql');
const pool=mysql.createPool({
    connectionLimit:1000,
    host:'localhost',
    user:'root',
    password:'',
    database:'search'
});
var lists='SELECT * FROM lists';
var server='SELECT * FROM server';
var usually='SELECT * FROM usually';
function query(sql,arr,fn){
    pool.getConnection((err,con)=>{
        con.query(lists,server,usually,(err,res)=>{
            console.log(arr[0].lists);
            con.release();
            fn(err,res);
        })
    })
}

module.exports={
    query:query
};
