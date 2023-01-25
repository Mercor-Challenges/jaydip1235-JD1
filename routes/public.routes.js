const router=require('express').Router();
const {createUser,login}=require('../controllers/public.cons');

// Create user
router.post('/createuser',createUser);

// Login
router.post('/login',login);

module.exports=router;