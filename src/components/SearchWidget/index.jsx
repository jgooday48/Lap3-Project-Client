// import React, { useState, useEffect } from 'react'
// import axios from 'axios'


// import { SearchBar } from '../'
// const SearchWidget = () => {


//     const [searchString, setSearchString] = useState("")
//     const [showFolder, setFolderData] = useState([])



//     function handleSearch(userInput){
//         setSearchString(userInput);
//     }
//     useEffect(() => {
//         const searchAPI = async () => {
//             const { data }= await axios.get(`https://localhost:3000/folders?${searchString}`)
//             const shows = data.map(s => s.folder)
//             setFolderData(shows)
//         }
//         searchAPI()

//     }, [searchString])

//   return (
//     <>
//         <SearchBar handleSearch={handleSearch} />
//     </>
//   )
// }

// export default SearchWidget
