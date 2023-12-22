import * as React from 'react'
import Box from '@mui/material/Box'
import Masonry from '@mui/lab/Masonry'
import { Container } from '@mui/material'
import useBreakpoint from '@/helpers/useBreakpoint'
import Image from 'next/image'

import galleryImg from './gallery.jpg'
import galleryImg1 from './gallery1.jpg'
import galleryImg2 from './gallery2.jpg'
import galleryImg3 from './gallery3.jpg'
import galleryImg4 from './gallery4.jpg'
import galleryImg5 from './gallery5.jpg'
import galleryImg6 from './gallery6.jpg'
import galleryImg7 from './gallery7.jpg'
import galleryImg8 from './gallery8.jpg'

export const ImageMasonry = (): React.JSX.Element => {
  const breakpoint = useBreakpoint()
  const cols = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 3
  }[breakpoint[0]]
  return (
    <Container>
      <Box
        sx={{
          width: '100%',
          minHeight: '100%',
          padding: '40px 0px'
        }}
      >
        <Masonry
          columns={cols}
          spacing={2}
        >
          {itemData.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: '10px solid #fff',
                boxShadow: '0px 0px 10px #111',
                height: item.height
              }}

            >
              <Image
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: '100%'
                }}
                priority={true}
                src={item.img}
                alt={'picture of author'}
              />
            </Box>
          ))}
        </Masonry>
      </Box>
    </Container>
  )
}
export default ImageMasonry

const itemData = [
  {
    img: galleryImg,
    height: 620,
    title: 'barber'
  },
  {
    img: galleryImg1,
    height: 300,
    title: 'barber'
  },
  {
    img: galleryImg2,
    height: 620,
    title: 'barber'
  },
  {
    img: galleryImg3,
    height: 620,
    title: 'barber'
  },
  {
    img: galleryImg4,
    height: 300,
    title: 'barber'
  },
  {
    img: galleryImg5,
    height: 300,
    title: 'barber'
  },
  {
    img: galleryImg6,
    height: 300,
    title: 'barber'
  },
  {
    img: galleryImg7,
    height: 300,
    title: 'barber'
  },
  {
    img: galleryImg8,
    height: 300,
    title: 'barber'
  }

]
