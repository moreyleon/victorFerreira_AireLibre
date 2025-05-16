const db = require('../../database/models');
const {baseURL} = require('../../data/base');
console.log(baseURL);

const getCart = async (req, res) => {
    console.log("carrito");
    // const id = req.query.id
    try {

        const invoice = await db.Invoice.findOne({
            where: {
                userId: req.session.userLogin.id
                
            },
            include: [
                {
                    association: 'items', include: [
                        { association: 'product', include: ['brand', 'category'] }
                    ]
                },
            
                { association: 'user' }
            ]
        });
        console.log(invoice);

        if (!invoice) {
            const newInvoice = await db.Invoice.create({
                userId: req.session.userLogin.id
            
            });
            req.session.invoiceId = newInvoice.id;
            req.session.cart = [];
        } else {

            console.log(invoice);
            
            req.session.invoiceId = invoice.id;
            req.session.cart = invoice.items.map(item => {
                let productCart = {
                    id: item.product.id,
                    nombre: item.product.name,
                    image: `${baseURL(req)}/images/products/${item.product.image}`,
                    precio: item.product.price,
                    categoria: item.product.category.name,
                    cantidad: item.quantity,
                    total: item.product.price * item.quantity,
                }
                return productCart
            });
        }

        return res.status(200).json({
            ok: true,
            data: req.session.cart
        })

    } catch (error) {

        console.log(error);
        
        return res.status(500).json({
            ok: false,
            msg: error.message || 'Upss, hubo un error'
        })
    }
}

const addCart = async (req, res) => {
    try {
        let product = await db.Product.findByPk(req.params.id, {
            include: ['category', 'brand']
        });
console.log(req.session);

        let result = req.session.cart.find(item => item.id == product.id);
        let cantidad = result ? result.cantidad + 1 : 1;
        let item = {
            id: product.id,
            nombre: product.name,
            image: `${baseURL(req)}/images/products/${product.image}`,
            precio: product.price,
            categoria: product.category.name,
            cantidad,
            total: product.price * cantidad,
        }
        if (result) {
            let index = req.session.cart.indexOf(result);
            req.session.cart[index] = item;

            await db.Item.update({
                quantity: cantidad
            }, {
                where: {
                    productId: product.id,
                    invoicesId: req.session.invoiceId
                }
            });
        } else {
            await db.Item.create({
                quantity: cantidad,
                productId: product.id,
                invoicesId: req.session.invoiceId
            })
            req.session.cart.push(item)
        }

        return res.status(200).json({
            ok: true,
            data: req.session.cart
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error.message || 'Upss, hubo un error'
        })
    }
}

const removeCart = (req, res) => {
    try {
        let resultado = req.session.cart.find(item => item.id == req.params.id);
        if (resultado.cantidad > 1) {
            resultado.cantidad = resultado.cantidad - 1;
            resultado.total = resultado.precio * resultado.cantidad;

            req.session.cart = req.session.cart.map(item => {
                if (item.id == req.params.id) {
                    item = resultado;
                }
                return item
            })
        } else {
            req.session.cart = req.session.cart.filter(item => item.id != req.params.id);
        }

        return res.status(200).json({
            ok: true,
            data: req.session.cart
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error.message || 'Upss, hubo un error'
        })
    }
}

const removeAll = async (req, res) => {
    try {
        req.session.cart = [];
        return res.status(200).json({
            ok: true,
            data: req.session.cart
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: error.message || 'Upss, hubo un error'
        })
    }
}




module.exports = { getCart, addCart, removeCart,removeAll}
