import React, { useEffect, useState } from 'react'
import W4aLinkExternal from './W4aLinkExternal'
import { loadProfile, emptyProfile, setHeaderFooterScrollTarget } from './api'
import PropTypes from 'prop-types'


function W4aContact () {
  const [profile, setProfile] = useState(emptyProfile)
  useEffect(() => { loadProfile(setProfile) }, []) // Run once
  useEffect(() => { setHeaderFooterScrollTarget(false) }, []) // Run once

  return (
    <div className="bio">
      <div className="bioPositions">
      <table className="landscapeOriented">
          <tr>
            <td>
              <table>
                  <tr>
                    <td className="bioPositionsDate">Email</td>
                    <td className="bioPositionsDescription">
                      <W4aLinkExternal text={profile.impressum.emailName} url={profile.impressum.emailLink}/>
                    </td>
                  </tr>
                  <tr>
                    <td className="bioPositionsDate">Instagram</td>
                    <td className="bioPositionsDescription">
                      <W4aLinkExternal text={profile.impressum.instagramName} url={profile.impressum.instagramLink}/>
                    </td>
                  </tr>
              </table>
            </td>
            <td className="bioQuotesText bioQuotesQuote">
              <p>
                I explore the balance between naturalness and artificiality in a man-made world. My digitally created landscapes, shaped by architecture, focus on human impact without showing people.
              </p>
              <p>
                I'm influenced by the aesthetics of digital environments and 3D assets, which I combine with various painting techniques. My goal is to push the boundaries of painting by integrating these approaches while staying true to the core of what makes a painting.
              </p>
              <div className="bioQuotesSource">
                <p>Marie Boiselle</p>
              </div>
            </td>
          </tr>
        </table>
        <table className="portraitOriented">
          <tr><td className="bioPositionsDate">Email</td></tr>
          <tr><td className="bioPositionsDescription">
            <W4aLinkExternal text={profile.impressum.emailName} url={profile.impressum.emailLink}/>
            </td></tr>
          <tr><td className="bioPositionsDate">Instagram</td></tr>
          <tr><td className="bioPositionsDescription">
            <W4aLinkExternal text={profile.impressum.instagramName} url={profile.impressum.instagramLink}/>
          </td></tr>
          <tr><td>&nbsp;</td></tr>
          <tr><td className="bioQuotesText bioQuotesQuote">
            <p>
              I explore the balance between naturalness and artificiality in a man-made world. My digitally created landscapes, shaped by architecture, focus on human impact without showing people.
            </p>
            <p>
              I'm influenced by the aesthetics of digital environments and 3D assets, which I combine with various painting techniques. My goal is to push the boundaries of painting by integrating these approaches while staying true to the core of what makes a painting.
            </p>
            <div className="bioQuotesSource">
              <p>Marie Boiselle</p>
            </div>
          </td></tr>
        </table>
      </div>
    </div>
  )
}

export default W4aContact
