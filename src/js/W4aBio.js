import React, { useEffect, useState } from 'react'
import W4aLinkExternal from './W4aLinkExternal'
import { loadProfile, emptyProfile, setHeaderFooterScrollTarget } from './api'
import PropTypes from 'prop-types'

function W4aCurrents ({ currents }) {
  return (
    <div className="bioCurrents">
      <h2 className="bioCurrentsTitle">Laufende Ausstellung</h2>
      {currents.map((current) =>
        <p className="bioCurrentsText" key={current.name}>
          <span className="bioCurrentsName">{current.name}</span><br />
          {current.place}<br />
          {current.date}<br />
          {current.time && <span>{current.time}<br /></span>}
          {current.link && <W4aLinkExternal text={current.link} url={current.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aUpcomings ({ upcomings }) {
  return (
    <div className="bioUpcomings">
      <h2 className="bioUpcomingsTitle">N&auml;chste Ausstellung</h2>
      {upcomings.map((upcoming) =>
        <p className="bioUpcomingsText" key={upcoming.name}>
          <span className="bioUpcomingsName">{upcoming.name}</span><br />
          {upcoming.place}<br />
          {upcoming.date}<br />
          {upcoming.time && <div>{upcoming.time}<br /></div>}
          {upcoming.link && <W4aLinkExternal text="" url={upcoming.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aPositions ({ positions }) {
  return (
    <div className="bioPositions">
      <h2 className="bioPositionsTitle">Vita</h2>
      <table>
        <tbody>
          {positions.map((position) =>
            <tr key={position.date}>
              <td className="bioPositionsDate">{position.date}</td>
              <td className="bioPositionsDescription">{position.description}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

function W4aExhibitions ({ exhibitions }) {
  return (
    <div className="bioExhibitions">
      <h2 className="bioExhibitionsTitle">Ausstellungen</h2>
      {exhibitions.map((exhibition) =>
        <p className="bioExhibitionsText" key={exhibition.description}>
          <span className="bioExhibitionsDate">{exhibition.date}</span><br />
          {exhibition.description}<br />
          {exhibition.link && <W4aLinkExternal text={exhibition.link} url={exhibition.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aSponsorships ({ sponsorships }) {
  return (
    <div className="bioExhibitions">
      <h2 className="bioExhibitionsTitle">F&ouml;rderungen</h2>
      {sponsorships.map((sponsorship) =>
        <p className="bioExhibitionsText" key={sponsorship.description}>
          <span className="bioExhibitionsDate">{sponsorship.date}</span><br />
          {sponsorship.description}<br />
          {sponsorship.link && <W4aLinkExternal text={sponsorship.link} url={sponsorship.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aQuotes ({ quotes }) {
  return (
    <div className="bioQuotes">
      <h2 className="bioQuotesTitle">Pressestimmen</h2>
      {quotes.map((quote) =>
        <p className="bioQuotesText" key={quote.quote}>
          <span className="bioQuotesQuote">{quote.quote}</span><br />
          {quote.source}<br />
          {quote.link && <W4aLinkExternal text={quote.link} url={quote.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aBio () {
  const [profile, setProfile] = useState(emptyProfile)
  useEffect(() => { loadProfile(setProfile) }, []) // Run once
  useEffect(() => { setHeaderFooterScrollTarget(false) }, []) // Run once

  return (
    <div className="bio">
      {profile.bio.current && <W4aCurrents currents={profile.bio.current} />}
      {profile.bio.upcoming && <W4aUpcomings upcomings={profile.bio.upcoming} />}
      {profile.bio.positions && <W4aPositions positions={profile.bio.positions} />}
      {profile.bio.exhibitions && <W4aExhibitions exhibitions={profile.bio.exhibitions} />}
      {profile.bio.sponsorships && <W4aSponsorships sponsorships={profile.bio.sponsorships} />}
      {profile.bio.quotes && <W4aQuotes quotes={profile.bio.quotes} />}
    </div>
  )
}

W4aCurrents.propTypes = {
  currents: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string,
    link: PropTypes.string
  })).isRequired
}

W4aUpcomings.propTypes = {
  upcomings: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    date: PropTypes.string,
    time: PropTypes.string,
    link: PropTypes.string
  })).isRequired
}

W4aPositions.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.exact({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
}

W4aExhibitions.propTypes = {
  exhibitions: PropTypes.arrayOf(PropTypes.exact({
    date: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
  })).isRequired
}

W4aQuotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.exact({
    quote: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    link: PropTypes.string
  })).isRequired
}

export default W4aBio