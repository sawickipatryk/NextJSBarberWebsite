'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface heroProps {
  sx?: object
  sxGradient?: object
  header?: string
  text?: string
  buttonText?: string
}

export const Hero = (props: heroProps): JSX.Element => {
  const {
    sx,
    sxGradient,
    header,
    text,
    buttonText,
    ...otherProps
  } = props

  const path = usePathname()
  console.log(path)

  return (
    <Box
      position={'relative'}
      component={'div'}
      sx={{
        ...sx

      }}
      {...otherProps}
    >
      <Box
        position={'absolute'}
        sx={{
          ...sxGradient
        }}
      >
      </Box>
      <Container
        maxWidth={'lg'}
      >
        <Typography
          variant={'h1'}
          fontWeight={theme.typography.fontWeightBold}
          sx={{
            [theme.breakpoints.up('md')]: {
              width: '600px',
              marginBottom: '20px'
            },
            width: 'auto',
            marginBottom: '20px'

          }}
          position={'relative'}
        >
          {header}
        </Typography>
        <Typography
          variant={'body1'}
          color={theme.palette.text.secondary}
          sx={{
            [theme.breakpoints.up('md')]: {
              width: '500px',
              marginBottom: '20px'
            },
            width: 'auto',
            marginBottom: '20px'
          }}
          position={'relative'}
        >
          {text}
        </Typography>
        {
          (path === '/')

            ? (
              <Button
                sx={{
                  fontWeight: theme.typography.fontWeightBold
                }}
                variant={'contained'}
              >
                {buttonText}
              </Button>
              )
            : null
        }

      </Container>

    </Box>
  )
}

export default Hero
