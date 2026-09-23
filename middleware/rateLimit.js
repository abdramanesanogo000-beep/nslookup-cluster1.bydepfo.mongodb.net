const rateLimit = require('express-rate-limit');

const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: { succes: false, erreur: 'Trop de requêtes. Veuillez réessayer plus tard.' }
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true,
    message: { succes: false, erreur: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.' }
});

module.exports = { globalLimiter, authLimiter };
