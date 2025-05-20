const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ error: 'No token provided' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded); // 🐛 Debug log
        req.userId = decoded.id; // Make sure this matches your login token key
        next();
    } catch (err) {
        console.error('Token verification failed:', err);
        res.status(400).json({ error: 'Invalid token' });
    }
};