// import React from 'react'
import TechStack from '../components/TechStack'
import Tools from '../components/Tools'
import station from '../assets/images/station.svg'
import { IoIosArrowForward } from "react-icons/io"
// import me from "../assets/images/me.jpg"

const About = () => {
  return (
    <div className='text-white pt-20 font-primary'>
      <div className='py-2 px-16'>
        <div>
          <p className='text-4xl border-b-4 border-green-500 w-[180px] text-center py-2 rounded font-bold'>About <span className='text-red-500'>Me</span></p>

          <div className='px-6 flex justify-between'>
            <div className="w-[50%]">
              <p className='py-10'>
                <span className='text-3xl font-semibold'>Hello👋🏽,</span> I am <span className="text-green-500">Kizito Chidubem </span>
                located in <span className="text-green-500"> Eket, Akwa Ibom State</span>
                <br /><br />Currently, an upcoming <span className='text-green-500'>Front-End Web developer</span> learning from KodeCamp and also self-paced. <br /> Additionally a student studying at <span className="text-green-500">Faith Academy Day Secondary School Eket .</span>
                <br />
                I am from <span className="text-green-500">Udi L.G.A of Enugu State, Nigeria.</span>
                <br />
                <br />
                Apart from coding, some other activities that I love to do
              </p>
              <ul className='px-6'>
                <li className="flex items-center">
                  <IoIosArrowForward /> Playing Football
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward /> Watching Tutorials
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward /> Travelling
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward /> Playing Games
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward /> developing Projects
                </li>
                <li className="flex items-center">
                  <IoIosArrowForward /> Learning new Languages
                </li>
              </ul>
              <br />
              <br />

              <p className="text-[#2D82B7]">
                “Research is to see what everybody else has seen, and to think what nobody else has thought,” {"_ Kizito"}
              </p>

            </div>

            <div className="w-[50%]">
              <img src={station} alt="" className='w-full' />
            </div>
          </div>
        </div>

        <div className='mt-10'>
          <div>
            <p className='text-4xl font-bold border-b-4 w-[150px] py-2 border-green-500 rounded text-center'>Skill <span className='text-red-500'>Set</span></p>
          </div>

          <div>
            <p className='text-center py-6 text-4xl font-semibold text-white'>Professional <span className='text-green-500'>Skills</span></p>
            <TechStack />
          </div>

          <div className='text-white'>
            <p className='text-center py-6 text-4xl font-semibold text-white'>Tools <span className='text-green-500'>I use</span></p>
            <Tools />
          </div>
        </div>


      </div>
    </div>
  )
}

export default About