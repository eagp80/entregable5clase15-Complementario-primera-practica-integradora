import express from "express";
import {Server} from 'socket.io';
import handlebars from "express-handlebars";
import ProductManager from './productManager.js'
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import viewsRouter from './routes/views.router.js';
import __dirname from './utils.js'

const app = express();
//FLUJO DE TRABAJO..
app.use(express.json()); //permite leer json en las peticiones
//middlewar intercepta la peticion verifica si esta en json, covierte y continua
app.use(express.urlencoded({extended:true}));// permite tener el objeto codificado desde url
//middlewar intercepta que este codificada desde una url si no continua
app.use(express.static(`${__dirname}/public`));//lo que estara disponible, publico

app.use('/api/products',productsRouter);//al llegar la ruta especificada lo procesa con productsRouter
app.use('/api/carts',cartsRouter);//idem


app.engine('handlebars', handlebars.engine());//arrancamos y le ponemos un alias a el motor 
app.set('views', `${__dirname}/views`);//le decimos a app donde estaran las vistas
app.set('view engine', 'handlebars');//le decimos a app que el motor de vistas es handlebars definido dos lineas antes

app.use('/',viewsRouter);//al llegar la ruta especificada lo procesa con viewsRouter

const serverHTTP = app.listen(8081, ()=>console.log("Servidor Efren en  8081"));
const io= new Server (serverHTTP);

const productManager = new ProductManager("./products.json");//en directorio de proyecto
const products = productManager.getProducts();
productManager.products=products;

io.on('connection', socket=>{
       console.log("cliente conectado");
       //io.emit('log',products);  

       socket.on('message', data => {
              const id = products.length + 1;
               //con este metodo solicitamos crear producto
              const {title, description, code,price,status, stock, category, thumbnails, image} = data;       
              productManager.addProduct(title, description, code,price,status, stock, category, thumbnails);
              //res.send({status:"ok", message :"Producto añadido" });
              // const product = { id, ...data}
              // products.unshift(product);
              // fs.writeFileSync('./products.json',JSON.stringify(products, null, '\t'))
              data["id"]=ProductManager.contador-1;
              console.log("El siguiente producto fue creado desde cliente conectado por socket web");
              console.log(data);
              io.emit('product', data)
          })            
       // socket.on('post',data=>{

       // io.emit('messageLogs', products)
       // })
       socket.on('put',data=>{
       
       io.emit('messageLogs', products)
})
// socket.on('authenticated',data=>{
//        socket.emit('messageLogs', messages);
//        socket.broadcast.emit('newUserConnected', data);
// });
});



// app.get('/bienvenida', (req,res)=>{
//     res.send(`<h1 style = "color:blue"> Bienvenidos a mi primer servidor con express version 2</h1>`);
// });


// app.get('/DimeNombre/:nombre', (req,res)=>{
//     res.send(`<h1 style = "color:blue">Hola señor ${req.params.nombre} gracias por su visita</h1>`)
// });

// app.get('/ActivaLuces/:LedA/:LedB', (req,res)=>{
//     res.send(`<h1 style = "color:green">Encendida${req.params.LedA} </h1>
//     <h1 style = "color:green">Encendida ${req.params.LedB} </h1>`)
// });

// app.listen(
//     8080,()=>console.log("Servidor Efren activado en puerto 8080")
// );

// ]
// app.get('/ejemploQueries', (req,res)=>{
//     let genero=req.query.genero;
//     if(!genero||(genero!="M"&&genero!="F")) {res.send({error: "Ingrese genero M o F"})}
//     else {

//     let usuariosFiltrados=usuarios.filter(usuario=>usuario.genero===genero);
//     let consultas=req.query;
//     let {nombre,apellido,edad}=req.query;
//     res.send({usuarios:usuariosFiltrados});
//     }
// })






// console.log(productManager.getProducts());
// a1=productManager.getProductById(1);
// console.log(a1);
// a0=productManager.getProductById(0);
// console.log(a0);
// a3=productManager.getProductById(3);
// console.log(a3);
// productManager.addProduct("Producto 3", "Descripción del producto 3", 500, "imagen/logo3.jpg", 1, 5);
// productManager.addProduct("Producto 3", "Descripción del producto 3", 500, "imagen/logo3.jpg");
// console.log(productManager.getProducts());
// productManager.updateProduct(1,{title:undefined,description:"Descripcion actualizada producto 3",price:300, thumbnail:"imagen/logo2.jpg", code:2});
// a1=productManager.getProductById(1);
// console.log(a1);
// productManager.deleteProduct(1);
// a1=productManager.getProductById(0);
// console.log(`producto::`,a1);

