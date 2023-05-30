alert("Bienvenido a mi pagina, por el momento tu usuario y contraseña para ingresar seran admin y 45623 ")


//Inicio de sesion

function validarUsuario() 
{
const user = "admin"
const password = "45623"
let userOK = false

while (userOK === false){
    let usuarioIngresado = prompt("Ingrese el usuario proporcinado")
    let passwordIngresada = prompt("Ingrese la contraseña proporcionada")

    if (usuarioIngresado === user && passwordIngresada === password) {
        alert("Bienvenido" + " " + usuarioIngresado)
        userOK = true
    } else {
        alert("Usuario o contraseña incorrectos")
        reintentar = confirm("Desea volver a intentarlo")
        if(reintentar){
            userOK = false
            break
        }
    }
}
}

validarUsuario()

// Constructor de objetos

class autoNuevo{
    constructor(marca, modelo, color){
    this.marca = marca
    this.modelo = modelo
    this.color = color
    }
}




// Objeto de arryas
let catalogo = [
    {marca: "Ford", modelo: "Fiesta", año: "2008", color: "blanco", precio: "U$S 8500"},
    {marca: "Ford", modelo: "EcoSport", año: "2013", color: "negro", precio: "U$S 13.500"},
    {marca: "Chevrolet", modelo: "Camaro", año: "2014", color: "amarillo", precio: "U$S 59.500"},
    {marca: "Chevrolet", modelo: "Corsa", año: "2009", color: "gris", precio: "U$S 3800"},
    {marca: "Fiat", modelo: "Cronos", año: "2023", color: "blanco", precio: "U$S 32.520"},
    {marca: "Fiat", modelo: "147", año: "1983", color: "rojo", precio: "U$S 21.000"},
]

// Recorrer el array
function mostrarFord(){
    const ford = catalogo.filter((e)=> e.marca.includes ("Ford") )
    modelosDisponibles = 'Los Modelos disponibles para la marca Ford son: \n';
    for (const vehiculo of ford) {
        modelosDisponibles += `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.año}. Color ${vehiculo.color} con un precio de ${vehiculo.precio} \n`
    }

    alert(modelosDisponibles)
}

function mostrarChevrolet(){
    const chevrolet = catalogo.filter((e)=> e.marca.includes ("Chevrolet") )
    modelosDisponibles = 'Los Modelos disponibles para la marca Chevrolet son: \n';
    for (const vehiculo of chevrolet) {
        modelosDisponibles += `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.año}. Color ${vehiculo.color} con un precio de ${vehiculo.precio} \n`
    }

    alert(modelosDisponibles)
}

function mostrarFiat(){
    const fiat = catalogo.filter((e)=> e.marca.includes ("Fiat") )
    modelosDisponibles = 'Los Modelos disponibles para la marca Fiat son: \n';
    for (const vehiculo of fiat) {
        modelosDisponibles += `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.año}. Color ${vehiculo.color} con un precio de ${vehiculo.precio} \n`
    }

    alert(modelosDisponibles)
}


// Funcion para construir un objeto

function sugerirProducto() {
    let marca = prompt("De que marca deberia ser el nuevo vehiculo?")
    let modelo = prompt(`Y que modelo de la marca ${marca} deberiamos traer?` )
    let color = prompt("Algun color en especifico?") 

    const nuevoAuto = new autoNuevo(marca,modelo,color)

    arrayNuevoAuto.push(nuevoAuto)
    alert("Gracias por su sugerencia!")
}

//Funcion para mostrar productos recorriendo el array


function sugerencias(){
    arrayNuevoAuto.forEach((e)=> {
        alert (`Hola! anteriormente sugeriste los siguientes autos para añadir a nuestro catalogo: \n Marca: ${e.marca} \n Modelo: ${e.modelo} \n Color: ${e.color}` )
    })
}

let arrayNuevoAuto = []

// Opciones para el usuario

let opciones = prompt("Ingrese una opcion para continuar: \n 1: Ver catalogo Ford \n 2: Ver catalogo Fiat \n 3: Ver catalogo Chevrolet \n 4: Sugerir un nuevo para añadir al catalogo \n 5: Ver sugerencias \n 6: Finalizar ")

while(opciones !== "6") 
{
    if (opciones === "1"){
        mostrarFord()
    }
    if (opciones === "2"){
        mostrarFiat()
    }
    if (opciones === "3"){
        mostrarChevrolet()
    }
    if (opciones === "4"){
        sugerirProducto()
    }
    if (opciones === "5" ){
        sugerencias()
    }
    opciones = prompt("Vuelva a ingresar una opcion \n 1: Ver catalogo Ford \n 2: Ver catalogo Fiat \n 3: Ver catalogo Chevrolet \n 4: Sugerir un nuevo para añadir al catalogo \n 5: Ver sugerencias \n 6: Finalizar  ")
}








