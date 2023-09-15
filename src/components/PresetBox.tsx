import React from 'react';
import Box from "@mui/material/Box";

import './PresetBox.css'
import  testImage from '../assets/testimage_fullhd.gif'
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';

interface PresetBoxProps {
    title: string;
    name?: string;
    cameraPresetId?: number;
}

const PresetButton = (props: PresetBoxProps) => {
    
    return (
      <Box className="PresetBox">
        <Card raised={true}>
          <CardActionArea>
            <CardContent sx={{textAlign: 'left'}}>
              <Typography variant="h6" component="div" className="PresetTitle">
                {props.title}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              className='PresetImage'
              image={testImage}
              alt="green iguana"
              
            />
          </CardActionArea>        
        </Card>
      </Box>
    );
  }
  
  export default PresetButton;
  