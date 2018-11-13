const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    id: {
        type: Number,
        required: [true, 'El id es un campo requerido.']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es un campo requerido.']
    },
    tipo_prim: {
        type: String,
        required: [true, 'El tipo primario es un campo requerido.']
    },
    tipo_secu: {
        type: String
    },
    region: {
        type: String
    }
});

const Monster = mongoose.model('monster', PokemonSchema);

module.exports = Monster;