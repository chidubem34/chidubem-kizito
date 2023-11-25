// import React from 'react'
import rainy from '../assets/images/rainy.jpg'
import kcr from '../assets/images/kcr.png'
import travel from '../assets/images/travel.png'
import ecommerce from '../assets/images/ecommerce.png'
import changer from '../assets/images/changer.png'
import '../App.css'

const Projects = () => {
    return (
        <div>
            <div className='pt-20 px-16'>

                <div>
                    <div>
                        <p className='text-4xl border-b-4 border-green-500 w-[240px] text-center text-white py-2 rounded font-bold'>My <span className='text-red-500'>Portfolio</span></p>
                    </div>

                    <div className='py-10'>
                        <div className='text-white text-center'>
                            <p className='text-3xl text-center py-2 rounded font-bold'>My<span className='text-green-500'> Projects</span></p>
                            <p>{"Here are some of the projects I've worked on personally and some team projects"}</p>
                        </div>

                        <div>
                            <div className=' grid grid-cols-3 gap-10 py-16'>
                                <div className='card so'>
                                    <img src={rainy} alt="stew" className='img' />
                                    <div className='m-4'>
                                        <a href='https://chidubem34.github.io/weather-app' className='font-bold'>Weather App</a>
                                        <span className='block text-gray-300 text-sm'>
                                            A website that checks for the current weather condition of your location. Te information is gotten from the <span className='text-green-700'>Open Weather API</span>. It also allows the user to search for about 1200 locations across the globe. It was built using Vite, React & Tailwindcss. It is live on gh-Pages.
                                        </span>
                                    </div>
                                    <div className="badge">
                                        <span>Personal</span>
                                    </div>
                                </div>

                                <div className='card so'>
                                    <img src={ecommerce} alt="stew" className='img' />
                                    <div className='m-4'>
                                        <a href='https://chidubem34.github.io/weather-app' className='font-bold'>Kodecamp E-commerce</a>
                                        <span className='block text-gray-300 text-sm'>
                                            A website that contains many products like accessories, gadgets, clothes, and lots more. The information is gotten from the <span className='text-green-700'>Fake store Api</span>. It also allows the user to add his/her chosen product to the cart for payment. It was built using Vite, React & Tailwindcss. It is live on gh-Pages.
                                        </span>
                                    </div>
                                    <div className="badge">
                                        <span>Personal</span>
                                    </div>
                                </div>

                                <div className='card so'>
                                    <img src={changer} alt="stew" className='img' />
                                    <div className='m-4'>
                                        <a href='https://chidubem34.github.io/weather-app' className='font-bold'>Color Flipper</a>
                                        <span className='block text-gray-300 text-sm'>
                                            A website in which you can change your background Images to beautiful and fulfilling colors. It randomly selects colors and changes the background of you screen. This was achieved using Vite, React & Tailwindcss. It is live on gh-Pages.
                                        </span>
                                    </div>
                                    <div className="badge">
                                        <span>Personal</span>
                                    </div>
                                </div>

                                <div className='card so'>
                                    <img src={kcr} alt="stew" className='img' />
                                    <div className='m-4'>
                                        <a href='https://chidubem34.github.io/weather-app' className='font-bold'>Kodecamp</a>
                                        <span className='block text-gray-300 text-sm'>
                                            A website where you can hire different Tech talents from Africa. You can also signup and login successfully without any hinderances. It was built using Vite, React & Tailwindcss. It is live on gh-Pages.
                                        </span>
                                    </div>
                                    <div className="badge">
                                        <span>Team Project</span>
                                    </div>
                                </div>

                                <div className='card so'>
                                    <img src={travel} alt="stew" className='img' />
                                    <div className='m-4'>
                                        <a href='https://chidubem34.github.io/weather-app' className='font-bold'>Travel Tide</a>
                                        <span className='block text-gray-300 text-sm'>
                                            A website that checks for the current weather condition of your location. Te information is gotten from the <span className='text-green-700'>Open Weather API</span>. It also allows the user to search for about 1200 locations across the globe. It was built using Vite, React & Tailwindcss. It is live on gh-Pages.
                                        </span>
                                    </div>
                                    <div className="badge">
                                        <span>In progress...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects