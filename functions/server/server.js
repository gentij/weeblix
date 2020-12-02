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
    try {
        let data = await api.recentReleaseEpisodes(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/Movies/:page', async (req, res) => {
    try {
        let data = await api.movies(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/Popular/:page', async (req, res) => {
    try {
        let data = await api.popular(req.params['page'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/Search/:title', async (req, res) => {
    try {
        let data = await api.search(req.params['title'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
});

router.get('/AnimeEpisodeHandler/:episode', async (req, res) => {
    try {
        let data = await api.animeEpisodeHandler(req.params['episode'])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
});

app.use('/.netlify/functions/server', router)

const handler = serverless(app)

module.exports.handler = async (event, context) => {
    try {
        const result = await handler(event, context);
        return {
            statusCode: 200,
            headers,
            body: result.body
        }
    } catch (error) {
        return {
            statusCode: 500,
            headers,
            body: error
        }
    }
};  
