const express = require("express");
const { model } = require("mongoose");
const mark = require("../models/marks.model");
const crudcontroller = require("./crud.controller");
const router = express.Router();

router.get("/", crudcontroller.get(mark));
router.post("/", crudcontroller.post(mark));
router.patch("/:id", crudcontroller.update(mark));
router.delete("/:id", crudcontroller.deleteOne(mark));


module.exports = router;