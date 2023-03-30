let menu = "1- inciar sesion \n2- iniciar con otra cuenta \n3- salir"

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
//Segundo menu
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
    {id: 1, tipo:"pla", precio: 3500 },
    {id:2 , tipo: "abs", precio: 4000},
    {id: 3, tipo: "elastica", precio: 5000}
]

let almacenesGrilot = [
    {id: 1, tipo:"pla", precio: 3500 },
    {id:2 , tipo: "abs", precio: 4000}
]

let almacenesSans = [
    {id: 1, tipo:"pla", precio: 3500 }
]

 let listaProductos = "ingrese el numero de la marca que le interesa \n" + productos.map(producto => producto.id + " " + producto.marca).join("\n")
let opcion2

let almacenesPr = "Elija el numero de material Printalot que decea comprar \n" + almacenesPrintalot.map(almacen => almacen.id +" "+ almacen.tipo +" "+ almacen.precio).join("\n")
let opcionAlmacenP

let almacenesGt = "Elija el numero de material Grilot que decea comprar \n" + almacenesGrilot.map(almacenG => almacenG.id +" "+ almacenG.tipo +" "+ almacenG.precio).join("\n")
let opcionAlmacenG

let almacenesSs = "Elija el numero de material Sans que decea comprar \n" + almacenesSans.map(almacenS => almacenS.id +" "+ almacenS.tipo +" "+ almacenS.precio).join("\n")
let opcionAlmacenS

do {
    opcion2 = Number(prompt(listaProductos))
} while (opcion2!==1 && opcion2!==2 && opcion2!==3);
if (opcion2 === 1) {
    opcionAlmacenP = Number(prompt(almacenesPr))
} else if(opcion2 ===2){
    opcionAlmacenG = Number(prompt(almacenesGt))
}else if (opcion2 ===3){
    opcionAlmacenS = Number(prompt(almacenesSs))
}else{

}


