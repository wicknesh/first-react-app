import { Box, Button, TextField } from '@mui/material'
import '../App.css'
import { useState } from 'react';

const Login = () => {
    var [val, setVal] = useState({});
    const inputHandler = (e) => {
        setVal({...val, [e.target.name]:e.target.value});
        console.log(val);
    }
  return (
    <div className='form'>
        <Box component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
        <div>
            <TextField
                id="outlined-disabled"
                label="Username"
                name='username'
                value={val.username}
                onChange={inputHandler}
            />
        </div>
        <div>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                value={val.password}
                name='password'
                onChange={inputHandler}
                autoComplete="current-password"
            />
        </div>
        <Button variant="contained">Login</Button>
        </Box>
    </div>
  )
}

export default Login