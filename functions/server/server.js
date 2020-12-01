const express = require('express');
const cors = require('cors')
const serverless = require('serverless-http')
const api = require('gogoanime-axios');

const app = express();

const router = express.Router()

router.all('*', cors())

router.get('/RecentReleaseEpisodes/:page', async (req, res) => {
    try {
        let data = await api.recentReleaseEpisodes(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});


router.get('/Movies/:page', async (req, res) => {
    try {
        let data = await api.movies(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

router.get('/Popular/:page', async (req, res) => {
    try {
        let data = await api.popular(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

router.get('/Search/:title', async (req, res) => {
    try {
        let data = await api.search(req.params['title'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

router.get('/AnimeEpisodeHandler/:episode', async (req, res) => {
    try {
        let data = await api.recentReleaseEpisodes(req.params['episode'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app)



