import React from 'react';
import Button from '@mui/material/Button';
import '../../styles/main.css';
export default function Panel() {
  const panel_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      {panel_array.map(btn => (
        <div className='button-group' style={{ display: 'inline-block', flexDirection: 'row' }}>
          <Button variant="outlined" color="primary" sx={{
            width: 90,
            height: 90,
            display: "block",
            borderRadius: "50%",
            mr: 2
          }}>
            {btn}
          </Button>
        </div>
      ))}
    </div>
  )
}