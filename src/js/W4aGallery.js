import React, { useEffect, useState } from 'react'
import { emptyGallery, loadGallery, getGalleryImage, getGalleryVideo, getGallerySrcSet, setHeaderFooterScrollTarget } from './api'
import PropTypes from 'prop-types'

function W4aGalleryPicture ({ pic: { full, square, title, year, size, material, story, srcSet } }) {
  useEffect(() => {
    document.getElementById(full).srcset = getGallerySrcSet(full, srcSet)
    console.log(document.getElementById(full).srcset)
  })

  return (
    <figure className="galleryFigure">
      <img
        id={full}
        src={getGalleryImage(full, srcSet ? '200' : 'original')}
        alt={title}
        loading="lazy"
        draggable="false"
        className="galleryFigureImage"
      />
      {(title || year || size || material || story) &&
                <figcaption className="galleryFigureCaption">
                  {title && <h1 className="galleryFigureCaptionTitle">{title}</h1>}
                  {(year || size || material) &&
                        <p className="galleryFigureCaptionDetails">
                          {year && year}
                          {year && (size || material) && ' | '}
                          {size && size}
                          {(year || size) && material && <br />}
                          {material && material}
                        </p>
                  }
                  {story && <p className="galleryFigureCaptionStory">{story}</p>}
                </figcaption>
      }
    </figure>
  )
}

function W4aGalleryVideo () {
  return (
    <figure className="galleryFigure">
      <video autoplay muted className="galleryFigureImage">
        <source src="https://www.marieboiselle.com/gallery/videos/videoocean.mp4" type="video/mp4" />
        Leider kann dieser Browser den Video nicht anzeigen.
      </video>
    </figure>
  )
}

function W4aGallery () {
  const [gallery, setGallery] = useState(emptyGallery)
  useEffect(() => { loadGallery(setGallery) }, []) // Run once
  useEffect(() => { setHeaderFooterScrollTarget(true) }, []) // Run once

  return (
    <div className="gallery">
      <p>Hier könnte ihr Video stehen (under construction)</p>
      <div className="galleryFigure">
        <video autoplay muted className="galleryFigureImage">
          <source src="https://www.marieboiselle.com/gallery/videos/videoocean.mp4" type="video/mp4" />
          Leider kann dieser Browser den Video nicht anzeigen.
        </video>
      </div>

      {gallery.map((pic, index) => {
        return (<W4aGalleryPicture key={index} pic={pic} />)
      })}
    </div>
  )
}

W4aGalleryPicture.propTypes = {
  pic: PropTypes.exact({
    full: PropTypes.string.isRequired,
    square: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    size: PropTypes.string,
    material: PropTypes.string,
    story: PropTypes.string,
    srcSet: PropTypes.arrayOf(PropTypes.exact({
      size: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired
    }))
  }).isRequired
}

export default W4aGallery
