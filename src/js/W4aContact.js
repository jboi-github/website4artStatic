import React, { useState, useEffect } from 'react'
import W4aLinkInternal from './W4aLinkInternal'
import { loadingCaptcha, getCaptcha, sendMessage, setHeaderFooterScrollTarget } from './api'

function W4aContact () {
  useEffect(() => { setHeaderFooterScrollTarget(false) }, []) // Run once

  // submit
  async function handleSubmit (event) {
    event.preventDefault()

    const indicator = document.getElementById('indicator')
    indicator.innerText = ''
    indicator.classList.add('contactWait')

    const elements = document.querySelector('form').elements
    const result = await sendMessage(
      elements.name.value,
      elements.email.value,
      elements.message.value,
      elements.code.value,
      elements.squashed.value,
      elements.expires.value,
      elements.privacy.value)

    indicator.innerText = result.msg || result.response.statusText

    // Refresh captcha for next message
    handleCaptchaRefresh()
    indicator.classList.remove('contactWait')
  }

  // Any change of input -> Check for enabling submit button
  const [enableSubmit, setEnableSubmit] = useState(false)
  function handleChange () {
    const elements = document.querySelector('form').elements
    const values = ['squashed', 'email', 'message'].map((name) => elements[name].value)
    const valid = values.every((value) => value && value.trim() !== '') && elements.privacy.checked && elements.expires.value > 0
    if (valid && elements.code.value.trim() === '') elements.code.focus()
    setEnableSubmit(valid)
  }

  // Refresh Captcha
  const [captcha, setCaptcha] = useState(loadingCaptcha)
  async function handleCaptchaRefresh () {
    const img = document.getElementById('captchaImage')
    img.src = ''
    img.classList.add('contactWait')

    const response = await getCaptcha(img.clientWidth, img.clientHeight)
    setCaptcha(response)
    img.classList.remove('contactWait')
  }
  useEffect(() => {
    handleCaptchaRefresh()
  }, []) // Called once

  // Reset
  function handleReset () {
    setEnableSubmit(false)
  }

  return (
    <form onSubmit={handleSubmit} className="contactForm">
      {
        // The message
      }
      <input type="text" name="name" placeholder="Name" autoFocus onChange={handleChange} className="contactFormName" />
      <input type="email" name="email" placeholder="Email*" required onChange={handleChange} className="contactFormEmail" />
      <textarea rows="3" name="message" placeholder="Nachricht*" required onChange={handleChange} className="contactFormMessage" />
      <span className="contactFormMandatory">* Pflichtfeld</span>
      {
        // Captcha fields
      }
      <div className="contactFormCaptcha">
        <img src={captcha.captcha.img} alt="" id="captchaImage" draggable="false" className="contactFormCaptchaImage" />
        <input type="hidden" name="expires" value={captcha.captcha.hash.expires} />
        <input type="hidden" name="squashed" value={captcha.captcha.hash.squashed} />
        <div className="contactFormCaptchaControl">
          <input type="text" name="code" placeholder="Captcha Code*" required size="6" onChange={handleChange} className="contactFormCaptchaCode" />
          <button type="button" onClick={handleCaptchaRefresh} className="contactFormCaptchaRefresh"><i className='fas fa-redo' /></button>
        </div>
      </div>

      {
        // Controls
      }
      <span className="contactFormPrivacy">
        <input type="checkbox" name="privacy" value="accepted" required onChange={handleChange} className="contactFormPrivacyCheckbox"/>
        <W4aLinkInternal text="Datenschutzerkl&auml;rung*" url="/privacy" />
      </span>
      <button type="submit" disabled={!enableSubmit} className="contactFormSubmit">
        <span><i className="fas fa-paper-plane" />Senden</span>
      </button>
      <button type="reset" onClick={handleReset} className="contactFormReset">
        <span><i className="fas fa-eraser" />Eingaben l&ouml;schen</span>
      </button>

      {
        // Result Message
      }
      <p id="indicator" className="contactFormResult" />
    </form>
  )
}

export default W4aContact
