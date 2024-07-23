const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");
const authenticateToken = require("../middleware/authenticateToken");

router.use(authenticateToken);

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);
router.get("/:id", OrderController.getOrderById);
router.put("/:id", OrderController.updateOrder);
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
