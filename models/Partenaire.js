const mongoose = require('mongoose');

const partenaireSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true,
        lowercase: true
    },
    telephone: {
        type: String,
        default: '',
        trim: true
    },
    codePromo: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        uppercase: true
    },
    actif: {
        type: Boolean,
        default: true
    },
    dateCreation: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Partenaire', partenaireSchema);
