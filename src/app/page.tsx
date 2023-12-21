'use client'
import React from 'react'
import Hero from '@/components/Hero'
import bgc from './backgroundHeader.jpg'

export const Home = (): React.JSX.Element => {
  return (
    <>
      <Hero
        sx={{
          backgroundImage: `url(${bgc.src})`,
          width: '100%',
          height: '80vh',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center'
        }}
        sxGradient={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
          'linear-gradient(0deg, #2C3639 0%, rgba(1, 1, 1, 0.4) 100%);'
        }}
        header={'We Will Create Your Best Image'}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus eveniet nulla repellendus quidem quisquam recusandae sint deserunt incidunt voluptatum.'}
        buttonText={'APPOINTMENT'}
      />

    </>
  )
}
export default Home
