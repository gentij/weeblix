import React, { useState } from 'react'

import { search } from '../axios'
import AnimeContainer from '../components/AnimeContainer'
import LoadingContainer from '../components/Loader/LoaderContainer'

import Grow from '@material-ui/core/Grow'

import '../styles/search.css'

import { Input } from '@material-ui/core';

const Search = () => {
    const [searchResults, setSearchResults] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
    }

    const searchAnime = (e) => {
        e.preventDefault()
        if(searchValue) {
            setIsLoading(true)
            search(searchValue, setSearchResults, setIsLoading)
        }
    }

    return (
        <Grow in={true}>
            <div className="searchContainer">
                <form onSubmit={searchAnime}>
                    <Input 
                        id="search" 
                        placeholder="search..."
                        disableUnderline
                        autoFocus
                        value={ searchValue }
                        onChange={ updateSearchValue }
                    />
                </form>
                <h2>Results:</h2>
                {
                    isLoading ? (
                        <LoadingContainer />
                    ) : (
                        <AnimeContainer 
                            data = {searchResults.data}
                        />
                    )
                }
            </div>
        </Grow>
    )
}

export default Search
