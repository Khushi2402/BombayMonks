import React from 'react'
import e1 from '../assets/1.png'
import e2 from '../assets/2.png'
import e3 from '../assets/3.png'
import e4 from '../assets/4.png'
import e5 from '../assets/5.png'
import e6 from '../assets/6.png'
import GalCard from './GalCard'

const Gallery = () => {
  return (
    <div name='gallery'>
      <h1 className='text-2xl pt-20'>Gallery</h1>
      <div className='max-w-[1240px] rounded mx-auto px-16 pt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <GalCard className='rounded-lg' bg={e1} />
        <GalCard className='rounded-lg' bg={e2} />
        <GalCard className='rounded-lg' bg={e3} />
        <GalCard className='rounded-lg' bg={e4} />
        <GalCard className='rounded-lg' bg={e5} />
        <GalCard className='rounded-lg' bg={e6} />
      </div>
    </div>
  )
}

export default Gallery
