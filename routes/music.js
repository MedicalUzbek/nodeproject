const express = require('express');
const Music = require('../Model/Music');
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('music page get method');
});


router.post('/', function(req, res, next) {
    // const data = req.body;
    // res.json(data);

    // console.log(data);

    const {title, category, country, year, imdb_score} = req.body;

    const music = new Music({
        title: title,
        category:category,
        country: country,
        year: year,
        imdb_score: imdb_score,
    })

    const promise = music.save();

    promise.then(data => {
        res.json(data)
    }).catch(err => {
        console.log(err);
    })

})

module.exports = router;