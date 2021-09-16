const express = require("express");
const student = require("../models/student.model");
const crudcontroller = require("./crud.controller");
const router = express.Router();

router.get("/", crudcontroller.get(student));
router.post("/", crudcontroller.post(student));
router.patch("/:id", crudcontroller.update(student));
router.delete("/:id", crudcontroller.deleteOne(student));


module.exports = router;