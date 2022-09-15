import React from 'react'
import {NavLink} from "react-router-dom"
import {FaYoutube , FaLinkedin, FaInstagram} from "react-icons/fa"
const Footer = () => {
  return (
    <div className='footer_main'>
      <section className="contact-short">
        <div className="grid_footer grid-two-column">
          <div>
            <h3 className='footer_upper_h3'>Ready to get started?</h3>
            <h3 className='footer_upper_h3'>Talk to us today</h3>
          </div>

          <div className='contact-short-btn'>
            <NavLink to="/">
              <button style={{borderRadius:"2px" , fontSize:"1rem"}}>Get Started</button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3 className='footer_h3' style={{textAlign:"center"}}>THE SHOWMAN Co.</h3>
            <p className='footer_para' style={{textAlign:"center"}}>we are always available on- theshowmanofficial@gmail.com</p>
          </div>
          {/* 3rd column */}
          <div className="footer-subscribe">
            <h3 className='footer_h3'>Subscribe to get important updates</h3>
            <form action="#">
              <input
                className='footer_form'
                style={{ marginTop:"8px"}}
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3 className='footer_h3' style={{textAlign:"center"}}>Follows Us</h3>
            <div className="footer-social--icons" style={{textAlign:"center", marginTop:"8px"}}>
              <div>
                <a href="https://www.linkedin.com/in/ayush-soni-0606a8148/" target="_blank">
                <FaLinkedin className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/ayushsoni_photography/" target="_blank">
                <FaInstagram className="icons" /> 
                </a>
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank">
                   <FaYoutube className="icons" /> 
                </a> 
              </div>
            </div>
          </div>
          {/* 4th column */}
          <div className="footer-contact">
            <h3 className='footer_h3' style={{textAlign:"center"}}>Call Us</h3>
            <h3 className='footer_h3' style={{textAlign:"center", marginTop:"8px"}}>+91 9039925586</h3>
          </div>
        </div>
        {/* bottom section */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid_low_footer">
            <p className='footer_para' >
              @{new Date().getFullYear()} THE SHOWMAN Co. All Rights Reserved
            </p>
            <div className='last_para'>
              <p className='footer_para'>PRIVACY POLICY</p>
              <p className='footer_para'>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer