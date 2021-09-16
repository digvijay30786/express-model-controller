const express = require("express");
const { model } = require("mongoose");
const evaluation = require("../models/evaluation.model");
const crudcontroller = require("./crud.controller");
const router = express.Router();

router.get("/", crudcontroller.get(evaluation));

router.post("/", crudcontroller.post(evaluation));
router.patch("/:id", crudcontroller.update(evaluation));
router.delete("/:id", crudcontroller.deleteOne(evaluation));


module.exports = router;