import { Box, Button, TextField } from '@mui/material'
import '../App.css'
import TableMap from './TableMap'

const Signup = () => {
  const data = [{name: 'Vignesh', place: 'TVM'}];
  return (
    <div className='form'>
      <Box component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
          />
          <TextField
            id="outlined-disabled"
            label="Place"
          />
        </div>
        <div> 
          <TextField
            id="outlined-disabled"
            label="Username"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </div>
        <Button variant="contained">Signup</Button>
        <TableMap rows={data}/>
      </Box>
    </div>
  )
}

export default Signup