import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export default function Panel() {
  //   const Button = styled.Button`
  //   && {
  //   border-radius: "50%";
  //   height: 90;
  //   width: 90;
  //   display: inline;
  //   }
  // `;

  //   const Container = styled.div`
  //   text-align: center;
  // `

  const panel_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      {panel_array.map(btn => (
        <div className='button-group'>
          <Button variant="outlined" color="primary"
            sx={{
              width: 300,
              '& .MuiButton-root': {
                borderRadius: '50%',
                display: "inline-block"
              },
            }}>
            {btn}
          </Button>
        </div>
      ))}
    </div>
  )
}