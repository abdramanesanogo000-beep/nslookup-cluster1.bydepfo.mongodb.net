const mongoose = require('mongoose');

const produitSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    nom: {
        type: String,
        required: true,
        trim: true
    },
    prix: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        default: '',
        trim: true
    },
    categorie: {
        type: String,
        default: '',
        trim: true,
        index: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    quantiteEnStock: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    actif: {
        type: Boolean,
        default: true
    },
    reference: {
        type: String,
        default: '',
        trim: true
    },
    marque: {
        type: String,
        default: '',
        trim: true
    },
    certifications: {
        type: [String],
        default: []
    },
    notice: {
        type: String,
        default: '',
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Produit', produitSchema);
