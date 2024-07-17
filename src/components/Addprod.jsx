import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const Addprod = () => {
  return (
    <div>
         <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
    <TextField id="outlined-basic" label="Product Name" variant="outlined" />
    </div>
    <div>
    <TextField id="filled-basic" label="Image" variant="filled" />
    </div>
    <div>
    <TextField id="standard-basic" label="Price" variant="standard" />
    </div>
    <div>
    <TextField id="standard-basic" label="Category" variant="standard" />
    </div>
    <div>
      <Button variant='outlined'>Search</Button>
    </div>
  </Box>
  </div>
  )
}

export default Addprod