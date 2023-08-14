import productosDisponibles from '../datos/bbdd-productos.js'

// const carrito = JSON.parse(localStorage.getItem("carrito"));
const carrito = []
const contenedor = document.querySelector("#container-productos");

productosDisponibles.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card", "m-3")
    div.style.width = "18rem"

    div.innerHTML = `<img src="..." class="card-img-top" alt="...">
    <div class="card-body" id = ${producto.id}>
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: ${producto.precio}.</p>
        <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
    </div>`

    contenedor.appendChild(div)

    const buttonsCombra = document.querySelectorAll(".buttonCompra")
    

})

// buttonsCombra.forEach((button) => {
//     button.addEventListener("click",() => {
//         const buttonId = parseInt(button.getAttribute("id"));
//         const productFind = productosDisponibles.find((producto) => producto.id === buttonId);
        
//         // carrito.push(productFind);
//         // localStorage.setItem("carrito", JSON.stringify(carrito));
//         // console.log(carrito)
//     })
// });