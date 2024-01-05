'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface heroProps {
  sx?: Record<string, unknown>
  sxGradient?: Record<string, unknown>
  sxH1?: Record<string, unknown>
  sxText?: Record<string, unknown>
  header?: string
  text?: string
  buttonText?: string
}

export const Hero = (props: heroProps): JSX.Element => {
  const {
    sx,
    sxGradient,
    sxH1,
    sxText,
    header,
    text,
    buttonText,
    ...otherProps
  } = props

  const path = usePathname()

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
            ...sxH1
          }}
          position={'relative'}
        >
          {header}
        </Typography>
        <Typography
          variant={'body1'}
          color={theme.palette.text.secondary}
          sx={{
            ...sxText
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
