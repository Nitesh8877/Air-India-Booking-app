const express = require('express');
const router = express.Router();
const helpContreller = require('../../controllers/helpControlle');


router.get('/help', helpContreller.helpDetails);



module.exports = router;
