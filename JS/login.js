import bbdd from '../datos/bbdd.js'

let user = {
    usuario: '',
    contraseña:'',
}

const buttonLogin = document.getElementById("login-button");

const inputs = document.querySelectorAll("input"); 
const form = document.querySelector("form")

buttonLogin.addEventListener("click",(e)=>{
e.preventDefault();
    const userFind = bbdd.find((registro) => user.usuario === registro.usuario && user.contraseña === registro.contraseña)
        if(!userFind){ 
            alert("Contraseña o usuario incorrecto");
            form.reset();
            return;
        }
        window.location.href = '/products.html';
        localStorage.setItem("usuario",JSON.stringify(userFind));
});


inputs.forEach( (elemento) => {
    elemento.addEventListener("input",({ target })=>{
        const { value, name } = target;
        user = {
            ...user,
            [name]: value
        }
    })
})