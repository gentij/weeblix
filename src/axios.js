const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://autopartshunter.com/.netlify/functions"

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

export { 
    getRecentEpisodes,
    getPopular,
    getMovies,
    search,
}