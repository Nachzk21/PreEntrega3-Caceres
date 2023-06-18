alert("Bienvenido a mi pagina, por el momento tu usuario y contraseña para ingresar seran admin y 45623 ")


//Inicio de sesion

function validarUsuario() {
    const user = "admin"
    const password = "45623"
    let userOK = false

    while (userOK === false) {
        let usuarioIngresado = prompt("Ingrese el usuario proporcinado")
        let passwordIngresada = prompt("Ingrese la contraseña proporcionada")

        if (usuarioIngresado === user && passwordIngresada === password) {
            alert("Bienvenido" + " " + usuarioIngresado)
            userOK = true
        } else {
            alert("Usuario o contraseña incorrectos")
            reintentar = confirm("Desea volver a intentarlo")
            if (reintentar) {
                userOK = false
                break
            }
        }
    }
}

// validarUsuario()

// Constructor de objetos






// Array de objetos
let catalogo = [
    { marca: "Ford", modelo: "Fiesta", año: "2008", color: "blanco", precio: "U$S 8500", imagen: "./Imagenes/Ford-Fiesta.jpg", id: 1 , descripcion:"El nuevo Ford Fiesta 2008 mantiene la actual plataforma, lanzada en el año 2002. Este modelo es fabricado en la plata de Camaçari, el Salvador de Bahía, Brasil, una de las más modernas de Ford y de las más avanzadas a nivel mundial. El nuevo modelo presenta mejoras en su interior y exterior con una máscara que le otorga una presencia moderna, actual. Este renovado diseño se enmarca dentro de la línea Cinética (Conetic) que Ford le ha plasmado a sus nuevos modelos a nivel mundial."  },
    { marca: "Ford", modelo: "EcoSport", año: "2013", color: "negro", precio: "U$S 13.500", imagen: "./Imagenes/Ford-Ecosport.jpg", id: 2, descripcion:"La Nueva Ford EcoSport es un SUV compacto light que despliega las fluidas líneas que marcan una evolución en el Kinetic Design. La Nueva Ecosport dispone de una capacidad para cinco pasajeros con medidas de 4.241 mm, un ancho de 1.765 mm y un alto de 1.693 mm con una capacidad de vadeo de hasta 550mm y un despeje al piso que alcanza los 220mm que le permiten hacer transitables caminos irregulares"},
    { marca: "Chevrolet", modelo: "Camaro", año: "2014", color: "amarillo", precio: "U$S 59.500", imagen: "./Imagenes/chevrolet_camaro.jpg", id: 3, descripcion: "Las nuevas características exteriores de Camaro 2014 incluyen un rediseño tanto en la parrilla principal, la cual es más angosta y lo hace lucir más agresivo, como en la parrilla inferior. Cuenta con una nueva toma de aire en el cofre que es funcional ya que además de reducir la temperatura del motor ayuda a la aerodinámica del vehículo, asimismo, se rediseñaron los faros delanteros y los faros traseros, que ahora son horizontales e incorporan luces LED en la versión SS. También se rediseñó el spoiler trasero y está equipado con nuevas salidas de escape redondeadas. “Algo que no cambia en Camaro 2014 es su imponente presencia”" },
    { marca: "Chevrolet", modelo: "Corsa", año: "2009", color: "gris", precio: "U$S 3800", imagen: "./Imagenes/chevrolet-corsa.png", id: 4, descripcion: "El Chevrolet Corsa modelo 2009 es un automóvil compacto fabricado por General Motors. Ofrece un diseño moderno y aerodinámico, con líneas suaves y elegantes. Este vehículo cuenta con una amplia cabina que puede acomodar cómodamente a cinco pasajeros. El Corsa 2009 está equipado con un motor eficiente y confiable que ofrece un buen rendimiento en la ciudad y en carretera.  " },
    { marca: "Fiat", modelo: "Cronos", año: "2023", color: "blanco", precio: "U$S 32.520", imagen: "./Imagenes/fiat-cronos.jpeg", id: 5, descripcion: "El Fiat Cronos modelo 2023 es un sedán compacto de última generación fabricado por Fiat. Presenta un diseño moderno y elegante, con líneas aerodinámicas y detalles estilizados que le dan una apariencia sofisticada. El Cronos 2023 ofrece un amplio espacio interior para cinco ocupantes, con asientos cómodos y un baúl de generosa capacidad" },
    { marca: "Fiat", modelo: "147", año: "1983", color: "rojo", precio: "U$S 21.000", imagen: "./Imagenes/fiat-147.jpg", id: 6, descripcion: "El Fiat 147 presenta un diseño sencillo y funcional, con líneas rectas y una carrocería compacta. A pesar de su tamaño reducido, el interior del vehículo ofrece espacio suficiente para transportar a cuatro personas con comodidad. El modelo 1983 del Fiat 147 estaba disponible con varias opciones de motorización, que incluían motores de gasolina y motores diésel, dependiendo del mercado y las regulaciones locales." },
]


const articulos = document.querySelector("#contenedor")

catalogo.forEach((auto, agregados) => {
    let carrusel = document.createElement("div")
    carrusel.classList.add("card",  "col-lg-5", "bg-dark-subtle", "m-2", "d-lg-inline-flex" , "justify-content-between", )
    carrusel.id = (`${auto.marca}`)
    carrusel.innerHTML = 
    `<img src="${auto.imagen}" class="card-img-top p-2" alt="..." style="width: 100%; height: 100%;"  > 
    <div class="card-body " style="padding: 10px;">
        <h5 class="card-title fs-1">${auto.marca} ${auto.modelo}</h5>
        <p class="card-text fs-5">${auto.descripcion}.</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item ">Color: ${auto.color}</li>
        <li class="list-group-item">Año: ${auto.año}</li>
        <li class="list-group-item">Precio: ${auto.precio}</li>
    </ul>
    <div class="card-body">
        <a href="#icon" class="btn bg-primary-subtle btn-light d-flex justify-content-center">Agregar al carrito</a>
    </div> 
    `
    articulos.appendChild(carrusel)

})


