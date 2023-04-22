// These components will be making separate API calls from the app
// component to serve specific data about a given album
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function AlbumView() {
    const [ albumData, setAlbumData ] = useState([])
    const { id } = useParams()

    return (
        <div>
            <p>Album Data Goes Here! {id} </p>
        </div>
    )
}

export default AlbumView