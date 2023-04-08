let menu = "1- inciar sesion \n2- iniciar con otra cuenta \n3- salir"

let user = "claudio"
let pass= 12345
//cuenta nueva
let userNew
let passNew
//menus
let opcion

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
                    .break
                }
            }
        }
    }
}

//Inicio sesion
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
        function NuevoUsuario (userNew, passNew){
            this.userNew = userNew
            this.passNew = passNew
            this.nuevaSesion = function(){
                return this.userNew +" "+ this.passNew
            }
        }
        let usuario1 = new NuevoUsuario(userNew, passNew)
        alert ("su nuevo usuario y contraseña son" + " " +usuario1.nuevaSesion())
    }else{
        alert(`Vuelva pronto`)
        .break
    }
}

//OPCION VER MARCAS
let productos = [
    {
        id:1,
        marca:"printalot",
    },
    
    {
        id:2,
        marca:"grilot",
    },
    
    {
        id:3,
        marca:"sans",
    }
]

//Lista de almacen por producto

let almacenesPrintalot = [
    {id: 1, tipo:"pla", precio: "$3500" },
    {id:2 , tipo: "abs", precio: "$4000"},
    {id: 3, tipo: "elastica", precio: "$5000"}
]

let almacenesGrilot = [
    {id: 1, tipo:"pla", precio: "$3500" },
    {id:2 , tipo: "abs", precio: "$4000"}
]

let almacenesSans = [
    {id: 1, tipo:"pla", precio: "$3500" }
]
//Segundo menu
let lista
//Tercer menu
let listaProductos = "ingrese el numero de la marca que le interesa \n-" + productos.map(producto => producto.id + " " + producto.marca).join("\n")
let opcion2

let almacenesPr = "Elija el numero de material que decea comprar \n-" + almacenesPrintalot.map(almacen => almacen.id +" "+ almacen.tipo +" "+ almacen.precio).join("\n-")
let opcionAlmacenP

let almacenesGt = "Elija el numero de material que decea comprar \n-" + almacenesGrilot.map(almacenG => almacenG.id +" "+ almacenG.tipo +" "+ almacenG.precio).join("\n-")
let opcionAlmacenG

let almacenesSs = "Elija el numero de material que decea comprar \n-" + almacenesSans.map(almacenS => almacenS.id +" "+ almacenS.tipo +" "+ almacenS.precio).join("\n-")
let opcionAlmacenS


do {
    lista= Number(prompt("Bienvenido a Impresiones-VK 3D! Indique que decea hacer: \n1- Ver productos \n2- Horario de atencion \n3- Nuestro contacto \n4- salir"))
} while (lista!==1 && lista!==2 && lista !==3  && lista!==4){
    if(lista===1){
        do{
            opcion2 = Number(prompt(listaProductos))
        }while (opcion2!==1 && opcion2!==2 && opcion2!==3);
        if (opcion2 === 1) {
                opcionAlmacenP = Number(prompt(almacenesPr))
            } else if(opcion2===2){
                opcionAlmacenG = Number(prompt(almacenesGt))
            }else{
                opcionAlmacenS = Number(prompt(almacenesSs))
            }
    } else if(lista===2){
        alert("Estamos atendiendo de: \n- Lu a vi : 09hs a 18hs \n- Sab y fe: 10hs a 14hs \n- Do: cerrado")
    }else if(lista===3){
        alert("Mandanos un msj y te responderemos a la brevedad. Nuestros contactos son:\n wpp: 115498**** \n fijo: 4589****")
    }else{
        alert("Vuelva pronto!")
        .break
    }
};
