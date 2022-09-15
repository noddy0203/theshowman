import React from 'react'
import { NavLink } from "react-router-dom"
import { useGlobalContext } from '../context'

const HeroSection = () => {

    const { name, image } = useGlobalContext()

    return (
        <section className='heroSection'>
            <div className="container grid grid-2-column">
                <div className="section-hero-data">
                    <p className='hero-top-data'>THIS IS ME</p>
                    <h1 className='hero-heading'>{name}</h1>
                    <p className='hero-para'>This is me {name}, Photographer, Cinematographer, Script Writer, Director
                        writer and a full time DOP(Director Of Photography).</p>
                    <button className='btn hireMe-btn'>
                        <NavLink className="buttonNav" to="/contact">Hire Me</NavLink>
                    </button>
                </div>

                <div className="section-hero-image">
                    <picture>
                        <img className='hero-img' src={image} alt="heroimg" />
                    </picture>
                </div>
            </div>
        </section>

    )
}

export default HeroSection