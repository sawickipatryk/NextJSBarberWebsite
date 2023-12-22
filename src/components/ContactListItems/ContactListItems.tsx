import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import theme from '../ThemeRegistry/theme'

export const ContactListItems = (): React.JSX.Element => {
  return (
    <List
      sx={{
        maxWidth: 360,
        bgcolor: 'transparent'
      }}
    >
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <LocalPhoneIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'999-999-999'}
          secondary={'Call only in work hours'}
        />
      </ListItem>
      <Divider
        variant={'inset'}
        component={'li'}
      />
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <FmdGoodIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'STREET'}
          secondary={'99-999 WARSAW'}
        />
      </ListItem>
      <Divider
        variant={'inset'}
        component={'li'}
      />
      <ListItem
        sx={{
          padding: '40px 0px'
        }}
      >
        <ListItemIcon
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <AccessTimeIcon
            fontSize={'large'}
          />
        </ListItemIcon>
        <ListItemText
          primary={'MON - FRI 8:00 - 16:00'}
          secondary={'SAT - SUN CLOSED'}
        />
      </ListItem>
    </List>
  )
}
export default ContactListItems
