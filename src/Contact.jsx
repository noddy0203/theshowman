import React from 'react'

const Contact = () => {
  return (
    <section>
      <h2 className='common-heading_contact'>Feel free to contact us.</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.768402352748!2d79.91479941391015!3d23.14213917643263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3ec00e9757d%3A0x6415e2b1b52f608c!2sSP%20CYBER%20CELL%20JABALPUR!5e0!3m2!1sen!2sin!4v1662744683386!5m2!1sen!2sin"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">

      </iframe>

      <div className="formContainer">
        <div className="contact-form">
          <form className='contact-input' action="https://formspree.io/f/xwkzpzwv" method="post">
            <input type="text" name="username" autoComplete='off' placeholder='your name' required />
            <input type="email" name="email" autoComplete="off" placeholder="Your Email" required />
            <textarea name="meesage" cols="30" rows="6" placeholder='Your message or query...' autoComplete='off'></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact