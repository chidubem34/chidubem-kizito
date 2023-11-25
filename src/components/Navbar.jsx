import { useState } from 'react'
import { links } from './links'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [isOpen, setIsOPen] = useState(false)
    return (
        <>
            {/* <div>
                <header>
                    <div className="font-primary fixed flex navbar px-16 z-50 items-center w-full text-white bg-[rgba(10,18,25,0.84)] h-16 justify-between shadow-xl">
                        <div className='text-4xl font-semibold'>
                            <span className='text-green-500'>K</span>
                            <span className='text-red-500'>C</span>
                        </div>

                        <div className='flex gap-6 h-10'>
                            {links.map((link, id) => {
                                if (id < 5) {
                                    const { name, id, url } = link
                                    return (
                                        <Link to={url}
                                            key={id}
                                            className=' transition-all ease-in-out duration-100 flex font-semibold py-2 px-2 hover:border-b-2 border-green-500 justify-between'>
                                            {name}
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </header>
            </div> */}

            <nav className="bg-gray-800 fixed w-full">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" onClick={() => setIsOPen(!isOpen)} aria-expanded="false">
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ?
                                    (
                                        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    ) : (
                                        <IoMdClose />
                                    )
                                }
                            </button>
                        </div>
                        <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <div className='text-4xl font-semibold'>
                                    <span className='text-green-500'>K</span>
                                    <span className='text-red-500'>C</span>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <a href="#" className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Home</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {isOpen ? (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <Link to={"/chidubem-kizito/"} className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                            <Link to={"/chidubem-kizito/about"} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</Link>
                            <Link to={"/chidubem-kizito/projects"} className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</Link>
                        </div>
                    </div>
                ) : (
                    ""
                )

                }
            </nav>

        </>
    )
}

export default Navbar