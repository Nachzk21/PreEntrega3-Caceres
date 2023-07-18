
// Capturar objetos del DOM
const articulos = document.querySelector("#contenedor")
const verCarrito = document.querySelector("#icon")
const carritoCuerpo = document.querySelector("#ShowCart")
const totalDeCompra = document.querySelector("#totalContainer")
const mayorMenorBtn = document.querySelector("#mayor_menor");
const menorMayorBtn = document.querySelector("#menor_mayor");
const fordBtn = document.querySelector("#fordFiltro");
const chevroletBtn = document.querySelector("#chevroletFiltro");
const fiatBtn = document.querySelector("#fiatFiltro");
const reestablecerBtn = document.querySelector("#reestablecer");


/*arrays*/
let famosoCarrito = []
/* array para almacenar el orden original de los productos antes de filrarlos*/
let ordenOriginal = [];


/*Carga de datos desde un JSON local*/
const traerCatalogo = async () => {
    const response = await fetch("data.json");
    const productosDeJson = await response.json();

    /* Función para mostrar los productos en el contenedor */
    function mostrarProductos(productosDeJson) {
        productosDeJson.forEach((auto) => {
            let carrusel = document.createElement("div");
            carrusel.classList.add("card", "col-lg-5", "bg-dark-subtle", "m-2", "d-lg-inline-flex", "justify-content-between");
            carrusel.id = `${auto.marca}`;
            carrusel.innerHTML = `
                <img src="${auto.imagen}" class="card-img-top p-2" alt="..." style="width: 100%; height: 100%;">
            <div class="card-body " style="padding: 10px;">
                <h5 class="card-title fs-1">${auto.marca} ${auto.modelo}</h5>
                <p class="card-text fs-5">${auto.descripcion}.</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Color: ${auto.color}</li>
                <li class="list-group-item">Año: ${auto.año}</li>
                <li class="list-group-item">Precio: ${auto.precio}</li>
            </ul>
        <div class="card-body">
            <a class="btn bg-primary-subtle btn-light d-flex justify-content-center" id="item-${auto.id}">Agregar al carrito</a>
        </div>
    `;
            articulos.appendChild(carrusel);

            // para cada elemento seleccionado le agregamos un evento click que lo pushee al carrito
            const itemSeleccionado = document.querySelector(`#item-${auto.id}`);

            itemSeleccionado.addEventListener("click", () => {
                const obtenerProducto = obtenerID(auto.id);

                if (obtenerProducto !== -1) {
                    famosoCarrito[obtenerProducto].cantidad++;
                    famosoCarrito[obtenerProducto].costoTotal =
                        famosoCarrito[obtenerProducto].precio *
                        famosoCarrito[obtenerProducto].cantidad;
                } else {
                    famosoCarrito.push({
                        marca: auto.marca,
                        precio: auto.precio,
                        imagen: auto.imagen,
                        id: auto.id,
                        modelo: auto.modelo,
                        cantidad: 1,
                        costoTotal: auto.precio,
                    });
                }
            });
        });
    }

    /* Función para limpiar el contenedor de productos */
    function limpiarProductos() {
        articulos.innerHTML = "";
    }

    // Función para filtrar y mostrar los productos según el filtro seleccionado
    function filtrarProductos(filtro) {
        let productosFiltrados = [];

        if (filtro === "mayor_menor") {
            productosFiltrados = productosDeJson.sort((a, b) => b.precio - a.precio);
        } else if (filtro === "menor_mayor") {
            productosFiltrados = productosDeJson.sort((a, b) => a.precio - b.precio);
        } else {
            const marca = filtro.replace("Filtro", "");
            productosFiltrados = productosDeJson.filter((auto) => auto.marca === marca);
        }

        limpiarProductos();
        mostrarProductos(productosFiltrados);
    }


    mayorMenorBtn.addEventListener("click", () => {
        filtrarProductos("mayor_menor");
    });

    menorMayorBtn.addEventListener("click", () => {
        filtrarProductos("menor_mayor");
    });

    fordBtn.addEventListener("click", () => {
        filtrarProductos("FordFiltro");
    });

    chevroletBtn.addEventListener("click", () => {
        filtrarProductos("ChevroletFiltro");
    });

    fiatBtn.addEventListener("click", () => {
        filtrarProductos("FiatFiltro");
    });

    reestablecerBtn.addEventListener("click", reestablecerPagina);

    // Función para reestablecer la página y mostrar todos los productos en el orden original
    function reestablecerPagina() {
        limpiarProductos();
        mostrarProductos(ordenOriginal);
    }

    // Mostrar todos los productos al cargar la página por primera vez y almacenar el orden original
    ordenOriginal = productosDeJson.slice();
    mostrarProductos(productosDeJson);
}
traerCatalogo()


/*Carrito de compras*/

// Funcion para obtener el un id de un producto
function obtenerID(idProductoSuma) {
    return famosoCarrito.findIndex((item) => item.id === idProductoSuma);
}

verCarrito.addEventListener("click", () => {
    carritoCuerpo.innerHTML = "";

    let precioTotal = 0;
    /* por cada elemento del carrito va a crear un div el cual contenga,imagen, marca, modelo, precio y un boton para eliminarlo */
    famosoCarrito.forEach((e) => {
        let productosDelCarrito = document.createElement("div");
        productosDelCarrito.className = "productos-carro"
        productosDelCarrito.innerHTML = `
    <img src="${e.imagen}">
    <h3>${e.marca} ${e.modelo} </h3>
    <h4>$${e.precio}</h4>
    <h5>Cantidad: ${e.cantidad}</h5>
    <button class="btn btn-danger btn-sm delete-btn mb-3" data-id="${e.id}">Eliminar producto</button>
    `
        carritoCuerpo.appendChild(productosDelCarrito)
        /* suma el precio total que arranca en 0 al costo total de cada producto agregado*/
        precioTotal += e.costoTotal;

        // Capturo el boton "eliminar producto" del DOM y lo guardo en una variable
        const botonEliminar = productosDelCarrito.querySelector(".delete-btn");

        botonEliminar.addEventListener("click", () => {
            // Obtener el ID del producto que voy a eliminar
            const idProducto = parseInt(botonEliminar.getAttribute("data-id"));
            // Filtro el carrito para eliminar el producto que corresponda
            famosoCarrito = famosoCarrito.filter((item) => item.id !== idProducto);
            // Volver a mostrar el carrito actualizado
            verCarrito.click();
        })

    });

    /*Actualiza el precio total*/
    precioTotalElement.innerHTML = `Precio total: $${precioTotal}`
})

// Boton hecho con boostrap el cual va a mostar el precio total y al ser boton deberia dirigir a un proceso de finalizacion de compra
let precioTotalElement = document.createElement("a");
precioTotalElement.classList.add("btn", "btn-secondary");
totalDeCompra.appendChild(precioTotalElement);













