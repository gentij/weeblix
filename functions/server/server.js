const express = require('express');
const cors = require('cors')
const serverless = require('serverless-http')
const api = require('gogoanime-axios');

const app = express();

app.use(cors())

const router = express.Router()

router.get('/RecentReleaseEpisodes/:page', (req, res) => {
    api.recentReleaseEpisodes(req.params['page'])
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


router.get('/Movies/:page', (req, res) => {
    api.movies(req.params['page'])
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/Popular/:page', (req, res) => {
    api.popular(req.params['page'])
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

router.get('/Search/:title', (req, res) => {
    api.search(req.params['title'])
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.headers = headers
        res.status(500).json(err)
    })
});

router.get('/AnimeEpisodeHandler/:episode', (req, res) => {
    api.animeEpisodeHandler(req.params['episode'])
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app)



