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

const handler = serverless(app);
module.exports.handler = async (event, context) => {
  try {
    const result = await handler(event, context);
    return {
      statusCode: 200,
      headers,
      body: result.body
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: error
    };
  }
};



