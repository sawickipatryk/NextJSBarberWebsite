'use client'
import React from 'react'
import Hero from '@/components/Hero'
import bgc from './backgroundHeader.jpg'
import OpeningOurs from '@/components/OpeningOurs'
import PriceList from '@/components/PriceList'
import OurServices from '@/components/OurServices'
import Photos from '@/components/Photos'
import theme from '@/components/ThemeRegistry/theme'

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
        sxH1={{
          [theme.breakpoints.up('md')]: {
            marginBottom: '20px'
          },
          marginBottom: '20px'
        }}
        sxText={{
          [theme.breakpoints.up('md')]: {
            width: '500px',
            marginBottom: '20px'
          },
          width: 'auto',
          marginBottom: '20px'
        }}
        header={'We Will Create Your Best Image'}
        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus eveniet nulla repellendus quidem quisquam recusandae sint deserunt incidunt voluptatum.'}
        buttonText={'APPOINTMENT'}
      />
      <OpeningOurs/>
      <PriceList/>
      <OurServices/>
      <Photos/>
    </>
  )
}
export default Home
