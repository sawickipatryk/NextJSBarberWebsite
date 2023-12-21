import React from 'react'
import { Box, Container, Typography, Button, Grid } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface openingOursProps {
  sx?: object
  sxGradient?: object
  header?: string
  text?: string
  buttonText?: string
}

const pricesListArray = [
  {
    id: 1,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 2,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 3,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 4,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 5,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 6,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 7,
    name: 'BEARD',
    price: '20'
  },
  {
    id: 8,
    name: 'BEARD',
    price: '20'
  }
]
const buttonsArray = [
  {
    buttonName: 'ALL'
  },
  {
    buttonName: 'BEARD'
  },
  {
    buttonName: 'HAIRSTYLE'
  },
  {
    buttonName: 'HAIRCUT'
  },
  {
    buttonName: 'MUSTACHE'
  }
]

export const PriceList = (props: openingOursProps): React.JSX.Element => {
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
          paddingBottom: '40px',
          [theme.breakpoints.up('md')]: {
            paddingTop: '80px',
            paddingBottom: '80px'
          }
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
          <Box
            sx={{
              color: theme.palette.primary.main
            }}
            component={'span'}
          >Price&#160;
          </Box>
          List
        </Typography>
        <Container
          maxWidth={'sm'}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginBottom: '30px'
          }}
        >
          {
            buttonsArray.map((button) => {
              return (
                <Button
                  sx={{
                    fontSize: '14px',
                    padding: '0px',
                    minWidth: '0px',
                    color: 'white',
                    [theme.breakpoints.up('md')]: {
                      fontSize: '18px'
                    }
                  }}
                  variant={'text'}
                  key={button.buttonName}
                >
                  {button.buttonName}
                </Button>
              )
            })
          }
        </Container>
        <Grid
          container
          gap={'30px'}
          sx={{
            [theme.breakpoints.up('md')]: {
              '& .MuiGrid-root': {
                flexBasis: '47%',
                margin: 'auto'
              }
            }

          }}
        >
          {
            pricesListArray.map((item) => {
              return (
                <Grid
                  key={item.id}
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderBottom: '1px solid #A27B5C'
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      fontWeight={theme.typography.fontWeightMedium}
                      variant={'h5'}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      fontWeight={theme.typography.fontWeightMedium}
                      variant={'h5'}
                    >
                      $ {item.price}
                    </Typography>
                  </Box>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </Box>
  )
}

export default PriceList
