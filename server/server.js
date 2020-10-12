const express = require('express');
const cors = require('cors');
const api = require('gogoanime-axios');

const port = 8000;
const app = express();

app.use(cors());

app.get('/RecentReleaseEpisodes/:page', (req, res) => {
    api.recentReleaseEpisodes(req.params['page'])
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});


app.get('/Movies/:page', (req, res) => {
    api.movies(req.params['page'])
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

app.get('/Popular/:page', (req, res) => {
    api.popular(req.params['page'])
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});