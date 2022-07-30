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
      <h2 className="bioPositionsTitle"></h2>
        <table>
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default W4aContact
