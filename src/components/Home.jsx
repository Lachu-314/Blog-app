import React from 'react'
import { AppBar,   Avatar,   Button,   Divider,  Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom'

const Home = () => {
    var[blogs,setBlogs] = useState([])
  useEffect(()=> {axios.get('https://jsonplaceholder.typicode.com/posts')
  .then((responce)=>{
    console.log(responce.blog)
    setBlogs(responce.data)
  })
    .catch((err)=>console.log(err))},[]);

  return (
    <div>
        <Typography variant='body1' style={{ color: '#800080', fontSize: '50px', fontWeight: 'bold' ,  fontFamily: 'Dancing Script, cursive'}}>REACT BLOGS</Typography>
            <br /><br />
          <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 4,
            width: 228,
            height: 228,
            },
        }}>
      

      {/* mapping */}
      {blogs.map((value,index)=>{
        return(
  
          <Paper  key={index}  style={{ backgroundColor: '#ffe6ff', height:'fit-content' }}>
            <Typography style={{ fontSize:"20px", fontWeight:'bolder' }} > { value.title } </Typography>
            <Divider />
            <br />
            <Typography>{value.body}</Typography>
          </Paper >
        
        )
      })}

      </Box>
    </div>
  )
}

export default Home