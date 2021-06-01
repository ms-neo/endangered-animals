const express = require('express')
const router = express.Router();
const Animal = require('../../models/animals')

//GET DATA 
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find()
        return res.json(animals)

    } catch (err) {
        console.log(err)
    }
})

//POST NEW DATA
router.post('/', async (req, res) => {
    const {
        name,
        content,
        image,
        population,
        mapImage,
    } = req.body;

    try {
        let newAnimal = await Animal.findOne({
            name
        });
        if (newAnimal)
            return res.status(400).json({
                error: [{
                    msg: "this Animal is already exist"
                }]
            });

        newAnimal = new Animal({
            name,
            content,
            image,
            mapImage,
            population
        })

        await newAnimal.save();
        res.json(newAnimal)

    } catch (err) {
        console.log(err)
    }
});

//GET POST BY ID
router.get('/:id', async (req, res) => {

    try {
        const post = await Animal.findOne({
            _id: req.params.id
        });
        if (post)
            console.log(post)
        return res.json(post)

    } catch (err) {
        console.log('error happened here')
        console.log(err)
        return res.status(500).json({
            error: {
                msg: 'server error'
            }
        })
    }
})

//UPDATE DATA 
router.put('/:id', async (req, res) => {
    const {
        name,
        content,
        image,
        mapImage,
        population
    } = req.body;
    const updateAnimal = {
        name,
        content,
        image,
        mapImage,
        population
    }
    console.log(updateAnimal)
    console.log(req.params.id)
    try {
        let animal = await Animal.findByIdAndUpdate(req.params.id, updateAnimal, (err) => {
            if (err) console.log(err)
            if (!updateAnimal) {
                return res.status(400).json({
                    error: [{
                        msg: "there's now data with this id"
                    }]
                })
            }
        });

        animal.save()
        console.log(animal)
        res.json(animal)

    } catch (err) {
        console.log(err)
    }
})


// delete data 
router.delete('/:id', async (req, res) => {
    try {
        const animal = await Animal.findById(req.params.id)
        if (animal) {
            animal.remove()
            res.status(200).json({
                msg: "item was deleted"
            })
        } else {
            return res.status(400).json({
                error: [{
                    msg: "no such data"
                }]
            })
        }

    } catch (err) {
        console.log(err)
    }

})

module.exports = router