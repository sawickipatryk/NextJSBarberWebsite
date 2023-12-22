import React from 'react'
import { Box } from '@mui/material'

export const MapLocation = (): JSX.Element => {
  return (
    <Box>
      <iframe
        src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.46656925225!2d20.896389833416798!3d52.23303347781991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1703271818533!5m2!1spl!2spl'}
        style={{
          border: '0',
          width: '100%',
          height: '576px'
        }}
        allowFullScreen={true}
        loading={'lazy'}
        referrerPolicy={'no-referrer-when-downgrade'}
      >
      </iframe>
    </Box>
  )
}

export default MapLocation
