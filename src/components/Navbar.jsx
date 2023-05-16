import React from 'react'
import { AppBar,   Avatar,   Button,   Divider,  Toolbar, Typography } from '@mui/material'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom'
import Form from './Form';
import Home from './Home';


function Navbar() {
  return (
    <div>
        <AppBar style={{backgroundColor:' #800080'}} position="static">
            <Toolbar>
                <Avatar  sxx={{flexGrow:1}} sx={{ bgcolor: '#ffff80'[500] }}>B</Avatar>
                <Avatar  sxx={{flexGrow:1}} sx={{ bgcolor: "#ffff80"[500] }}>L</Avatar>
                <Avatar sxx={{flexGrow:1}} sx={{ bgcolor: "#ffff80"[500] }}>O</Avatar>
                <Avatar  sxx={{flexGrow:1}} sx={{ bgcolor: "#ffff80"[500] }}>G</Avatar>
            <Link to={"/"} style={{ color:'white', textDecoration:'none',margin:2 }}  >
                <Button style={{color:"white"}}> Home</Button>
                </Link>
              <div style={{ marginLeft:"70%" }} >
                <Link to={'/form'} style={{ textDecoration:'none',marginLeft:"100%" }} >
                  <Button variant='filled' style={{ color:"white" }} >Form</Button>
                </Link>
              </div>
            </Toolbar>
        </AppBar>
        <br /><br /><br /><br />
        <Routes>
            <Route path='/form' element={<Form/>}></Route>
            <Route path='/' element={<Home/>} />
        </Routes>


    </div>
  )
}


export default Navbar