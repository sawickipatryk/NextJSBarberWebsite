import React from 'react'
import Image from 'next/image'
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material'
import services from './services.jpg'
import services2 from './services2.jpg'
import services3 from './services3.jpg'
import theme from '../ThemeRegistry/theme'

interface ourServicesProps {
  sx?: object
}

export const OurServices = (props: ourServicesProps): React.JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
        sx={{
          paddingTop: '40px',
          paddingBottom: '40px'
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            textTransform: 'uppercase',
            marginBottom: '30px',
            [theme.breakpoints.up('md')]: {
              marginBottom: '60px'
            }
          }}
          variant={'h2'}
          fontWeight={theme.typography.fontWeightBold}
        >
          Our
          <Box
            sx={{
              color: theme.palette.primary.main
            }}
            component={'span'}
          > Services
          </Box>
        </Typography>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            xs={12}
            md={4}

          >
            <Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%'
                  }}
                  priority={true}
                  src={services}
                  alt={'picture of author'}
                />
              </Box>
              <Box
                sx={{
                  padding: '30px',
                  bgcolor: 'black'
                }}
              >
                <Typography
                  variant={'h3'}
                  textTransform={'uppercase'}
                  fontWeight={theme.typography.fontWeightMedium}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  Shaving
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant={'body1'}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%'
                  }}
                  priority={true}
                  src={services2}
                  alt={'picture of author'}
                />
              </Box>
              <Box
                sx={{
                  padding: '30px',
                  bgcolor: 'black'
                }}
              >
                <Typography
                  variant={'h3'}
                  textTransform={'uppercase'}
                  fontWeight={theme.typography.fontWeightMedium}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  Shaving
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant={'body1'}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </Typography>
              </Box>

            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex'
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    height: '100%'
                  }}
                  priority={true}
                  src={services3}
                  alt={'picture of author'}
                />
              </Box>
              <Box
                sx={{
                  padding: '30px',
                  bgcolor: 'black'
                }}
              >
                <Typography
                  variant={'h3'}
                  textTransform={'uppercase'}
                  fontWeight={theme.typography.fontWeightMedium}
                  sx={{
                    textAlign: 'center',
                    marginBottom: '20px'
                  }}
                >
                  Shaving
                </Typography>
                <Typography
                  color={theme.palette.text.secondary}
                  variant={'body1'}
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OurServices
