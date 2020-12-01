const express = require('express');
const serverless = require('serverless-http')
const api = require('gogoanime-axios');

const headers = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  };

const app = express();

const router = express.Router()

router.get('/RecentReleaseEpisodes/:page', async (req, res) => {
    res.set(headers)
    try {
        let data = await api.recentReleaseEpisodes(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});


router.get('/Movies/:page', async (req, res) => {
    res.set(headers)
    try {
        let data = await api.movies(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

router.get('/Popular/:page', async (req, res) => {
    res.set(headers)
    try {
        let data = await api.popular(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

router.get('/Search/:title', async (req, res) => {
    res.set(headers)
    try {
        let data = await api.search(req.params['title'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

router.get('/AnimeEpisodeHandler/:episode', async (req, res) => {
    res.set(headers)
    try {
        let data = await api.recentReleaseEpisodes(req.params['episode'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(data)
    }
});

app.use('/.netlify/functions/server', router)

module.exports.handler = serverless(app)



