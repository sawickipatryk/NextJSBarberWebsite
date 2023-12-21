'use client'
import * as React from 'react'
import { Box, Container, Typography, Grid, List, ListItem, ListItemText } from '@mui/material'
import theme from '../ThemeRegistry/theme'

interface openingOursProps {
  sx?: object
}

const openingHoursArray = [
  {
    nameOfDay: 'MONDAY',
    hours: '8:00 - 16:00'
  },
  {
    nameOfDay: 'TUESDAY',
    hours: '8:00 - 16:00'
  },
  {
    nameOfDay: 'WEDNESDAY',
    hours: '8:00 - 16:00'
  },
  {
    nameOfDay: 'THURSDAY',
    hours: '8:00 - 16:00'
  },
  {
    nameOfDay: 'FRIDAY',
    hours: '8:00 - 16:00'
  },
  {
    nameOfDay: 'SATURDAY / SUNDAY',
    hours: 'CLOSED'
  }
]

export const OpeningOurs = (props: openingOursProps): React.JSX.Element => {
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
          spacing={'30px'}
        >
          <Grid
            item
            xs={12}
            sm={6}
          >
            <Typography
              variant={'body1'}
              color={theme.palette.text.secondary}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a e 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
          >
            <Box
              borderRadius={theme.shape.borderRadius}
              sx={{
                border: '2px solid #A27B5C',
                padding: '10px 0px',
                width: '100%',
                [theme.breakpoints.up('md')]: {
                  padding: '20px 0px'
                }
              }}
            >
              <Typography
                variant={'h3'}
                fontWeight={theme.typography.fontWeightBold}
                sx={{
                  textAlign: 'center',
                  marginBottom: '10px',
                  padding: '10px 10px'
                }}
              >
                OPENING HOURS
              </Typography>
              <Grid
                container
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                >
                  <List
                    sx={{
                      paddingTop: '0px',
                      paddingBottom: '0px'
                    }}
                  >
                    {
                  openingHoursArray.map((day) => {
                    const {
                      nameOfDay,
                      hours
                    } = day
                    return (
                      <ListItem
                        key={nameOfDay}
                      >
                        <ListItemText
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: theme.typography.fontWeightMedium
                            }
                          }}
                          primary={nameOfDay}
                        />
                        <ListItemText
                          sx={{
                            '& .MuiTypography-root': {
                              fontWeight: theme.typography.fontWeightMedium
                            },
                            textAlign: 'end'
                          }}
                          primary={hours}
                        />
                      </ListItem>
                    )
                  })
                    }
                  </List>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default OpeningOurs
