import React from 'react';
import Box from "@mui/material/Box";

import './PresetBox.css'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Preset from '../model/Preset';

interface PresetButtonProps {
  preset: Preset;
}

const PresetButton = ({preset}: PresetButtonProps) => {
    
    return (
      <Box className="PresetBox">
        <Card raised={true}>
          <CardActionArea>
            <CardContent sx={{textAlign: 'left', p:1}}>
              <Typography variant="h6" component="div" className="PresetTitle">
                {preset.getId() + ": " + preset.getTitle()}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              className='PresetImage'
              image={preset.getImage()}
              alt="green iguana"
              
            />
          </CardActionArea>        
        </Card>
      </Box>
    );
  }
  
  export default PresetButton;
  