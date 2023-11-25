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
                    <div className='border-2 p-10 rounded-md yo flex justify-center'>
                        <FaBootstrap size={80} />
                    </div>

                    <div className='border-2 p-10 rounded-md yo flex justify-center'>
                        <FaReact size={80} />
                    </div>

                    <div className='border-2 p-10 rounded-md yo flex justify-center'>
                        <FaCss3 size={80} />
                    </div>
                </div>

                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 bg-black rounded-md yo p-10 transition duration-150 ease-out hover:ease-in  flex justify-center'>
                        <FaHtml5 size={80} />
                    </div>

                    <div className='border-2 p-10 rounded-md yo flex justify-center'>
                        <SiTailwindcss size={80} />
                    </div>

                    <div className='border-2 p-10 rounded-md yo flex justify-center'>
                        <SiJavascript size={80} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack