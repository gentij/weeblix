const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://autopartshunter.com/.netlify/functions"

const getRecentEpisodes = (method) => {
    axios
        .get(`${baseURL}/RecentReleaseEpisodes`)
        .then(res => {
            method(res);
        })
        .catch(err => {
            method(err)
        })
}

const getRecentSeries = (method) => {
    axios
        .get(`${baseURL}/RecentlyAddedSeries`)
        .then(res => {
            method(res);
        })
        .catch(err => {
            method(err)
        })
}

const getOngoing = (method) => {
    axios
        .get(`${baseURL}/Ongoing`)
        .then(res => {
            method(res);
        })
        .catch(err => {
            method(err)
        })
}

const getPopular = (id, method) => {
    axios
        .get(`${baseURL}/Popular/${id}`)
        .then(res => {
            method(res);
        })
        .catch(err => {
            method(err)
        })
}

const getMovies = (id, method) => {
    axios
        .get(`${baseURL}/Movies/${id}`)
        .then(res => {
            method(res);
        })
        .catch(err => {
            method(err)
        })
}

export { 
    getRecentEpisodes,
    getRecentSeries,
    getOngoing,
    getPopular,
    getMovies,
}