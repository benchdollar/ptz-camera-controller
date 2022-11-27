import React from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import './App.css';


function App() {
  return (
    <div className="App">
      <Drawer variant="permanent" anchor="right">
        <Box className="Sidebar">
        <IconButton color="primary" aria-label="Settings Menu">
          <SettingsIcon/>
        </IconButton>
        </Box>
      </Drawer>
      <div className="PresetButton">Preset 1</div>
      <div className="PresetButton">Preset 2</div>
      <div className="PresetButton">Preset 3</div>
      <div className="PresetButton">Preset 4</div>
      <div className="PresetButton">Preset 5</div>
    </div>
  );
}

export default App;
