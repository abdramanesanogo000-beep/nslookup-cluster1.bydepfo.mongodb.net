const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const JWT_SECRET = process.env.JWT_SECRET;

// Support de ADMIN_PASSWORD (en clair, hashé au démarrage) ou ADMIN_PASSWORD_HASH déjà généré
let ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
if (process.env.ADMIN_PASSWORD) {
    ADMIN_PASSWORD_HASH = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12);
}

function signAdminToken() {
    if (!JWT_SECRET) throw new Error('JWT_SECRET non configuré.');
    return jwt.sign({ role: 'admin' }, JWT_SECRET, { expiresIn: '2h' });
}

async function verifierAdmin(req, res, next) {
    try {
        if (!JWT_SECRET) {
            console.error('JWT_SECRET manquant');
            return res.status(500).json({ succes: false, erreur: 'Configuration serveur incomplète.' });
        }

        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

        if (!token) {
            return res.status(401).json({ succes: false, erreur: 'Authentification admin requise.' });
        }

        const payload = jwt.verify(token, JWT_SECRET);
        if (payload.role !== 'admin') {
            return res.status(403).json({ succes: false, erreur: 'Accès réservé aux administrateurs.' });
        }
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ succes: false, erreur: 'Session admin expirée. Reconnectez-vous.' });
        }
        return res.status(401).json({ succes: false, erreur: 'Authentification admin invalide.' });
    }
}

async function verifierMotDePasseAdmin(password) {
    if (!ADMIN_PASSWORD_HASH) return false;
    return bcrypt.compare(password, ADMIN_PASSWORD_HASH);
}

function configAdminValide() {
    return JWT_SECRET && ADMIN_PASSWORD_HASH;
}

module.exports = { signAdminToken, verifierAdmin, verifierMotDePasseAdmin, configAdminValide };
