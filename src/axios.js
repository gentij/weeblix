const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:8888/.netlify/functions/server" : "https://weeblix.netlify.app/.netlify/functions/server"

const getRecentEpisodes = (id, method, loading) => {
    axios
        .get(`${baseURL}/RecentReleaseEpisodes/${id}`)
        .then(async res => {
            await method(res);
            loading(false)
        })
        .catch(async err => {
            method(err)
        })
}


const getPopular = (id, method, loading) => {
    axios
        .get(`${baseURL}/Popular/${id}`)
        .then(async res => {
            await method(res);
            loading(false);
        })
        .catch(async err => {
            await method(err)
            loading(false);
        })  
}

const getMovies = (id, method, loading) => {
    axios
        .get(`${baseURL}/Movies/${id}`)
        .then(async res => {
            await method(res);
            loading(false)
        })
        .catch(async err => {
            await method(err)
            loading(false);
        })
}

const search = (search, method, loading) => {
    axios
        .get(`${baseURL}/Search/${search}`)
        .then(async res => {
            await method(res);
            loading(false);
        })
        .catch(async err => {
            await method(err)
            loading(false);
        })
}

const animeEpisodeHandler = (episode, method, modal) => {
    axios
        .get(`${baseURL}/AnimeEpisodeHandler/${episode}`)
        .then(async res => {
            await method(res)
            modal(true)
        })
        .catch(async err => {
            await method(err)
            modal(true)
        })
}

export { 
    getRecentEpisodes,
    getPopular,
    getMovies,
    search,
    animeEpisodeHandler
}