const router = require("express").Router();
const controller = require("../controllers/orderController");

router.post("/", controller.createOrder);

router.get("/", controller.getOrders);

router.put("/:id", controller.updateOrder);

router.delete("/:id", controller.deleteOrder);

module.exports = router;