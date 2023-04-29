import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Gallery from './Components/Gallery.js'
import SearchBar from './Components/SearchBar.js'
import ArtistView from "./Components/ArtistView.js";
import AlbumView from "./Components/AlbumView.js";


function App() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('Search for Music!')
  const [data, setData] = useState([])

  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (search) {
      const fetchData = async () => {
        const URL  = encodeURI(API_URL + search)
        const response = await fetch(URL)
        console.log(URL)
        const data = await response.json()
        console.log(data)
        if (data.results.length > 0) {
          setData(data.results)
        } else {
          setMessage('Not found!')
          setData([])
        }
      }

      fetchData()
    }

  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div>
      {message}
      <Router>
        <Routes>
          <Route path='/' element={
            <>
            <SearchBar handleSearch={handleSearch} />
            <Gallery data={data}/>
            </>
          }/>
          <Route path='/album/:id' element={<AlbumView />} />
          <Route path='/artist/:id' element={<ArtistView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
