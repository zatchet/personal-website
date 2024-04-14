import { Typewriter } from 'react-simple-typewriter';
import Stack from '@mui/material/Stack';
import Text from '@mui/material/Typography';
import { useState, useEffect } from 'react';
//import Card from '@mui/material/Card';

import './App.css';
import BashPrompt from './components/BashPrompt';
import MyCard from './components/MyCard';


function App() {
  return (
    <>
      <BashPrompt/>
      <MyCard title="Title" body="Body"/>
    </>
  );
}

export default App;
