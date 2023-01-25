const router=require('express').Router();
const {protect}=require('../middlewares/protect');
const {addVehicle,searchVehicle}=require('../controllers/private.cons');

// Add vehicle
router.post('/addvehicle',protect,addVehicle);

// Search vehicle
router.get('/searchvehicle/:vehicleNo',protect,searchVehicle);

module.exports=router;