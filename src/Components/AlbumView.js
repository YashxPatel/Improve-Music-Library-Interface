// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import  NavButtons from './NavButtons'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()

            const songs = data.results.filter(item => item.wrapperType === 'track')
            setAlbumData(songs)
        }
        fetchData()
    }, [id])

    const display = albumData.map(song => {
        return (
            <div key={song.trackId}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div>
            <NavButtons />
            {display}
        </div>
    )
}

export default AlbumView