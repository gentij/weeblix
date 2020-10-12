const express = require('express');
const cors = require('cors');
const api = require('gogoanime-axios');

const port = 8000;
const app = express();

app.use(cors());

let recentEpisodes;
let recentlyAddedSeries;
let ongoing;

const getRecentEpisodes = () => {
    api.recentReleaseEpisodes(1)
    .then(result => {
        recentEpisodes = result
    })
    .catch(err => {
        recentEpisodes = err
    })
}

const getRecentSeries = () => {
    api.recentlyAddedSeries(1)
    .then(result => {
        recentlyAddedSeries = result
    })
    .catch(err => {
        recentlyAddedSeries = err
    })
}

const getOngoing = () => {
    api.ongoingSeries()
    .then(result => {
        ongoing = result
    })
    .catch(err => {
        ongoing = err
    })
}

getRecentEpisodes()
getRecentSeries()
getOngoing()


app.get('/RecentReleaseEpisodes', (req, res) => {
    res.status(200).json(recentEpisodes);
});

app.get('/RecentlyAddedSeries', (req, res) => {
    res.status(200).json(recentEpisodes);
});

app.get('/Ongoing', (req, res) => {
    res.status(200).json(recentEpisodes);
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