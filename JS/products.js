import productosDisponibles from '../datos/bbdd-productos.js'

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedor = document.querySelector("#container-productos");

// Function Agregar buttonCompra

function addButtonCompraEvent() {
    const buttonCompra = document.querySelectorAll(".buttonCompra");
    buttonCompra.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productId = parseInt(event.target.getAttribute("id"));
            const productFind = productosDisponibles.find((producto) => producto.id === productId);
            if (productFind) {
                carrito.push(productFind);
                console.log(`Producto: ${productFind.nombre}. Agregado al carrito`);
                localStorage.setItem("carrito", JSON.stringify(carrito));
            }
        });
    });
}


// Mostrar Todos los productos

productosDisponibles.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("card", "m-3")
    div.style.width = "18rem"

    div.innerHTML =
        `<img src="..." class="card-img-top" alt="...">
    <div class="card-body" id = ${producto.id}>
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Precio: ${producto.precio}.</p>
        <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
    </div>`

    contenedor.appendChild(div)
});
addButtonCompraEvent();


// Mostrar productos filtrados

const buttonFilter = document.querySelectorAll(".buttonFilter");
buttonFilter.forEach((button) => {
    button.addEventListener("click", (event) => {
        const catProduct = event.target.getAttribute("id");
        const catFind = productosDisponibles.filter((producto) => producto.categoria === catProduct);
        ///console.log(catFind)
        ///Limpiar contenedor
        contenedor.innerHTML = ``;
        catFind.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("card", "m-3")
            div.style.width = "18rem"

            div.innerHTML =
                `<img src="..." class="card-img-top" alt="...">
                    <div class="card-body" id = ${producto.id}>
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">Precio: ${producto.precio}.</p>
                        <a href="#" class="btn btn-primary buttonCompra" id = ${producto.id}>Agregar al carrito</a>
                    </div>`
            contenedor.appendChild(div)
        });
        addButtonCompraEvent();
    })
})


///Carrito 

const carritoAct = [];

carrito.forEach((producto) =>{
    let nombreProduct = producto.nombre
    const productCheck = carritoAct.find(producto => producto.nombre === nombreProduct)
    if(!productCheck){
        const productoN = ({...producto, cantidad:1});
        carritoAct.push(productoN);
    } else {
        productCheck.cantidad++;
    }
});




const tableCarrito = document.querySelector("#carritoRow");


carritoAct.forEach(producto => {
    
    const tr = document.createElement("tr");
    
    tr.innerHTML =
        `<th scope="row">${producto.id}</th>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>"${producto.cantidad}"</td>`
    tableCarrito.appendChild(tr);
})









