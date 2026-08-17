const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function signUserToken(utilisateur) {
    if (!JWT_SECRET) throw new Error('JWT_SECRET non configuré.');
    return jwt.sign(
        { userId: utilisateur._id.toString(), email: utilisateur.email, nom: utilisateur.nom },
        JWT_SECRET,
        { expiresIn: '2h' }
    );
}

function verifierUtilisateur(req, res, next) {
    try {
        if (!JWT_SECRET) {
            console.error('JWT_SECRET manquant');
            return res.status(500).json({ succes: false, erreur: 'Configuration serveur incomplète.' });
        }

        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

        if (!token) {
            return res.status(401).json({ succes: false, erreur: 'Authentification requise.' });
        }

        const payload = jwt.verify(token, JWT_SECRET);
        req.user = { _id: payload.userId, email: payload.email, nom: payload.nom };
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ succes: false, erreur: 'Session expirée. Veuillez vous reconnecter.' });
        }
        return res.status(401).json({ succes: false, erreur: 'Authentification invalide.' });
    }
}

module.exports = { signUserToken, verifierUtilisateur };
