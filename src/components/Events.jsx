import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import logo from '../logo.svg'
import './events.css'

const Events = () => {
  return (
    <div name='events'>
      <h1 className='text-2xl pt-16'>Events</h1>

     <div className='grid md:grid-cols-3 bg-gray-200 rounded-lg m-10 sm:mx-24 md:mx-48 text-black flex flex-wrap mb-8 flex-row '>
        <div className='columns-xs'>
          <img src={logo} className=' bg-black rounded-lg rlative w-auto md:max-w-xs' alt='logo' />
        </div>
        <div className='p-8'>
          <h2 className='lg:text-4xl md:text-3xl sm:text-2xl place-content-end'>Art Festival 2023</h2>
          <div className='grid md:gap-24 md:grid-cols-4 md:pt-20 sm:pt-10 place-content-center'>
            <list className='text-2xl'>STAG</list>
            <h6 className='text-xl'>30th <br/> <h6 className='text-sm'>March</h6></h6>
            <h6 className='text-xl'>17:00 <br/> <h6 className='text-sm'>PM</h6></h6>
            <h6 className='text-xl'>$600 <br/> <h6 className='text-sm'>Price</h6></h6>
          </div>
        </div>
        <div className='booknow-container'>
          <button className=''>Book Now</button>
        </div>
      </div>
    </div>

    
    
  )
}

export default Events
