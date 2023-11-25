// import React from 'react'
import {
    FaHtml5,
    FaCss3,
    FaBootstrap,
    FaReact,
} from "react-icons/fa6"

import { SiTailwindcss, SiJavascript } from 'react-icons/si'
import '../App.css'

const TechStack = () => {
    return (
        <>
            <div className='px-16'>
                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 py-6 rounded-md yo'>
                        <FaBootstrap size={80} />
                        <p>Bootstrap</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md yo text-center'>
                        <FaReact size={80} />
                        <p>React</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md yo text-center'>
                        <FaCss3 size={80} />
                        <p>Css</p>
                    </div>
                </div>

                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <FaHtml5 size={80} />
                        <p>Html</p>
                    </div>

                    <div className='border-2 rounded-md so px-10 py-6 text-center'>
                        <SiTailwindcss size={80} />
                        <p>Tailwindcss</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md so'>
                        <SiJavascript size={80} />
                        <p>Javscript</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack