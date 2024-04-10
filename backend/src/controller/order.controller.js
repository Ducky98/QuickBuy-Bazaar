const orderService = require("../services/order.service.js");
const createOrder = async (req, res) => {
    const user = req.user;
    try {
        let createdOrder = await orderService.createOrder(user, req.body);
        return res.status(201).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}
I
const findOrderById = async (req, res) => {
    const user = req.user;
    try {
        let findOrder = await orderService.findOrderById(req.params.id);
        return res.status(201).send(findOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

const orderHistory = async (req, res) => {
    const user = req.user;
    try {
        let orderHistory = await orderService.userOrderHistory(user._id);
        return res.status(201).send(orderHistory);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory
}