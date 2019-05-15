const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: { type: String, default: 'Gato sin nombre' },
    color: { type: String, enum: ['blanco', 'negro', 'gris'] },
    age: Number,
    postalCode: {
        type: String,
        match: /^\d{5}$/,
        validate: {
            validator: code => code.startsWith('28'),
            message: 'Sólo aceptamos gato madrileño'
        }
    }
}, {
        timestamps: true
    })

const Cat = mongoose.model('Cat', catSchema)
module.exports = Cat