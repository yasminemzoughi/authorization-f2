// require express
const express = require("express");
const { register, login } = require("../controllers/user");
const isAuth = require("../middleware/isAuth");
const {
	registerValidation,
	validation,
	loginValidation,
} = require("../middleware/validator");

const router = express.Router();

// route user (register & login)

// register
router.post("/register", registerValidation(), validation, register);

// login
router.post("/login", loginValidation(), validation, login);

// current user
router.get("/current", isAuth, (req, res) => {
	res.send(req.user);
});

// export
module.exports = router;
