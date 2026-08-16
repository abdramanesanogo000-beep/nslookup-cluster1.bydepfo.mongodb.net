const mongoose = require('mongoose');

const favoriSchema = new mongoose.Schema({
    utilisateurId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur',
        required: true,
        index: true
    },
    produitId: {
        type: Number,
        required: true,
        index: true
    }
}, { timestamps: true });

favoriSchema.index({ utilisateurId: 1, produitId: 1 }, { unique: true });

module.exports = mongoose.model('Favori', favoriSchema);
