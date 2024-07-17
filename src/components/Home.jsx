import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const Home = () => {
  const [data,setData]=useState([])
  useEffect(()=>{

    axios.get ('https://fakestoreapi.com/products').then((res)=>{
      setData(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })
  return (
    <div>
      {
        data.map((item)=>(
          <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography textAlign={'left'}>
             Title       :{item.title}
            </Typography>
            <Typography textAlign={'left'}>
             Price:{item.price}
            </Typography>
            <Typography textAlign={'left'}>
             Category:{item.category}
            </Typography>
            <Typography >
             <img src={item.image} alt="No Image" />{item.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
  
        ))
      }
        
    </div>
  )
}

export default Home