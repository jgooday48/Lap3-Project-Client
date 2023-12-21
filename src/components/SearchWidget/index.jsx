import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { SearchBar } from '../'
const SearchWidget = () => {


    const [searchString, setSearchString] = useState("")
    const [showFolder, setFolderData] = useState([])



    function handleSearch(userInput){
        setSearchString(userInput);
    }
    useEffect(() => {
        const searchAPI = async () => {
            const { data } = await axios.get(`https://reddy-server-33.onrender.com/folders?${searchString}`)
            const folders = data.map(s => s.folder)
            setFolderData(folders)
        }
        searchAPI()

    }, [searchString])

  return (
    <>
        <SearchBar handleSearch={handleSearch} />
    </>
  )
}

export default SearchWidget
