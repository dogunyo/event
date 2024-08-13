const db = require('../config/dbConfig');

const User = {
    create: async (name, email, password, role) => {
        const [rows] = await db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', [name, email, password, role]);
        return rows.insertId;
    },
    findByEmail: async (email) => {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0];
    },
    findById: async (id) => {
        const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    },
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    },
};

module.exports = User;