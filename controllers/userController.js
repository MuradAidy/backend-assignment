const { User, Order } = require("../models");

exports.createUser = async (request, response) => {
  try {
    const { name, email } = request.body;

    if (!name || !email) {
      return response.status(400).send("name and email are required");
    }
    
    const user = await User.create({ name, email });
    response.status(201).send(user);

  } 
  catch (err) {
    console.log("createUser error:", err.message);
    response.status(500).send(err.message);
  }
};

exports.getUsers = async (request, response) => {
  try {
    const users = await User.findAll({
      include: { model: Order, as: "orders" }
    });
    response.send(users);

  } 
  catch (err) {
    console.log("getUsers error:", err.message);
    response.status(500).send(err.message);
  }

};

exports.updateUser = async (request, response) => {
  try {
    await User.update(request.body, {
      where: { id: request.params.id },
    });
    response.send("user updated");

  } 
  catch (err) {
    console.log("updateUser error:", err.message);
    response.status(500).send(err.message);
  }
};

exports.deleteUser = async (request, response) => {
  try {
    await User.destroy({
      where: { id: request.params.id },
    });
    response.send("user deleted");

  } 

  catch (err) {
    console.log("deleteUser error:", err.message);
    response.status(500).send(err.message);
  }

};