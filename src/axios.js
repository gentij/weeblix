const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:8888/.netlify/functions/server" : "https://weeblix.netlify.com/.netlify/functions/server"

const getRecentEpisodes = (id, method, loading) => {
    axios
        .get(`${baseURL}/RecentReleaseEpisodes/${id}`)
        .then(res => {
            method(res);
            loading(false)
        })
        .catch(err => {
            method(err)
        })
}


const getPopular = (id, method, loading) => {
    axios
        .get(`${baseURL}/Popular/${id}`)
        .then(res => {
            method(res);
            loading(false);
        })
        .catch(err => {
            method(err)
        })  
}

const getMovies = (id, method, loading) => {
    axios
        .get(`${baseURL}/Movies/${id}`)
        .then(res => {
            method(res);
            loading(false)
        })
        .catch(err => {
            method(err)
        })
}

const search = (search, method, loading) => {
    axios
        .get(`${baseURL}/Search/${search}`)
        .then(res => {
            method(res);
            loading(false);
        })
        .catch(err => {
            method(err)
        })
}

const animeEpisodeHandler = (episode, method, modal) => {
    axios
        .get(`${baseURL}/AnimeEpisodeHandler/${episode}`)
        .then(res => {
            method(res);
        })
        .then(() => {
            modal(true)
        })
        .catch(err => {
            method(err)
        })
}

export { 
    getRecentEpisodes,
    getPopular,
    getMovies,
    search,
    animeEpisodeHandler
}