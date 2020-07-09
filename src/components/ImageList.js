import React from 'react'
import ImageCard from './ImageCard';

const ImageList =(props)=> {
    console.log("imagelist",props)
    const images = props.images.map((images)=>{
        return <ImageCard key={images.id} image={images} />
    })

    return (<div>
    <div className='image-list'>{images}</div>
    <footer>
  <h3>Powered by Unsplash Image API</h3>
</footer>
    </div>)
}

export default ImageList;