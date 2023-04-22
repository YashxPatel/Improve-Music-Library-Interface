// These components will be making separate API calls from the app
// component to serve specific data about our artist
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const [ artistData, setArtistData ] = useState([])
    const { id } = useParams()

    return (
        <div>
            <p>Artist Data Goes Here! {id}</p>
        </div>
    )
}

export default ArtistView