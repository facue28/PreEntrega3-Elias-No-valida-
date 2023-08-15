import productosDisponibles from "../datos/bbdd-productos.js";

document.addEventListener("DOMContentLoaded", () => {
/// Seleccion Html
const buttonCompra = document.querySelectorAll(".buttonCompra");
const tableCarrito = document.querySelector("#carritoRow");
    buttonCompra.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productId = parseInt(event.target.getAttribute("id"));
            const productFind = productosDisponibles.find((producto) => producto.id === productId);
            if (productFind) {
                if (!localStorage.carrito) {
                    localStorage.setItem("carrito", JSON.stringify([{ ...productFind, cantidad: 1 }]));
                } else {
                    const carrito = JSON.parse(localStorage.carrito)
                    const existeEnCarrito = carrito.find(element => element.id === productFind.id);
                    if (existeEnCarrito) {
                        carrito.map(element => {
                            if (element.id === existeEnCarrito.id) {
                                existeEnCarrito.cantidad++;
                            } return element
                        })
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                    } else {
                        carrito.push({ ...productFind, cantidad: 1 });
                        localStorage.setItem("carrito", JSON.stringify(carrito))
                    }
                }
            }
            //Mostrar carrito
            const carritoAMostrar = JSON.parse(localStorage.getItem("carrito"));
            tableCarrito.innerHTML = " "
            carritoAMostrar.forEach(producto => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                        <th id=${producto.id} scope="row">${producto.id}</th>
                        <td>${producto.nombre}</td>
                        <td>$ ${producto.precio}</td>
                        <td><button type="button" class="btn btn-primary btn-sm">- </button>${producto.cantidad}<button type="button" class="btn btn-primary btn-sm"> +</button></td>
                    `
                    tableCarrito.appendChild(tr);
            })
        });
    });
});





