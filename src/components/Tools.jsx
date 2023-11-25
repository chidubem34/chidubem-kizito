// import React from 'react'
import { BiLogoVisualStudio, BiLogoWindows, BiLogoGithub  } from "react-icons/bi"
import { SiPostman, SiNetlify, SiVercel   } from "react-icons/si"

const Tools = () => {
    return (
        <div>
            <div className='px-16'>
                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 p-9 rounded-md flex yo justify-center'>
                        <BiLogoVisualStudio size={80} />
                    </div>

                    <div className='border-2 p-9 rounded-md flex yo justify-center'>
                        <BiLogoWindows  size={80} />
                    </div>

                    <div className='border-2 p-9 rounded-md flex yo justify-center'>
                        <BiLogoGithub  size={80} />
                    </div>
                </div>

                <div className='text-white flex mb-4 justify-between gap-10'>
                    <div className='border-2 p-10 rounded-md yo flex yo justify-center'>
                        <SiPostman size={80} />
                    </div>

                    <div className='border-2 p-10 rounded-md flex yo justify-center'>
                        <SiNetlify  size={80} />
                    </div>

                    <div className='border-2 p-10 rounded-md flex yo justify-center'>
                        <SiVercel size={80} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools