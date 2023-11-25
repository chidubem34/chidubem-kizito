import { links } from './links'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div>
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
            </div>
        </>
    )
}

export default Navbar