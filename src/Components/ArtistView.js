// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import  NavButtons from './NavButtons'

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])
    const { id } = useParams()
    

    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const data = await response.json()

            const albums = data.results.filter(item => item.collectionType === 'Album')
            setArtistData(albums)
        }

        fetchData()
        }, [])

        const display = artistData.map(album => {
            return (
                <div key={album.collectionId}>
                    <Link to={`/album/${album.collectionId}`}>
                        <p>{album.collectionName}</p>
                    </Link>
                </div>
            )
        })

    return (
        <div >
           <NavButtons />
            {display}
        </div>
    )
}

export default ArtistView