
import GalleryItem from './GalleryItem'

function Gallery (props) {
    const display = props.data.map((item, i) => {
        return (
            <GalleryItem item={item} key={i} />
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery