const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const utilisateurSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        trim: true
    },
    telephone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    motdepasse: {
        type: String,
        required: true,
        minlength: 6
    },
    dateInscription: {
        type: Date,
        default: Date.now
    },
    resetToken: {
        type: String,
        default: null
    },
    resetTokenExpire: {
        type: Date,
        default: null
    }
});

// Hacher le mot de passe avant sauvegarde
utilisateurSchema.pre('save', async function (next) {
    if (!this.isModified('motdepasse')) return next();
    this.motdepasse = await bcrypt.hash(this.motdepasse, 10);
    next();
});

utilisateurSchema.methods.comparerMotDePasse = async function (motdepasse) {
    return bcrypt.compare(motdepasse, this.motdepasse);
};

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
