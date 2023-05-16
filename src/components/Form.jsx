import { Button, Divider, TextField, Typography } from '@mui/material'
import React from 'react'

export default function Form() {
  return (
    <div>
        
            <Typography style={{ color: '#800080', fontSize: '50px', fontWeight: 'bold' ,  fontFamily: 'Dancing Script, cursive'}}>Add Blogs</Typography>
            <Divider/>
            <TextField variant='outlined' label='AuthorName'></TextField>
            <br /><br />
            <TextField variant='outlined' label= "BlogName"></TextField>
            <br /><br />
            <TextField variant='outlined' label= 'Discription'></TextField>
            <br /><br />
            <Button variant='contained' style={{ background:'#800080' }} >Submit</Button>
       
    </div>
  )
}
