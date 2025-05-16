const express = require('express');
const { getCart, addCart, removeCart, removeAll } = require('../../controllers/api/cartControllers');
const router = express.Router();

router
    .get('/', getCart)
    .post('/add/:id',addCart)
    .delete('/remove/:id', removeCart)
    .delete('/remove/all',removeAll)

module.exports = router;