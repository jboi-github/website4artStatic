import React from 'react'
import PropTypes from 'prop-types'

function W4aLinkExternal ({ text, icon, url }) {
  return (
    <a className="linkExternal" target="_blank" rel="external nofollow noopener noreferrer" href={url}>
      <span>
        <i className={'linkExternalIcon ' + icon} aria-hidden="true" />
        {text}&nbsp;
        <i className="linkExternalIconTargetBlank fa fa-external-link" aria-hidden="true" />
      </span>
    </a>
  )
}

W4aLinkExternal.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default W4aLinkExternal
