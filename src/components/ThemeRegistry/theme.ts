import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin']
})

const theme = createTheme({
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'

    },
    primary: {
      main: '#A27B5C'
    },
    secondary: {
      main: '#000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.5)',
      disabled: 'rgba(0, 0, 0, 0.1)'
    },
    background: {
      paper: '#D9D9D9',
      default: '#2C3639'
    }
  },
  shape: {
    borderRadius: 10
  },
  typography: {
    fontFamily: roboto.style.fontFamily
  }
})

export default theme
