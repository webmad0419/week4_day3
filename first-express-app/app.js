const express = require('express')

const app = express()
const port = 3000

app.use(express.static('public'))



// Directorio de vistas y motor de visualización
app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')




app.get('/', (req, res) => {

    const data = {
        name: 'Cris',
        bootcamp: 'Web Development <strong>(Madrid)</strong>',
        finishDate: undefined,
        modules: ['Front-end', 'Back-end', 'React'],
        subscription: {
            name: 'Netflix',
            cost: 22.2,
            regularity: 'mensual'
        }
    }

    res.render('index', data)
})



app.listen(port, () => console.log(`App escuchando en el puerto ${port}`))
