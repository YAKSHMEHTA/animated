import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useLocation } from 'react-router-dom'

function Stairs() {

    const currentPath = useLocation().pathname;

    const stairparent = useRef(null);

    useGSAP(function(){

        const tl = gsap.timeline();
        tl.to(stairparent.current,{
            display:'block',
        })
        tl.from('.stair',{
            height:0,
            stagger:{
                amount:-0.25,
            }
        })
        tl.to('.stair',{
            y:'100%',
            stagger:{
                amount:-0.25,
            }
        })
        tl.to(stairparent.current,{
            display:'none',
        })
        tl.to('stair',{
            y:0,
        });

    },[currentPath])

    return (
        <div ref={stairparent} className='h-screen w-full fixed z-50 top-0 left-0' >
            <div className='h-full w-full flex'>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
                <div className="stair h-full w-1/5 bg-black"></div>
            </div>
        </div>
    )
}

export default Stairs