//El require busca dentro de los modulos el que se llame express
var express = require('express');

var app = express();

//Pone por defecto que el render de las vistas se haga con pug
app.set('view engine','pug');

//Crea un Middleware diciendo a express que busque los archivos que necesitemos en la carpeta public
//Hace accesible la carpeta public de nuestro proyecto a todos los usuarios que entren en nuestro sitio web
app.use(express.static('public'));

app.get('/', function (req, res) {
    //Busca por defecto en la carpeta views (si no la tenemos hay que crearla)
    res.render('index')
})

app.listen(3000,function(err){
    if(err) return console.log('Hubo un error'), process.exit(1);
})