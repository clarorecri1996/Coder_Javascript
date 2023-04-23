//CARRITO
const contenidoProductos = document.getElementById("contenido")
const verCarrito = document.getElementById("verCarrito")
const modalCarrito = document.getElementById("containerCarrito")



let productos = [
    {
        id: 1, 
        nombre: "Grilot",
        precio: 3500, 
        stock: 10,
        img:"https://grilon3.com.ar/wp-content/uploads/2021/06/silk_azul-350x350.jpg"
    },
    {
        id: 2,
        nombre: "printalot",
        precio: 4800,
        stock: 6,
        img:"https://www.tp3d.com.ar/Temp/App_WebSite/App_PictureFiles/Items/2260_800.jpg"
    },
    {
        id: 3,
        nombre: "Sans",
        precio: 2700,
        stock: 3,
        img:"https://dpq25p1ucac70.cloudfront.net/seller-place-files/mrkl-files/2190/OTRAS%20CATEGORIAS/AC-F3DESUN175MMPLAPL-IMAGEN1_191235920717_3.jpeg"
    }
]
let carrito = []

productos.forEach((producto) => {

    let content= document.createElement("div")
    content.className= "marca"
    content.innerHTML=`
    <img src=${producto.img}>
    <h3>${producto.nombre}</h3>
    <p>$ ${producto.precio}</p>
    <h4>Quedan ${producto.stock} unidades</h4>
    `
    contenidoProductos.append(content)

    let comprar =document.createElement("button")
    comprar.innerText= "comprar"
    comprar.className= "comprar"
    
    content.append(comprar)
    comprar.addEventListener("click", () =>{
        carrito.push ({
            id : producto.id,
            nombre: producto.nombre,
            precio: producto.precio
        })
        
        localStorage.setItem("chango", JSON.stringify(carrito))
    })
    
})
verCarrito.addEventListener("click", () =>{
    carrito = JSON.parse(localStorage.getItem("chango"))
    let modal = document.createElement("div")
    modalCarrito.style.display ="block"
    modalCarrito.innerHTML=""
    modal.className = "modalCarrito"
    modal.innerHTML = `
        <h2>Impresiones VK</h2>
    `
modalCarrito.append(modal)

    const buttonModal = document.createElement("h1")
    buttonModal.innerText = "X"
    modalCarrito.append(buttonModal)
    buttonModal.addEventListener("click", () =>{
    modalCarrito.style.display="none"
    })

carrito.forEach((producto) =>{
    const recorriendoCarrito = document.createElement("div")
    recorriendoCarrito.className="bodyCarrito"
    recorriendoCarrito.innerHTML= `
    <h3>${producto.nombre}</h3>
    <p>$ ${producto.precio}</p>
    `
modalCarrito.append(recorriendoCarrito)
})

let total = carrito.reduce((acc, el) => acc + el.precio, 0)
const totalCompra = document.createElement("div")
totalCompra.className= "totalCompra"
totalCompra.innerHTML= `
    <p>Total a pagar : $ ${total}</p>
`
modalCarrito.append(totalCompra)
})
