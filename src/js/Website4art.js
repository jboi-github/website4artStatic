import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

import '../css/website4art.css'

import W4aHeader from './W4aHeader'
import W4aFooter from './W4aFooter'
import W4aGallery from './W4aGallery'
import W4aBio from './W4aBio'
import W4aContact from './W4aContact'
import W4aPrivacy from './W4aPrivacy'
import W4aImpressum from './W4aImpressum'
import { loadProfile, emptyProfile } from './api'

function Website4art () {
  const [profile, setProfile] = useState(emptyProfile)
  useEffect(() => { loadProfile(setProfile) }, []) // Run once

  document.title = profile.impressum.name

  // This element has no special class for CSS. Use the body-tag for CSS
  // When chaning routes, make sure this is also changed in "/scripts/sitemap-routes.js" !
  return (
    <div className="website4art">
      <W4aHeader name={profile.impressum.name} />
      <Route path="/" exact component={W4aGallery} />
      <Route path="/gallery" exact component={W4aGallery} />
      <Route path="/bio" exact component={W4aBio} />
      <Route path="/contact" exact component={W4aContact} />
      <Route path="/impressum" exact component={W4aImpressum} />
      <Route path="/privacy" exact component={W4aPrivacy} />
      <W4aFooter
        name={profile.impressum.name}
        instagram={profile.impressum.instagram}
      />
    </div>
  )
}

export default Website4art
