const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");
const authenticateToken = require("../middleware/authenticateToken");

router.use(authenticateToken);

router.post("/", CategoryController.createCategory);
router.get("/", CategoryController.getAllCategories);
router.get("/:id", CategoryController.getCategoryById);
router.put("/:id", CategoryController.updateCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
