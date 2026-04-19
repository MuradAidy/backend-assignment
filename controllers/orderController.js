const { Order, User } = require("../models");

exports.createOrder = async (request, response) => {
  try {
    const { title, price, userId } = request.body;

    if (!title || !price || !userId) {
      return response.status(400).send("title, price, and userId are required");
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return response.status(404).send("user not found with this userId");
    }

    const order = await Order.create({ title, price, userId });
    response.status(201).send(order);

  } 
  
  catch (err) {
    console.log("createOrder error:", err.message); 
    response.status(500).send(err.message);
  }

};

exports.getOrders = async (request, response) => {
  try {
    const orders = await Order.findAll({
      include: { model: User, as: "user" }
    });
    response.send(orders);

  } 
  catch (err) {
    console.log("getOrders error:", err.message);
    response.status(500).send(err.message);
  }
};

exports.updateOrder = async (request, response) => {
  try {
    await Order.update(request.body, {
      where: { id: request.params.id },
    });
    response.send("order updated");

  } 
  catch (err) {
    console.log("updateOrder error:", err.message);
    response.status(500).send(err.message);
  }
};

exports.deleteOrder = async (request, response) => {
  try {
    await Order.destroy({
      where: { id: request.params.id },
    });
    response.send("order deleted");

  } 
  catch (err) {
    console.log("deleteOrder error:", err.message);
    response.status(500).send(err.message);
  }
};