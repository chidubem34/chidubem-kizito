// import React from 'react'
import { BiLogoVisualStudio, BiLogoWindows, BiLogoGithub } from "react-icons/bi"
import { SiPostman, SiNetlify, SiVercel } from "react-icons/si"

const Tools = () => {
    return (
        <div>
            <div className='px-16'>
                <div className='text-white md:flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 mb-4 py-6 rounded-md so text-center'>
                        <div className="flex justify-center">
                            <BiLogoVisualStudio size={80} />
                        </div>
                        <p>Vscode</p>
                    </div>

                    <div className='border-2 px-10 mb-4 py-6 rounded-md so text-center'>
                        <div className="flex justify-center">
                            <BiLogoWindows size={80} />
                        </div>
                        <p>Windows</p>
                    </div>

                    <div className='border-2 px-10 mb-4 py-6 rounded-md so text-center'>
                        <div className="flex justify-center">
                            <BiLogoGithub size={80} />
                        </div>
                        <p>Github</p>
                    </div>
                </div>

                <div className='text-white md:flex mb-4 justify-between gap-10'>
                    <div className='border-2 px-10 mb-4 py-6 rounded-md so text-center'>
                        <div className="flex justify-center">
                            <SiPostman size={80} />
                        </div>
                        <p>PostMan</p>
                    </div>

                    <div className='border-2 px-10 mb-4 py-6 rounded-md so text-center'>
                        <div className="flex justify-center">
                            <SiNetlify size={80} />
                        </div>
                        <p>Netlify</p>
                    </div>

                    <div className='border-2 px-10 mb-4 py-6 rounded-md so text-center'>
                        <div className="flex justify-center">
                            <SiVercel size={80} />
                        </div>
                        <p>Vercel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools