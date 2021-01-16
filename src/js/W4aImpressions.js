import React, { useEffect, useState } from 'react'
import { emptyImpressions, loadImpressions, getImpressionsImage, getImpressionsSrcSet, setHeaderFooterScrollTarget } from './api'
import PropTypes from 'prop-types'

function W4aImpressionsPicture ({ pic: { full, square, title, year, size, material, story, srcSet } }) {
  useEffect(() => {
    document.getElementById(full).srcset = getImpressionsSrcSet(full, srcSet)
    console.log(document.getElementById(full).srcset)
  })

  return (
    <figure className="impressionsFigure">
      <img
        id={full}
        src={getImpressionsImage(full, srcSet ? '200' : 'original')}
        alt={title}
        loading="lazy"
        draggable="false"
        className="impressionsFigureImage"
      />
      {(title || year || size || material || story) &&
                <figcaption className="impressionsFigureCaption">
                  {title && <h1 className="impressionsFigureCaptionTitle">{title}</h1>}
                  {(year || size || material) &&
                        <p className="impressionsFigureCaptionDetails">
                          {year && year}
                          {year && (size || material) && ' | '}
                          {size && size}
                          {(year || size) && material && <br />}
                          {material && material}
                        </p>
                  }
                  {story && <p className="impressionsFigureCaptionStory">{story}</p>}
                </figcaption>
      }
    </figure>
  )
}

function W4aImpressions () {
  const [impressions, setImpressions] = useState(emptyImpressions)
  useEffect(() => { loadImpressions(setImpressions) }, []) // Run once
  useEffect(() => { setHeaderFooterScrollTarget(true) }, []) // Run once

  return (
    <div className="impressions">
      {impressions.map((pic, index) => {
        return (<W4aImpressionsPicture key={index} pic={pic} />)
      })}
    </div>
  )
}

W4aImpressionsPicture.propTypes = {
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

export default W4aImpressions
