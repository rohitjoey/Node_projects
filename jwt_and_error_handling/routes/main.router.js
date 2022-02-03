const { login, dashboard } = require("../controllers/main.controller");
const express = require("express");
const router = express.Router();

router.route("/dashboard").get(dashboard);

router.route("/login").post(login);

module.exports = router;
