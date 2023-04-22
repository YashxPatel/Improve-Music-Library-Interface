import { useState, useEffect } from "react";
import Gallery from './Components/Gallery.js'
import SearchBar from './Components/SearchBar.js'
import { DataContext } from "./Contexts/DataContext.js";

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
      <SearchBar handleSearch={handleSearch} />
      {message}
      <DataContext.Provider value={data} >
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
