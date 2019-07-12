import React from 'react'
import ReactDOM from 'react-dom'
import {Gallery,GalleryImage} from 'react-gesture-gallery'


function ImageCarousel(){
    const [index, setIndex] = React.useState(0);
    const imagesData = [
    {
      id:1,src:
        "https://images.unsplash.com/photo-1557958114-3d2440207108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    },
    {
      id:2,src:
        "https://images.unsplash.com/photo-1557939403-1760a0e47505?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1931&q=80"
    },
    {
      id:3,src:
        "https://images.unsplash.com/photo-1558029062-a37889b87526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
    }
    
  ];
    
    return(
         <div style={{ width: "100vw", height: "60vh" }}>
            <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        {imagesData.map(img => (
          <GalleryImage objectFit="contain" key={img.src} src={img.src} />
        ))}
      </Gallery>
        </div>
    )
}

export default ImageCarousel