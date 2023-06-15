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


// Obtén una referencia al elemento del carrito en el HTML
const carrito = document.querySelector("#icon");

// Crea una variable para almacenar los productos agregados al carrito
const productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  // Verifica si el producto ya está en el carrito
  const productoExistente = productosEnCarrito.find(
    (item) => item.id === producto.id
  );

  if (productoExistente) {
    // Si el producto ya está en el carrito, muestra una alerta o realiza alguna otra acción
    alert("Este producto ya está en el carrito.");
    return;
  }

  // Agrega el producto al arreglo de productos en el carrito
  productosEnCarrito.push(producto);

  // Actualiza la visualización del carrito
  mostrarProductosEnCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
  // Encuentra el índice del producto en el arreglo
  const index = productosEnCarrito.findIndex((item) => item.id === producto.id);

  if (index !== -1) {
    // Elimina el producto del arreglo de productos en el carrito
    productosEnCarrito.splice(index, 1);
  }

  // Actualiza la visualización del carrito
  mostrarProductosEnCarrito();
}

// Función para mostrar los productos en el carrito
function mostrarProductosEnCarrito() {
  // Limpia el contenido anterior del carrito
  carrito.innerHTML = "";

  // Calcula el precio total de los productos en el carrito
  let precioTotal = 0;

  // Recorre los productos en el carrito y crea elementos HTML para cada uno
  productosEnCarrito.forEach((producto) => {
    // Crea los elementos HTML para mostrar la información del producto en el carrito
    const productoEnCarrito = document.createElement("div");
    productoEnCarrito.classList.add("producto-en-carrito");
    productoEnCarrito.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.marca} ${producto.modelo}">
      <div>
        <p>${producto.marca} ${producto.modelo}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
      <button class="btn-eliminar" data-id="${producto.id}">Eliminar</button>
    `;

    // Agrega el producto al carrito en el HTML
    carrito.appendChild(productoEnCarrito);

    // Calcula el precio total sumando el precio de cada producto
    precioTotal += parseFloat(producto.precio.replace("U$S ", ""));
  });

  // Crea el elemento HTML para mostrar el precio total
  const precioTotalElement = document.createElement("div");
  precioTotalElement.classList.add("precio-total");
  precioTotalElement.textContent = `Precio Total: U$S ${precioTotal}`;

  // Agrega el precio total al carrito en el HTML
  carrito.appendChild(precioTotalElement);
}

// Escucha los clics en el carrito para manejar la eliminación de productos
carrito.addEventListener("click", (event) => {
  // Verifica si el elemento clicado es el botón de eliminar
  if (event.target.classList.contains("btn-eliminar")) {
    // Obtiene el ID del producto a eliminar
    const productId = parseInt(event.target.dataset.id);

    // Encuentra el producto correspondiente en el arreglo de productos en el carrito
    const productoAEliminar = productosEnCarrito.find(
      (producto) => producto.id === productId
    );

    if (productoAEliminar) {
      // Elimina el producto del carrito
      eliminarDelCarrito(productoAEliminar);
    }
  }
});

// Agrega un listener a los botones "Agregar al carrito" de cada producto
const botonesAgregar = document.querySelectorAll(".btn.bg-primary-subtle");
botonesAgregar.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Obtiene el ID del producto a agregar
    const productId = parseInt(boton.parentNode.parentNode.id);

    // Encuentra el producto correspondiente en el catálogo
    const productoAAgregar = catalogo.find(
      (producto) => producto.id === productId
    );

    if (productoAAgregar) {
      // Agrega el producto al carrito
      agregarAlCarrito(productoAAgregar);
    }
  });
});

// Función para mostrar u ocultar el carrito al hacer clic en el icono
function toggleCarrito() {
    // Obtiene una referencia al elemento del carrito
    const carritoElement = document.querySelector("#carrito");
  
    // Si el carrito está oculto, lo muestra; si está visible, lo oculta
    if (carritoElement.classList.contains("d-none")) {
      carritoElement.classList.remove("d-none");
    } else {
      carritoElement.classList.add("d-none");
    }
  }
  
  // Agrega un listener al elemento con id "icon" para mostrar/ocultar el carrito
  const iconoCarrito = document.querySelector("#icon");
  iconoCarrito.addEventListener("click", toggleCarrito);