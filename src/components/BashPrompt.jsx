import { Typewriter } from 'react-simple-typewriter';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';

import '../App.css';

function BashPrompt() {
  useEffect(() => {
    setTimeout(() => {
      setFirstLineDone(true);
    }, 2000);
  }, []);

  const [firstLineDone, setFirstLineDone] = useState(false);

  return (
    <div className="bash">
      <Stack direction='row'>
        <>{'~$ '}</>
        <Typewriter words = {['whoami']}
        typeSpeed={130}
        cursor={!firstLineDone}
        cursorBlinking/>
      </Stack>
    </div>
  );
}

export default BashPrompt;
