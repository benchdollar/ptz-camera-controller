import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import './App.css';
import PresetBox from './components/PresetBox';


const cameraPresets = Array.of("1", "2", "3", "4", "5");


function App() {
  return (
    <Box className="App">
      <Stack className="PresetStack" direction={"row"} spacing={2}>
        {cameraPresets.map( element => {
          return <PresetBox title={"Preset " + element} key={element} />
        })}
      </Stack>
      <Box className='MenuBar'>
        <IconButton color='primary' aria-label='Settings Menu'><SettingsIcon/></IconButton>
      </Box>
    </Box>
  );
}

export default App;
