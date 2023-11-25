// import React from 'react'
import { BiLogoGithub } from "react-icons/bi"


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="flex justify-between text-white bg-[rgba(10,18,25,0.84)] px-16 py-4 items-center">
                    <div>
                        <p>Kizito Chidubem</p>
                    </div>

                    <div>
                        <div className="flex gap-2">
                            <a href="https://github.com/chidubem34">
                                <BiLogoGithub size={30} />
                            </a>

                            <a href="">
                                <BiLogoGithub size={30} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <p>
                            +2347065623281
                        </p>

                        <p>
                            <a href="#">
                            agbowachidubem@gmail.com
                            </a>
                        </p>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer