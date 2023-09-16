import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import './App.css';
import PresetBox from './components/PresetBox';
import Preset from './model/Preset';


const cameraPresets: Preset[] = new Array<Preset>();
cameraPresets.push(new Preset(1, "Totale"));
cameraPresets.push(new Preset(2, "Speaker"));
cameraPresets.push(new Preset(3, "Speaker + Reader"));
cameraPresets.push(new Preset(4, "Reader"));
cameraPresets.push(new Preset(5, "Table"));


function App() {
  return (
    <Box className="App">
      <Stack className="PresetStack" direction={"row"} spacing={1}>
        {cameraPresets.map( (preset, index) => {
          return <PresetBox preset={preset} key={index} />
        })}
      </Stack>
      <Box className='MenuBar'>
        <IconButton color='primary' aria-label='Settings Menu'><SettingsIcon/></IconButton>
      </Box>
    </Box>
  );
}

export default App;
