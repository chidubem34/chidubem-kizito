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
                <div className='text-white lg:flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 py-6 mb-4 text-center rounded-md yo'>
                        <div className="flex justify-center">
                        <FaBootstrap size={80} />
                        </div>
                        <p>Bootstrap</p>
                    </div>

                    <div className='border-2 px-10 py-6 mb-4 rounded-md yo text-center'>
                        <div className="flex justify-center">
                        <FaReact size={80} />
                        </div>
                        <p>React</p>
                    </div>

                    <div className='border-2 px-10 py-6 mb-4 rounded-md yo text-center'>
                        <div className="flex justify-center">
                        <FaCss3 size={80} />
                        </div>
                        <p>Css</p>
                    </div>
                </div>

                <div className='text-white md:flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 py-6 rounded-md mb-4 so text-center'>
                        <div className="flex justify-center">
                        <FaHtml5 size={80} />
                        </div>
                        <p>Html</p>
                    </div>

                    <div className='border-2 rounded-md so px-10 mb-4 py-6 text-center'>
                        <div className="flex justify-center">
                        <SiTailwindcss size={80} />
                        </div>
                        <p>Tailwindcss</p>
                    </div>

                    <div className='border-2 px-10 py-6 text-center rounded-md mb-4 so'>
                        <div className="flex justify-center">
                        <SiJavascript size={80} />
                        </div>
                        <p>Javscript</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechStack