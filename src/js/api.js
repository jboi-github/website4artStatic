/*
    API clients
 */
// const baseHost = "http://localhost:7071"
const baseHost = 'https://website4art3api.azurewebsites.net'

const querystring = require('querystring')

/* Captcha Handling */
const offline = require('../images/offline.png')

export const loadingCaptcha = { msg: '', captcha: { img: '', hash: { expires: 0, squashed: '' } } }
export const offlineCaptcha = { msg: '', captcha: { img: offline, hash: { expires: 0, squashed: '' } } }
export async function getCaptcha (x, y) {
  console.log(x, y)
  const response = await fetch(`${baseHost}/api/GetCaptcha`, {
    method: 'post',
    body: querystring.stringify({ x: x, y: y })
  })
  const data = await response.json()
  if (!response.ok) { offlineCaptcha.msg = data.msg }

  return response.ok ? data : offlineCaptcha
}

/* Send Message */
export async function sendMessage (name, email, message, code, squashed, expires, privacy) {
  const response = await fetch(`${baseHost}/api/SendMessage`, {
    method: 'post',
    body: querystring.stringify({
      name: name,
      email: email,
      message: message,
      code: code,
      squashed: squashed,
      expires: expires,
      privacy: privacy
    })
  })
  const data = await response.json()
  return { response: response, msg: data.msg }
}

/* Profile */
export const emptyProfile = {
  impressum: {
    name: '',
    umsatzSteuerNr: '',
    wirtschaftsId: '',
    instagram: ''
  },
  bio: {}
}
export async function loadProfile (setProfile) {
  const response = await fetch(`${process.env.PUBLIC_URL}/config/profile.json`)
  const profile = await response.json()
  setProfile(profile)
}

/* Gallery Configuration */
export const emptyGallery = []
export async function loadGallery (setGallery) {
  const response = await fetch(`${process.env.PUBLIC_URL}/config/gallery.json`)
  const gallery = await response.json()
  setGallery(gallery)
}

/* Construct filename for gallery */
export function getGalleryImage (name, size) {
  return `${process.env.PUBLIC_URL}/gallery/${size}/${name}.jpg`
}

/* Construct srcset for gallery image */
export function getGallerySrcSet (name, srcSet) {
  return (srcSet && srcSet.map(
    (src) => `${getGalleryImage(name, src.size)} ${src.width}w`)
    .join(', ')) || ''
}

/* Set or unset header and footer as target for scrolling */
export function setHeaderFooterScrollTarget (isTarget) {
  const setOne = function (className, isTarget) {
    const item = document.getElementsByClassName(className)[0]
    if (isTarget) {
      item.classList.add('scrollTarget')
    } else {
      item.classList.remove('scrollTarget')
    }
  }

  setOne('header', isTarget)
  setOne('footer', isTarget)
}
