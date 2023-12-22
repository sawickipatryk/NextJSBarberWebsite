import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import theme from '../ThemeRegistry/theme'
import Image from 'next/image'
import aboutImg from './about.jpg'

interface newStyleProps {
  sx?: object
}

export const NewStyle = (props: newStyleProps): JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        padding: '30px 0px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Typography
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '60px'
          }}
          variant={'h2'}
          fontWeight={theme.typography.fontWeightBold}
        >
          Welcome To Our
          <Box
            sx={{
              color: theme.palette.primary.main
            }}
            component={'span'}
          > Barber
          </Box>
        </Typography>
        <Grid
          container
          spacing={5}
        >
          <Grid
            item
            sx={{
              order: '2',
              [theme.breakpoints.up('md')]: {
                order: '0'
              }
            }}
            md={6}
            xs={12}
          >
            <Typography
              sx={{
                textAlign: 'center',
                marginBottom: '30px'
              }}
              variant={'h2'}
              fontWeight={theme.typography.fontWeightBold}
            >
              Your
              <Box
                sx={{
                  color: theme.palette.primary.main
                }}
                component={'span'}
              > New&nbsp;
              </Box>
              Perfect
              <Box
                sx={{
                  color: theme.palette.primary.main
                }}
                component={'span'}
              > Style
              </Box>
            </Typography>
            <Typography
              variant={'body1'}
              color={theme.palette.text.secondary}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a e 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
            <Box
              position={'relative'}
              sx={{
                [theme.breakpoints.up('md')]: {
                  width: '90%',
                  '&::after': {
                    position: 'absolute',
                    top: '-30px',
                    left: '30px',
                    content: '""',
                    height: '100%',
                    width: '100%',
                    border: '2px solid #A27B5C',
                    zIndex: '-1'
                  }
                }
              }}
            >
              <Image
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  height: '100%'
                }}
                priority={true}
                src={aboutImg}
                alt={'picture of author'}
              />
            </Box>

          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default NewStyle
