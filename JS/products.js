import productosDisponibles from '../datos/bbdd-productos.js'

document.addEventListener("DOMContentLoaded", () => {
    ///Seleccion de html
    const contenedor = document.querySelector("#container-productos");
    const buttonFilter = document.querySelectorAll(".buttonFilter");

    // Mostrar Todos los productos
    productosDisponibles.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card", "m-3")
        div.style.width = "18rem"
        div.innerHTML =`
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body" id = ${producto.id}>
            <p class="card-text">Precio: ${producto.precio}.</p>
            <h5 class="card-title">${producto.nombre}</h5>
            <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
            </div>
        `
        contenedor.appendChild(div)
    });

    // Mostrar productos filtrados
    buttonFilter.forEach((button) => {
        button.addEventListener("click", (event) => {
            const catProduct = event.target.getAttribute("id");
            const catFind = productosDisponibles.filter((producto) => producto.categoria === catProduct);
            ///Limpiar contenedor
            contenedor.innerHTML = ``;
            catFind.forEach((producto) => {
                const div = document.createElement("div");
                div.classList.add("card", "m-3")
                div.style.width = "18rem"

                div.innerHTML =
                    `<img src="${producto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body" id = ${producto.id}>
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: ${producto.precio}.</p>
                        <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
                    </div>`
                contenedor.appendChild(div)
            });
        })
    })
});
















