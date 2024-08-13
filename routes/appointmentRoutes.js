const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const authenticate = require('../helpers/jwt');

const router = express.Router();

router.post('/', authenticate, createAppointment);
router.get('/', authenticate, getAppointments);

module.exports = router;