const express=require("express");
const path=require("path");
const app=express();
// definir el root de la aplicacion
app.use(express.static(path.join(__dirname,"build")));
// cuando se acceda al root enviar el fichero del proyecto
app.get("/",function(req,res){
  res.sendFile(path.join(_dirname,"build","index.html"));
});
// Escuchar en el puerto 9000
app.listen(3000);