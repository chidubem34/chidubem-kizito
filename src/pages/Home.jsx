// import React from 'react'
// import Particle from '../particle'
import Type from '../Type'
import station from '../assets/images/station.svg'

const Home = () => {
    return (
        <div className='bg-black bg-fixed min-h-[100vh]'>
            <div className='py-20 font-primary'>
                <div className='px-16 text-white text-4xl'>
                    <div className='flex items-center py-5'>
                        <div className='w-[50%]'>
                            <p className='py-4 font-semibold'>Hello World,</p>
                            <p>{"I'm"}
                                <span className='text-green-500'> K</span><span>izito</span>
                                <span className='text-red-500'> C</span><span>hidubem</span></p>
                            <div className='py-[70px]'>
                                <Type />
                            </div>
                        </div>
                        <div className='w-[50%]'>
                            <img src={station} className='w-[100%]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home