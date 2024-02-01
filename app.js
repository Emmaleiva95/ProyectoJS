const IVA = 0.21;
let bienvenida = "Hola Bienvenido a nuestra tienda virtual.";
// let usuario = prompt(bienvenida + "\nIngrese su nombre");

// let arregloProducto = ["Mouse Gamer Sony", "Teclado Red Dragon", "Monitor 25 pulgadas LG"];
/*
console.log('Seleccione un producto a comprar: ');
console.log(arregloProducto[0])
console.log(arregloProducto[1])
console.log(arregloProducto[2])
*/

/* OBJETOS */

let producto1 = {id: 1, nombre: "Mouse Gamer Sony", precio: 25000, categoria: "Mouses", stock: 10};
let producto2 = {id: 2, nombre: "Teclado Red Dragon", precio: 35000, categoria: "Teclados", stock: 5};
let producto3 = {id: 3, nombre: "Monitor 25 pulgadas LG", precio: 57000, categoria: "Monitor", stock: 7};

// ARREGLO DE OBJETOS
let arregloProducto = [producto1, producto2, producto3]


// console.log(arregloProducto[1].nombre);
/*
console.log(arregloProducto[0].nombre);
console.log(arregloProducto[1].nombre);
console.log(arregloProducto[2].nombre);
*/


// FUNCION PARA CREAR EL MENSAJE A MOSTRAR (LISTADO DE PRODUCTOS)

function mostrarListado (){
    let listadoProductos = "";
    for (let i = 0; i < 3; i++) {
    //   console.log(i);
       //console.log(arregloProducto[i]);
       listadoProductos += "ID: " + arregloProducto[i].id + "\n"
       listadoProductos += "Producto: " + arregloProducto[i].nombre + "\n"
       listadoProductos += "Precio: " + arregloProducto[i].precio + "\n"
       listadoProductos += "Stock: " + arregloProducto[i].stock + "\n"
    
       listadoProductos += "\n ------- \n \n";
        
    }
 //   console.log(listadoProductos);
    return listadoProductos;
}

function calcularCuota(cantidadCuotas, total){
   if(cantidadCuotas == 3 || cantidadCuotas == 6 || cantidadCuotas == 12){
      let montoPorCuota = total / cantidadCuotas;
      return montoPorCuota.toFixed(2);
   }else{
      return false;
   }
}

function armarResumen(producto,cantidad, total, metodo){
      let resumen = " Producto: " + producto.nombre;
      resumen += "\n Precio: $" + producto.precio;
      resumen += "\n Cantidad: " + cantidad;
      resumen += "\n Total: $" + total;
      resumen += "\n Método de pago: " + metodo;
      return resumen;
}




// LLAMO A LA FUNCION Y ALMACENO SU RESULTADO DENTRO DE UNA VARIABLE
let mensajeProductos = mostrarListado();

// LUEGO MUESTRO EL LISTADO Y LE PIDO AL USUARIO QUE INGRESE EL ID DEL PRODUCTO A COMPRAR.
let idSeleccionado = prompt("Por favor seleccione el ID del producto a comprar: \n" + mensajeProductos); 


if(idSeleccionado > 0 && idSeleccionado < 4){
   let indice = idSeleccionado - 1;
   let productoSeleccionado = arregloProducto[indice];
   let cantidad = parseInt(prompt('Qué cantidad desea comprar?'));
   if(cantidad > 0 && productoSeleccionado.stock >= cantidad ){
      let total = cantidad * productoSeleccionado.precio;


      total = total + (total * IVA);
      //console.log('La compra ha sido realizada con éxito, el total a abonar es de: $'+ total);

      let metodoDePago = parseInt(prompt('Seleccione el método de pago (1,2,3): \n\n 1- En cuotas (10% de recargo)\n 2- Debito (5% de recargo)\n 3- Efectivo (10% de descuento).'));
      
      let metodoResumen;


      if(metodoDePago != 1 && metodoDePago != 2 && metodoDePago != 3){
         alert('El metodo de pago ingresado no es valido (valores validos: 1, 2 o 3).')
      }else{
         if(metodoDePago == 1){
            total = total * 1.1;
            let cantidadCuotas = parseInt(prompt('Seleccione la cantidad de cuotas: \n 3 \n 6 \n 12 '))
            let resultado = calcularCuota(cantidadCuotas,total);
            if(resultado){ 
               alert('El monto a abonar por cuota es de: $'+ resultado)
            }else{
               alert('Error: debe seleccionar 3, 6 o 12.')
            }
            metodoResumen = "Cuotas";
            
         }else if(metodoDePago == 2){
            total = total * 1.05;
            metodoResumen = "Débito";
         }else if (metodoDePago == 3){
            total = total * 0.9;
            metodoResumen = "Efectivo";
         }
         alert(armarResumen(productoSeleccionado,cantidad, total, metodoResumen));
      }
   

   }else{
      alert('La cantidad que desea comprar supera el stock disponible')
   }
}else{
   alert('El ID ingresado no es valido');
}









