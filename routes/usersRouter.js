const express = require("express");
const router = express.Router();
const {registerUser , loginUser , logoutUser} = require("../controllers/authController");

// router.get("/",function (rej,res){
//     res.send("user route");
// });


router.post("/register", registerUser );

router.post("/login", loginUser );

router.get("/logout", logoutUser );


module.exports=router;