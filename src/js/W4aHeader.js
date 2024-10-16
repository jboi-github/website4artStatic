import React from 'react'
import W4aLinkInternal from './W4aLinkInternal'
import PropTypes from 'prop-types'

const links = [
  { id: 1, text: 'Work', icon: 'fas fa-home', url: '/gallery' },
  { id: 2, text: 'CV', icon: 'fas fa-calendar-alt', url: '/bio' },
  { id: 3, text: 'Contact', icon: 'fas fa-comments', url: '/contacts' }
]

function W4aHeaderTitle ({ name }) { return (<h1 className="headerTitle">{name}</h1>) }

function W4aHeaderLinks () {
  return (
    <nav className="headerNav">
      <ul className="headerList">
        {links.map((link) =>
          <li className="headerListItem" key={link.id}>
            <W4aLinkInternal text={link.text} url={link.url} icon={link.icon} />
          </li>
        )}
      </ul>
    </nav>
  )
}

function W4aHeader ({ name }) {
  return (
    <header className="header">
      <W4aHeaderTitle name={name} />
      <W4aHeaderLinks />
    </header>
  )
}

W4aHeaderTitle.propTypes = {
  name: PropTypes.string.isRequired
}

W4aHeader.propTypes = {
  name: PropTypes.string.isRequired
}

export default W4aHeader
