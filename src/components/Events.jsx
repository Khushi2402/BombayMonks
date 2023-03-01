import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import logo from '../logo.svg'
import e1 from '../e1.svg'
import './events.css'
import ev from '../ev.svg'

const Events = () => {
  return (
    <div name='events'>
      <h1 className='text-2xl pb-10'>Events</h1>

      <div class="max-w-md sm:mx-4 md:mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="h-auto w-full object-cover md:h-auto md:w-76 rounded-xl" src={ev} alt="Modern building architecture"/>
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-3xl font-semibold">The Carnival Nights</div>
            <div className='grid grid-cols-2 divide-x-4 divide-black pt-4 md:mx-20'>
              <h1 className='text-lg font-medium'>STAG <br/> Free</h1>
              <h1 className='text-lg font-medium'>COUPLE <br/> Free</h1>
            </div>
            <h2 className='text-lg pt-10 grid justify-items-start font-medium'>3rd March - 5th March</h2>
            <h2 className='text-lg md:pt-1 grid justify-items-start font-medium'>Friday - Sunday</h2>
            <h2 className='text-lg text-left md:pt-1 font-medium'>Bigboss Lounge, Anchit Towers, Roadpali</h2>
            <div className='relative pt-6'>
              <button className='md:absolute md:top-2 md:-right-24'>
                <a href="https://wa.me/9987562803?text=I%20wanna%20book%20a%20ticket%20for%20the%20event">Book Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events
