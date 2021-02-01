const express = require("express");
const router = express.Router();


const newUser = require("../controllers/users")

router.post("/registration", newUser.registration);
router.post("/login", newUser.login);
router.get("/products", newUser.products);
router.get("/category", newUser.productsCategory);

module.exports = router;