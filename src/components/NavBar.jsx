import '../App.css'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>APP</Typography>
          <Button color="inherit"><Link to={'/'} style={{textDecoration: 'none', color: 'white'}}>Signup</Link></Button>
          <Button color="inherit"><Link to={'/l'} style={{textDecoration: 'none', color: 'white'}}>Login</Link></Button>
          <Button color="inherit"><Link to={'/t'} style={{textDecoration: 'none', color: 'white'}}>Table</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar