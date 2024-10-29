import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

const StateBasics = () => {
    // var name = 'Vignesh';
    var [name, setName] = useState("Vignesh");
    var [val, setVal] = useState();
    const changeName = () => {
      setName(val);
    }

    const inputHandler = (e) => {
      setVal(e.target.value);
    }
  return (
    <div>
        <Typography variant='h3'>Hello {name}, welcome to State Basics Session</Typography>
        <br /><br />
        <TextField label='Type your name' onChange={inputHandler}></TextField>
        <br /><br />
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default StateBasics