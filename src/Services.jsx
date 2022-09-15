import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from "react-router-dom"
const Services = () => {

  const { services } = useGlobalContext()

  return (

    <section className='services_section'>
      <h2 className="common_heading">Our Services</h2>
      <div className="container grid grid-three-column">
        {
          services.map((currElement) => {
            const { id, title, image } = currElement;
            return (
              <div className="card" key={id}>
                <figure>
                  <img src={image} alt="..img" className='service_img' />
                </figure>
                <div className="card-data">
                  <h3>{title}</h3>
                  <NavLink to="/services">
                    <button className='service_btn'>
                      Read More
                    </button>
                  </NavLink>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>

  )
}

export default Services