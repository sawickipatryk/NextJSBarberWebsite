'use client'
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface footerProps {
  sx?: object
}

export const Footer = (props: footerProps): React.JSX.Element => {
  const {
    sx,
    ...otherProps
  } = props

  return (
    <Box
      sx={{
        ...sx,
        bgcolor: theme.palette.common.black,
        padding: '30px 0px'
      }}
      {...otherProps}
    >
      <Container
        maxWidth={'lg'}
      >
        <Grid
          container
          sx={{
            textAlign: 'center'
          }}
        >
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              Navigation
            </Typography>
            item1
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              Where
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              WARSAW
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              99-999
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              TEL: 999-999-999
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              Services
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              SHAVING
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              SHAVING
            </Typography>
            <Typography
              variant={'body2'}
              marginBottom={'10px'}
            >
              SHAVING
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
          >
            <Typography
              fontWeight={theme.typography.fontWeightMedium}
              color={theme.palette.primary.main}
              variant={'h4'}
              marginBottom={'20px'}
            >
              Socials
            </Typography>
            item1
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
