import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {FaArrowUp} from "react-icons/fa"
const GoToTop = () => {
    const [isVisible , setIsVisible] = useState(false)
    const goTop = () => {
        window.scrollTo({ top: 0, left: 0, behaviour: "smooth" })
    }

    const listenToScroll = ()=>{
        let hightToHidden = "200"
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll>hightToHidden) {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll" , listenToScroll)
        return ()=> window.removeEventListener("scroll" , listenToScroll)
    })
    return (
        <aside>
            { isVisible && (
                <div className='top_btn' onClick={goTop}>
                  <FaArrowUp className="icon" />
            </div>
            )}
        </aside>
    )
}

export default GoToTop