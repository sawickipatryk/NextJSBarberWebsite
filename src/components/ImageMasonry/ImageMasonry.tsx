'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { Container, ImageList, ImageListItem } from '@mui/material'
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
        <ImageList
          variant={'masonry'}
          cols={cols}
          gap={16}
        >
          {itemData.map((item) => (
            <ImageListItem
              sx={{
                display: 'flex',
                border: '10px solid #fff',
                boxShadow: '0px 0px 10px #111'
              }}
              key={item.id}
            >
              <Image
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: item.height
                }}
                priority={true}
                src={item.img}
                alt={'picture of author'}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  )
}
export default ImageMasonry

const itemData = [
  {
    id: 1,
    img: galleryImg,
    height: 600,
    title: 'barber'
  },
  {
    id: 2,
    img: galleryImg1,
    height: 280,
    title: 'barber'
  },
  {
    id: 3,
    img: galleryImg2,
    height: 280,
    title: 'barber'
  },
  {
    id: 4,
    img: galleryImg3,
    height: 280,
    title: 'barber'
  },
  {
    id: 5,
    img: galleryImg4,
    height: 600,
    title: 'barber'
  },
  {
    id: 6,
    img: galleryImg5,
    height: 280,
    title: 'barber'
  },
  {
    id: 7,
    img: galleryImg6,
    height: 600,
    title: 'barber'
  },
  {
    id: 8,
    img: galleryImg7,
    height: 280,
    title: 'barber'
  },
  {
    id: 9,
    img: galleryImg8,
    height: 280,
    title: 'barber'
  }

]
