import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
    
export default function Navbar() {
  return (
    <>
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{marginRight:'10px'}}>
          iList    
        </Typography>
      </Toolbar>
    </AppBar>
    </>
  )
}
