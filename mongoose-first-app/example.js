const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/first-webmad0419-app', { useNewUrlParser: true })

// confirmación conexión con eventos de Mongoose
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'))

// Requerimiento del modelo
const Cat = require('./models/Cat')




const addNewCat = (catName, catColor, catAge, catPC) => {

    // instancia del modelo
    const michi = new Cat({ name: catName, color: catColor, age: catAge, postalCode: catPC })

    // guardado en BBDD
    michi.save()
        .then(cat => console.log('gato guardado', cat))
        .catch(err => console.log('Error', err))
}

const showCats = () => {
    Cat.find({})
        .then(cats => console.log('Los gatos son:', cats))
        .catch(err => console.log('Error', err))
}


addNewCat('Garfield', 'blanco', 22, 28100)
// showCats()