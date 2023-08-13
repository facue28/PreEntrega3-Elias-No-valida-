import bbdd from '../datos/bbdd.js'
import bienvenidaAlUsuario from './bienvenida.js';

let user = {
    usuario: '',
    contraseña:'',
}


const existeUsuario = JSON.parse(localStorage.getItem("usuario")); // localstorage -> {nombre:"",contraseña:""}
const buttonLogin = document.getElementById("login-button");
const app = document.querySelector("#app");
const inputs = document.querySelectorAll("input"); 
const form = document.querySelector("form")

existeUsuario &&  bienvenidaAlUsuario(existeUsuario.usuario); // {} verdadero - null falsy


buttonLogin.addEventListener("click",()=>{

const userFind = bbdd.find((registro) => user.usuario === registro.usuario && user.contraseña === registro.contraseña)
    if(userFind){ 
        bienvenidaAlUsuario(userFind.usuario);
        localStorage.setItem("usuario",JSON.stringify(userFind));
    }else{
        alert("Contraseña o usuario incorrecto");
        form.reset();
    }
});


inputs.forEach( (elemento) => {
    elemento.addEventListener("input",({ target })=>{
        // const name = user.usuario;
        const { value, name } = target;

        // //const { target } = event; // destructuro event sacandole solo target
        // const { value, name: nameFromTarget } = target;

        // if(nameFromTarget === 'usuario'){
        //     user.usuario = value;
        // }
        // if(name === 'contraseña'){
        //     user.contraseña = value;
        // }
        
        // user[name] = value; 

        user = {
            ...user,
            [name]: value
        }

    })
})