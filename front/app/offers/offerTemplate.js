
import * as React from 'react';


import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Grid2 } from '@mui/material';
export default function OfferTemplate(props) {


  return (

    <Paper

      sx={{
        p: 2,
        marginLeft: 2,
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: '#fff',
        marginTop: 1,

      }}
    >

      <Grid2 >
        <Grid2 direction="column" spacing={2}>
          <Grid2 >
            <Typography gutterBottom variant="subtitle1" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {props.description}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {props.amount} pcs
            </Typography>
          </Grid2>
          <Grid2>

          </Grid2>
        </Grid2>
        <Grid2 >
          <Typography variant="subtitle1" component="div">
            {props.price} €
          </Typography>
          <Typography variant="body2">
            Reserve
          </Typography>
        </Grid2>
      </Grid2>

    </Paper>
  )
};