const express = require("express");
const user = require("../models/user.model");
const crudcontroller = require("./crud.controller");
const router = express.Router();

router.get("/", crudcontroller.get(user));
router.post("/", crudcontroller.post(user));
router.patch("/:id", crudcontroller.update(user));
router.delete("/:id", crudcontroller.deleteOne(user));


module.exports = router;