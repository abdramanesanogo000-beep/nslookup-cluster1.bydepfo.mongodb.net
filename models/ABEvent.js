const mongoose = require('mongoose');

const abEventSchema = new mongoose.Schema({
    experiment: {
        type: String,
        required: true,
        index: true,
        trim: true
    },
    variant: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['impression', 'click'],
        required: true
    },
    userAgent: {
        type: String,
        default: '',
        trim: true
    },
    ip: {
        type: String,
        default: '',
        trim: true
    },
    date: {
        type: Date,
        default: Date.now,
        index: true
    }
});

module.exports = mongoose.model('ABEvent', abEventSchema);
