import productosDisponibles from '../datos/bbdd-productos.js'

const carrito = JSON.parse(localStorage.getItem("carrito"));

const contenedor = document.querySelector("#container-productos");

productosDisponibles.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card","m-3")
    div.style.width="18rem"

    div.innerHTML = `<img src="..." class="card-img-top" alt="...">
    <div class="card-body" id = ${producto.id}>
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: ${producto.precio}.</p>
        <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
    </div>`

contenedor.appendChild(div)

})
