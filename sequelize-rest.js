const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 4000
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:secret@localhost:5432/postgres');


const Movie = sequelize.define('movie', {
    title: {
        type: Sequelize.STRING,
        allowNull: true
      },
      yearOfRelease: {
        type: Sequelize.INTEGER
      },
      synopsis: {
          type: Sequelize.TEXT
      }
  });

// Mock - Data //
const movies = [
    {
        title: "Goal! The Dream Begins",
        yearOfRelease: 2005,
        synopsis: "The extremely talented Santiago Munez is given a chance at professional football, after being spotted by a scout who has ties with Newcastle United."
    },
    {
        title: "Goal II - Living The Dream",
        yearOfRelease: 2007,
        synopsis: "When Newcastle United soccer star Santiago Munez is offered a spot with Real Madrid, he accepts, but the move - accompanied by big money and fame - tests his ties and loyalties to family, friends and business acquaintances."
    }
    , {
        title: "Goal III",
        yearOfRelease: 2009,
        synopsis: "The heroes compete on the greatest stage of all, the FIFA World Cup Finals."
    }
  ]

  sequelize.sync({force: false}) 
    Movie.bulkCreate(movies)
    .catch(err => {
        console.error('Unable to create tables, shutting down...', err);
        process.exit(1); 
    })

// ----- Routes ------ //

app.get('/', (req, res) => {return res.status(200).send('<h1><a href="/movies">Movies database</a></h1>')})
app.get('/movies', (req, res) => {return res.status(200).json(movies)})
app.get('/movies/:id', (req, res, next) => {
    Movie.findByPk(req.params.id)
        .then(movie => {
            if (!movie) {
                res.status(404).end()
            } else {
                res.json(movie)
            }
        })
        .catch(next)
})
app.delete('/movies/:id', (req, res) => {
    const idToDestroy = parseInt(req.params.id)
    Movie.destroy({where: {id: idToDestroy}})
    .then(numdeleted => {
        if(numdeleted === 0){ 
            res.status(404).end()
        } else {
            res.status(204).end() 
        }
    })
    .catch(error => {
        return res.status(400).send({ message: 'Not Found' })
    })
})
app.put('/movies/:id', (req, res, next) => {
    console.log("this is the body", req.body)
    Movie.findByPk(req.params.id)
        .then(movie => {
            if (movie) {
                return movie.update(req.body)
                    .then(movie => res.json(movie))
            }
            return res.status(404).end()
        })
        .catch(next)

})

app.listen(port, () => console.log(`Listening on port ${port}!`))






