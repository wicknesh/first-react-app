import { Button, Typography } from "@mui/material"
import { useState } from "react";
import '../App.css'

const Counter = () => {
    var [count, setCount] = useState(0);
    var increment = () => setCount(prevcount => prevcount + 1);
    var decrement = () => setCount(prevcount => prevcount - 1);

  return ( 
    <div>
        <Typography variant="h1">{count}</Typography>
        <Button variant="contained" onClick={decrement}>-</Button>&nbsp;&nbsp;
        <Button variant="contained" onClick={increment}>+</Button>
    </div>
  )
}

export default Counter