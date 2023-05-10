
alert("Bienvenido a mi pagina, por el momento tu usuario y contraseña para ingresar seran admin y 45623 ")

let usuario = prompt("Bienvenido a mi primer pre entrega, para continuar por favor ingrese el nombre de usuario proporcionado")
let contraseña = Number(prompt("Ahora ingrese la contraseña"))

if (usuario === "admin" && contraseña == "45623") {
    alert("Ingreso con exito")
} else {
    alert("Usuario o contraseña no valido")
}



let catalogoPrimero = prompt("Desea acceder al catalogo?")

if (catalogoPrimero == "si" && "Si"){
do {
    let autos = prompt
        (` Por favor, elija una marca de autos de la cual desee saber el precio de sus modelos mas recientes o escriba salir para cerrar esta ventana
    -Ford
    -Chevrolet
    -Fiat`)

    switch (autos) {
        case "Ford" && "ford":
            alert(` Los precios para la marca Ford son los siguientes:
            Ford F-150: U$S 113.000
            Ford Msutang: U$S 74.000
            Ford Fiesta: U$S 7.985
            `)
            break;
        case "Chevrolet" && "chevrolet":
            alert(`Los precios para la marca Chevrolet son los siguientes:
            Chevrolet Onix: U$S 7.441
            Chevrolet Cruze: U$S 23.454
            Chevrolet Joy: U$S 10.874,20         `)
            break;
        case "Fiat" && "fiat":
            alert(`Los precios para la marca Chevrolet son los siguientes:
            Fiat Toro: U$S 27.697
            Fiat Strada: U$S 6.396
            Fiat 500 Abarth: U$S 23.000`)
            break;
        default:
            alert("Marca Invalida")
            break;
    }

    catalogoPrimero = prompt("Desea seguir viendo el catalogo?")
} while (catalogoPrimero != "no");
}else{
    alert ("Gracias por su visita")
}
alert ("Gracias por su visita")

