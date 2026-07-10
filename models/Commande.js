const mongoose = require('mongoose');

const commandeSchema = new mongoose.Schema({
    numero: {
        type: String,
        unique: true,
        index: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    client: {
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
        adresse: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            default: '',
            trim: true
        }
    },
    articles: [
        {
            id: Number,
            nom: String,
            prix: Number,
            quantite: Number,
            sousTotal: Number
        }
    ],
    total: {
        type: Number,
        required: true,
        min: 0
    },
    modePaiement: {
        type: String,
        required: true,
        trim: true
    },
    statut: {
        type: String,
        enum: [
            'En attente',
            'En attente paiement',
            'Confirmée',
            'Paiement échoué',
            'En livraison',
            'Livrée',
            'Annulée'
        ],
        default: 'En attente'
    },
    transaction_id: {
        type: String,
        default: ''
    },
    paytech_token: {
        type: String,
        default: ''
    },
    paiement_confirme: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String,
        default: '',
        trim: true
    },
    codePromoPartenaire: {
        type: String,
        default: '',
        trim: true,
        uppercase: true
    },
    reductionPartenaire: {
        type: Number,
        default: 0
    }
});

// Génération du numéro de commande avant sauvegarde
commandeSchema.pre('save', async function (next) {
    if (!this.isNew || this.numero) {
        return next();
    }

    try {
        const year = new Date().getFullYear();
        const lastCommande = await this.constructor.findOne().sort({ date: -1 });
        let nextNumber = 1;

        if (lastCommande && lastCommande.numero) {
            const match = lastCommande.numero.match(/YMS-\d{4}(\d{4})/);
            if (match) {
                nextNumber = parseInt(match[1], 10) + 1;
            }
        }

        this.numero = `YMS-${year}${String(nextNumber).padStart(4, '0')}`;
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = mongoose.model('Commande', commandeSchema);
