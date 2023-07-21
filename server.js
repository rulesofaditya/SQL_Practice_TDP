let Express = require("express")
let server = Express()
let MySql= require("mysql")



let db = MySql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"nbs2"
})

db.connect()

server.get("/",function(req,res){

    res.render("homepage.ejs")
    res.end()
})



server.get("/allemployeeslist",function(req,res){

    db.query("select * from employees",function(err,data){
        res.render("employeeslist.ejs",{employees:data})
        res.end()
    })

})

server.get("/departments",function(req,res){

    db.query("select distinct dept from employees",function(err,data){
        res.render("departments.ejs",{deptName:data})
        res.end()
    })

})


server.listen(3000)