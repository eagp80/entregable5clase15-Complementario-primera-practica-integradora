
 
# ESTE REPOSITORIO CORRESPONDE  A SERVIDOR DE PRODUCTOS CON WEBSOCKETS Y HANDLEBARS. ENTREGABLE 4 CLASE 10.

## Consigna. Se está requiriendo lo siguiente:

Configurar nuestro proyecto para que trabaje con Handlebars y websocket. En este caso usé el puerto 8081.

## Aspectos a incluir

- Configurar el servidor para integrar el motor de plantillas Handlebars e instalar un servidor de socket.io al mismo. 

- Crear una vista “home.handlebars” la cual contenga una lista de todos los productos agregados hasta el momento.

- Además, crear una vista “realTimeProducts.handlebars”, la cual vivirá en el endpoint “/realtimeproducts” en nuestro views router, ésta contendrá la misma lista de productos, sin embargo, ésta trabajará con websockets.

- Al trabajar con websockets, cada vez que creemos un producto nuevo, o bien cada vez que eliminemos un producto, se debe actualizar automáticamente en dicha vista la lista.

### Sugerencias

- Ya que la conexión entre una consulta HTTP y websocket no está contemplada dentro de la clase. Se recomienda que, para la creación y eliminación de un producto, Se cree un formulario simple en la vista  realTimeProducts.handlebars. Para que el contenido se envíe desde websockets y no HTTP. Sin embargo, esta no es la mejor solución, leer el siguiente punto.

- Si se desea hacer la conexión de socket emits con HTTP, deberás buscar la forma de utilizar el servidor io de Sockets dentro de la petición POST. ¿Cómo utilizarás un emit dentro del POST?

## Formato del entregable

- Link al repositorio de Github, el cual debe contar con todo el proyecto.
- NO INCLUIR LOS node_modules generados.

## *PROCESO DE TESTING*

- Se instalará y correrá el servidor en el puerto indicado.
    - El servidor debe levantarse sin problema.
- Se abrirá la ruta raíz
    - Debe visualizarse el contenido de la vista index.handlebars. ((En mi caso usé “home.handlebars”, ya que así decía la consigna al principio)).
    - No se debe activar el websocket aún.
- Se buscará en la url del navegador la ruta “/realtimeproducts”.
    - Se corroborará que el servidor haya conectado con el cliente, en la consola del servidor deberá mostrarse un mensaje de “cliente conectado”.
    - Se debe mostrar la lista de productos y se corroborará que se esté enviando desde websocket.
## Rutas:

- Carritos:
    - /api/carts/:cid   GET_BY_CID
    - /api/carts/   POST
    - /api/carts/:cid/product/:pid  POST agregar producto pid a carrito cid
    - En api/carts/  No hay PUT ni DELETE

- Productos:
    - /api/products/:pid GET_BY_PID, PUT, DELETE
    - /api/products/ GET de todos los productos, POST

- Socket IO:
    - /    GET    Tiene socket. Utiliza vista "home.handlebars" y muestra lista de todos los productos.
    - /realtimeproducts  GET   Tiene socket. Utiliza vista "realTimeProducts.handlebars" y muestra Lista de productos, al crear un producto nuevo lo muestra resaltado en una tabla, agrega al final de la lista mostrada el nuevo producto.
