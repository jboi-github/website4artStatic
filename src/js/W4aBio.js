import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import W4aLinkExternal from './W4aLinkExternal'
import { loadProfile, emptyProfile, setHeaderFooterScrollTarget, scrollToBottom } from './api'
import PropTypes from 'prop-types'

function W4aCurrents ({ currents }) {
  return (
    <div className="bioCurrents">
      <h2 className="bioCurrentsTitle">Current events</h2>
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

function W4aPositions ({ positions }) {
  return (
    <div className="bioPositions">
      <p className="bioPositionsTitle">Education</p>
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

function W4aUpcomings ({ upcomings }) {
  return (
    <div className="bioUpcomings">
      <p className="bioUpcomingsTitle">Upcoming</p>
      {upcomings.map((upcoming) =>
        <p className="bioUpcomingsText" key={upcoming.description}>
          {upcoming.date && <span className="bioUpcomingsDate">{upcoming.date}&nbsp;</span>}
          {upcoming.description}
          {upcoming.link && <><br /><W4aLinkExternal text={upcoming.link} url={upcoming.link} /></>}
        </p>
      )}
    </div>
  )
}

function W4aExhibitions ({ exhibitions }) {
  return (
    <div className="bioExhibitions">
      <p className="bioExhibitionsTitle">Exhibitions (selection)</p>
      {exhibitions.map((exhibition, index) =>
        <div key={exhibition.description}>
          {exhibition.date && <p className={index === 0 ? "bioExhibitionsText bioExhibitionsFirstDate" : "bioExhibitionsText bioExhibitionsDate"}>{exhibition.date}</p>}
          <p className="bioExhibitionsText">
            {exhibition.description}
            {exhibition.link && <><br /><W4aLinkExternal text={exhibition.link} url={exhibition.link} /></>}
          </p>
        </div>
      )}
    </div>
  )
}

function W4aSponsorships ({ sponsorships }) {
  return (
    <div className="bioExhibitions">
      <p className="bioExhibitionsTitle">Grants</p>
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

function W4aPublications ({ publications }) {
  return (
    <div className="bioExhibitions">
      <p className="bioExhibitionsTitle">Publications</p>
      {publications.map((publication) =>
        <p className="bioExhibitionsText" key={publication.description}>
          <span className="bioExhibitionsDate">{publication.date}</span><br />
          {publication.description}<br />
          {publication.link && <W4aLinkExternal text={publication.link} url={publication.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aQuotes ({ quotes }) {
  return (
    <div className="bioQuotes">
      <p className="bioQuotesTitle">Publications</p>
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

function W4aContacts ({ contacts }) {
  return (
    <div className="bioExhibitions" id="contacts">
      <p className="bioExhibitionsTitle">Contact</p>
      {contacts.map((contact) =>
        <p className="bioExhibitionsText" key={contact.type}>
          {contact.type}:&nbsp;
          {contact.link && <W4aLinkExternal text={contact.name} url={contact.link}/>}
        </p>
      )}
    </div>
  )
}

function W4aBio () {
  const [profile, setProfile] = useState(emptyProfile)
  const location = useLocation()
  useEffect(() => { loadProfile(setProfile) }, []) // Run once
  useEffect(() => { setHeaderFooterScrollTarget(false) }, []) // Run once
  useEffect(() => { scrollToBottom(new URLSearchParams(location.search)) }, [location]) // Run when url changes

  return (
    <div className="bio" id="positions">
      {profile.bio.current && <W4aCurrents currents={profile.bio.current} />}
      {profile.bio.positions && <W4aPositions positions={profile.bio.positions} />}
      {profile.bio.upcoming && <W4aUpcomings upcomings={profile.bio.upcoming} />}
      {profile.bio.exhibitions && <W4aExhibitions exhibitions={profile.bio.exhibitions} />}
      {profile.bio.sponsorships && <W4aSponsorships sponsorships={profile.bio.sponsorships} />}
      {profile.bio.publications && <W4aPublications publications={profile.bio.publications} />}
      {profile.bio.quotes && <W4aQuotes quotes={profile.bio.quotes} />}
      {profile.contacts && <W4aContacts contacts={profile.contacts} />}
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
    date: PropTypes.string,
    description: PropTypes.string,
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