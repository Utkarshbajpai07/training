const express = require("express");
const users = require("../user");
const {getUser,createUser,updateUser,deleteUser} = require("../controller")

const router = express.Router();

router.get("/users",getUser);
router.get("/users",createUser);
router.get("/users/:id",updateUser);
router.get("/users/:id",deleteUser);

module.exports=router;