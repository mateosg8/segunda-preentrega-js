const Producto = function (nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto ("pera","1000","30")
let producto2 = new Producto ("manzana","2000","35")
let producto3 = new Producto ("banana","3000","15")
let producto4 = new Producto ("coco","3500","6")
let producto5 = new Producto ("sandia","2300","10")
let producto6 = new Producto ("naranja","1500","22")
let producto7 = new Producto ("mandarina","1000","30")
let producto8 = new Producto ("kiwi","4000","45")

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8]

function buscarproductos(){
    let palabraclave = prompt("¿que producto andas buscando?").toUpperCase()
    let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraclave))

    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no se encontro " + palabraclave)
    }
}

function agregarproducto(){
    let nombre = prompt("ingresa el nombre")
    let precio = parseInt (prompt("ingresa el precio"))
    let stock = parseInt (prompt("ingresa el stock"))

    let producto = new Producto(nombre,precio,stock)

    lista.push(producto)
    console.table(lista)
}