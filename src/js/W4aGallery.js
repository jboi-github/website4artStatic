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
      {(title || year || size || material || story) &&
                <figcaption className="galleryFigureCaption">
                    {title && <p className="galleryFigureCaptionDetails galleryFigureCaptionTitle">{title}</p>}
                    <p className="galleryFigureCaptionDetails">
                    {size && size}
                    {material && ', '}
                    {material && material}
                    {year && ', '}
                    {year && year}
                  </p>
                  {story && <p className="galleryFigureCaptionStory">{story}</p>}
                </figcaption>
      }
      <a href={getGalleryImage(full, 'original')}>
      <img
        id={full}
        src={getGalleryImage(full, srcSet ? '200' : 'original')}
        alt={title}
        loading="lazy"
        draggable="false"
        className="galleryFigureImage"
      />
      </a>
    </figure>
  )
}

function W4aGallery () {
  const [gallery, setGallery] = useState(emptyGallery)
  useEffect(() => { loadGallery(setGallery) }, []) // Run once
  useEffect(() => { setHeaderFooterScrollTarget(true) }, []) // Run once

  return (
    <div className="gallery">
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
