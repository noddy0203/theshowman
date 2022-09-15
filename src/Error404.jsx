import React from 'react'
import { NavLink } from "react-router-dom"
const Error404 = () => {
    return (
        <section className='errorSection'>
            <img style={{width:"50%", height:"422px"}} src="./images/error1.svg" alt="error" />
            <NavLink to='/'>
                <button className='btn err_btn'>Go Back</button>
            </NavLink>
        </section>
    )
}

export default Error404