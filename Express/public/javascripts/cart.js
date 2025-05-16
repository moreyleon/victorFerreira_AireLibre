let spanCantidad = document.querySelector('span.badge'); //cantidad de productos en el icono del carrito
let changuito = document.querySelector('#lista-carrito tbody'); //caja donde se van agregar los productos del carrito
let spanTotal = document.getElementById('total'); //h5 total de productos agregados al carrito
let cartHead = document.getElementById('cart-head'); //encabezado de la tabla, para que??
let cartFooter = document.getElementById('cart-footer'); //pie de paǵina de la tabla, para que??
let cartEmpty = document.getElementById('cart-empty'); //span con la leyenda: no hay productos agregados
let btnCartEmpty = document.getElementById('btn-delete-cart'); //boton para vaciar el carrito
let btnNextBuy = document.getElementById('btn-next-buy'); //boton para continuar con la compra
// let cart = document.getElementById('showcart'); //div que contiene el carrito

console.log("carrito");

const urlBase = window.origin +'/';

const mostrarCantidad = (changuito) => {

    var cantidad = 0;
    var total = 0;

    if(changuito){
        changuito.forEach(item => {
            cantidad += item.cantidad
            total += item.total
        });
    }
    if(spanCantidad){
        spanCantidad.innerHTML = cantidad
        spanTotal.innerHTML = `<span>$</span> <span class="float-end">${total}</span>`
    }

    if(cantidad == 0){
        cartHead.style.display = 'none'
        cartFooter.style.display = 'none'
        cartEmpty.style.display = 'block'
        btnCartEmpty.classList.add('disabled');
        btnNextBuy.classList.add('disabled');
    }else{
        cartHead.style.display = "table-header-group"
        cartFooter.style.display = 'table-footer-group'
        cartEmpty.style.display = 'none'        
        btnCartEmpty.classList.remove('disabled');
        btnNextBuy.classList.remove('disabled');
    }

}

 
 
const cargarTabla = (carrito) => {
    changuito.innerHTML = null
    carrito.forEach(product => {
        let item = `
            <td >
                <img  src="${product.image}" "> 
            </td>
            <td >
                <a onClick="removerItem(event,${product.id})"></a>
                <span>${product.cantidad}<span>
                <a  onClick="agregarItem(event,${product.id})"></a>
            </td>
            <td >
                ${product.name}
            </td>
            <td >
                <span>$</span><span>${product.price}</span>
            </td>
            <td >
                <span>$</span><span>${product.total}</span>
            </td>
            `;
        changuito.innerHTML += item
    });
    return false
}


const getCarrito = async () => {
    try {
        let response = await fetch(urlBase + 'api/cart')
        let result = await response.json()

        console.log("DATA",result.data);
        
        if(result.data.length > 0) {
            cargarTabla(result.data)
            mostrarCantidad(result.data)
        }else{
            mostrarCantidad(result.data)
        }
    } catch (error) {
        console.log(error)
    }
}

const agregarItem = async (e,id) => {
    e.preventDefault()
    try {
        let response = await fetch(urlBase + 'api/cart/add/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result = await response.json()
        mostrarCantidad(result.data);
        cargarTabla(result.data);

    } catch (error) {
        console.log(error)
    }
}


const removerItem = async (e,id) => {
    e.preventDefault()
    try {
        let response = await fetch(urlBase + 'api/cart/remove/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result = await response.json()
        mostrarCantidad(result.data);
        cargarTabla(result.data);
    } catch (error) {
        console.log(error)
    }
}


const limpiarCarrito = async () => {
    try {
        let response = await fetch(urlBase + 'api/cart/remove/all',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let result = await response.json()
        mostrarCantidad(result.data);
        cargarTabla(result.data);
    } catch (error) {
        console.log(error)
    }
}


getCarrito()