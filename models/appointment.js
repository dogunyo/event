const db = require('../config/dbConfig');

const Appointment = {
    create: async (userId, date, description) => {
        const [rows] = await db.query('INSERT INTO appointments (user_id, date, description) VALUES (?, ?, ?)', [userId, date, description]);
        return rows.insertId;
    },
    findByUserId: async (userId) => {
        const [rows] = await db.query('SELECT * FROM appointments WHERE user_id = ?', [userId]);
        return rows;
    },
};

module.exports = Appointment;
