const mongoose = require('mongoose');

const AnimalsSchema = new mongoose.Schema({
    name: {
        en: {
            type: String
        },
        ar: {
            type: String
        }
    },
    content: {
        en: {
            type: String
        },
        ar: {
            type: String
        }
    },
    image: {
        type: String
    },
    mapImage: {
        type: String
    },
    population: {
        type: Number
    }
})
 const Animal = module.exports = mongoose.model('Animals', AnimalsSchema)