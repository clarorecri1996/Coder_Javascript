let menu = "1- inciar sesion \n2- iniciar con otra cuenta \n3- salir"
//let lista= "Bienvenido a Impresiones-VK 3D! Indique que decea hacer: \n1- Comprar \n2- Horario de atencion \n3- Nuestro contacto \n4- volver al menu de inicio "

let user = "claudio"
let pass= 12345
//cuenta nueva
let userNew
let passNew
//menus
let opcion
let opcionInterno

//Reintento para una sesion fallida
function reintentar() {
    if(user==usuario && pass==contrasena){
        alert("contraseña incorrecta, intente nuevamenete")
    }else{
        usuario = prompt("ingrese usuario")
        contrasena = prompt("ingrese contraseña")
        if(user==usuario && pass==contrasena){
            alert(`Bienvenido ${usuario}`)
        }else{
            alert("contraseña incorrecta, intente nuevamenete")
            if(user==usuario && pass==contrasena){
                alert(`Bienvenido ${usuario}`)
            }else{
                usuario = prompt("ingrese usuario")
                contrasena = prompt("ingrese contraseña")
                if(user==usuario && pass==contrasena){
                    alert(`Bienvenido ${usuario}`)  
                } else{
                    alert("limite de intento superado, intentelo mas tarde")
                }
            }
        }
    }
}

do{
    alert (menu)
    opcion = Number(prompt("ingrese el numero de la opcion"))
    let usuario ;
    let contrasena ;

}while(opcion!==1 && opcion!==2 && opcion!==3){
    if(opcion===1){
        usuario = prompt("ingrese usuario")
        contrasena = prompt("ingrese contraseña")
        if(user==usuario && pass==contrasena){
            alert(`Bienvenido ${usuario}`)
            
        }else{
            alert("contraseña incorrecta, intente nuevamenete")
            reintentar()
            
        }
    }else if(opcion===2){
        userNew = prompt(`ingrese nuevo usuario`)
        passNew = prompt(`ingrese nueva contraseña`)
        alert(`Bienvenido ${userNew} su contraseña es ${passNew}`)
    }else{
        alert(`Vuelva pronto`)
    }
}
