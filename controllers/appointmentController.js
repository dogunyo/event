const Appointment = require('../models/appointment');

exports.createAppointment = async (req, res) => {
    const { date, description } = req.body;
    const userId = req.user.id;

    try {
        const appointmentId = await Appointment.create(userId, date, description);
        res.status(201).json({ appointmentId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findByUserId(req.user.id);
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
