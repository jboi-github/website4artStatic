import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function W4aLinkInternal ({ text, icon, url }) {
  return (
    <Link to={url} className="linkInternal">
      <span>
        <i className={'linkInternalIcon ' + icon} aria-hidden="true"></i>{text}
      </span>
    </Link>
  )
}

W4aLinkInternal.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default W4aLinkInternal
