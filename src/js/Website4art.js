import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import '../css/website4art.css'

import W4aHeader from './W4aHeader'
import W4aFooter from './W4aFooter'
import W4aGallery from './W4aGallery'
import W4aBio from './W4aBio'
import W4aPrivacy from './W4aPrivacy'
import W4aImpressum from './W4aImpressum'
import { loadProfile, emptyProfile } from './api'
import W4aImpressions from './W4aImpressions'

function Website4art () {
  const [profile, setProfile] = useState(emptyProfile)
  useEffect(() => { loadProfile(setProfile) }, []) // Run once

  document.title = profile.impressum.name

  // This element has no special class for CSS. Use the body-tag for CSS
  // When changing routes, make sure this is also changed in "/scripts/sitemap-routes.js" !
  return (
    <div className="website4art">
      <W4aHeader name={profile.impressum.name} />
      <Routes>
        <Route path="/" element={<W4aGallery/>} />
        <Route path="/gallery" element={<W4aGallery/>} />
        <Route path="/bio" element={<W4aBio/>} />
        <Route path="/impressum" element={<W4aImpressum/>} />
        <Route path="/impressions" element={<W4aImpressions/>} />
        <Route path="/privacy" element={<W4aPrivacy/>} />
      </Routes>
      <W4aFooter
        name={profile.impressum.name}
        instagram={profile.impressum.instagram}
      />
    </div>
  )
}

export default Website4art
