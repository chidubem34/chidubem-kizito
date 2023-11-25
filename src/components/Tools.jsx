// import React from 'react'
import { BiLogoVisualStudio, BiLogoWindows, BiLogoGithub } from "react-icons/bi"
import { SiPostman, SiNetlify, SiVercel } from "react-icons/si"

const Tools = () => {
    return (
        <div>
            <div className='px-16'>
                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <BiLogoVisualStudio size={80} />
                        <p>Vscode</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <BiLogoWindows size={80} />
                        <p>Windows</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <BiLogoGithub size={80} />
                        <p>Github</p>
                    </div>
                </div>

                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <SiPostman size={80} />
                        <p>PostMan</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <SiNetlify size={80} />
                        <p>Netlify</p>
                    </div>

                    <div className='border-2 px-10 py-6 rounded-md so text-center'>
                        <SiVercel size={80} />
                        <p>Vercel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools