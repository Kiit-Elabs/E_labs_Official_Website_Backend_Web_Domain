const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    }, // Can be replace by the by default id generated by mongoDB.
    userId: {
        type: mongoose.Types.ObjectId,
        ref:'userModel',
        required: true
    },
    eventId: {
        type: mongoose.Types.ObjectId,
        ref: 'EventModel',
        required: true
    },
    registrationData: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    location: {
        longitude: {
            type: Number,
            required: true,
        },
        latitude: {
            type: Number,
            required: true,
        },
    },
    createdAt: {
        type: String,
        required: true,
        default: Date.now()
    },
    updatedAt: {
        type: String,
        required: true,
        default: Date.now()

    },

});

export const registrationModel = mongoose.model('Registeration', registrationSchema);