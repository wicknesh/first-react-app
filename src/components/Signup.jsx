import { Button, TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <br />
        <br />
        <TextField variant='outlined' label='Name'/>
        <br />
        <br />
        <TextField variant='outlined' label='Age' type='number'/>
        <br />
        <br />
        <TextField variant='outlined' label='Place'/>
        <br />
        <br />
        <TextField variant='outlined' label='Father&#39;s Name'/>
        <br />
        <br />
        <TextField variant='outlined' label='Mother&#39;s Name'/>
        <br />
        <br />
        <Button variant="contained" color='error'>Signup</Button>
    </div>
  )
}

export default Signup