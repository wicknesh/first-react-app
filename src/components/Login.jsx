import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'


const Login = () => {
    return (
        <div>
            <TextField variant='outlined' label='Username'/>
            <br />
            <br />
            <TextField variant='outlined' label='Password' type='password'/>
            <br />
            <br />
            <Button variant="contained" color='success'>Login</Button>
        </div>
    )
}

export default Login