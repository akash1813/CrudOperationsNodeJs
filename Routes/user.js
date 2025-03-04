const express = require("express");
const {handleGetAllUsers,handlegetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser} = require("../Controllers/user");


const router = express.Router();

// Routes

router.get("/",handleGetAllUsers)

router.get("/:id",handlegetUserById);

router.post("/",handleCreateNewUser);

router.patch("/:id",handleUpdateUserById)

router.delete("/:id",handleDeleteUserById)

module.exports = router;


