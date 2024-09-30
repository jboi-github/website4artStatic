import React from 'react'
import W4aLinkInternal from './W4aLinkInternal'
import W4aLinkExternal from './W4aLinkExternal'
import PropTypes from 'prop-types'

const linksInternal = [
  { id: 1, text: 'privacy', icon: 'far law-symbol', url: '/privacy' },
  { id: 2, text: 'imprint', icon: 'far fa-address-card', url: '/impressum' },
  { id: 3, text: 'impressions', icon: 'far fa-images', url: '/impressions' }
]

function W4aFooterCopyright ({ name }) {
  return (
    <span className="footerCopyright">
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;
      <W4aLinkInternal text={name} url="/contact" />&nbsp;
      <a
        target="_blank"
        rel="license external nofollow noopener noreferrer"
        href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
        <img
          alt="Creative Commons Lizenzvertrag"
          src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"
          loading="lazy"
          draggable="false"
          title="This license enables reusers to copy and distribute the material in any medium or format in unadapted form only, for noncommercial purposes only, and only so long as attribution is given to the creator."
        />
      </a>
    </span>
  )
}

function W4aFooterLinks ({ instagram }) {
  return (
    <nav className="footerNav">
      <ul className="footerList">
        {linksInternal.map((link) =>
          <li className="footerListItem" key={link.id}>
            <W4aLinkInternal text={link.text} url={link.url} icon={link.icon} />
          </li>
        )}
        {instagram > '' &&
                    <li className="footerListItem">
                      <W4aLinkExternal text="Instagram" url={instagram} icon="fab fa-instagram" />
                    </li>
        }
      </ul>
    </nav>
  )
}

function W4aFooter ({ name, instagram }) {
  return (
    <footer className="footer">
      <W4aFooterLinks instagram={instagram}/>
      <W4aFooterCopyright name={name} />
    </footer>
  )
}

W4aFooterCopyright.propTypes = {
  name: PropTypes.string.isRequired
}

W4aFooterLinks.propTypes = {
  instagram: PropTypes.string.isRequired
}

W4aFooter.propTypes = {
  name: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired
}

export default W4aFooter
