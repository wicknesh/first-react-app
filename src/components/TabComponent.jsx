import { Button, Typography } from "@mui/material"
import { useState } from "react"

const TabComponent = () => {
  var [name, setName] = useState('Home');

  const changeNameToHome = () => {
    setName('Home')
  }

  const changeNameToGallery = () => {
    setName("Gallery");
  }

  

  return (
    <div>
      <Typography variant="h3">Welcome to {name}</Typography>
      <Button variant="contained" onClick={changeNameToHome}>Home</Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={changeNameToGallery}>Gallery</Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={() => {setName("Contact")}}>Contact</Button>&nbsp;&nbsp;
    </div>
  )
}

export default TabComponent