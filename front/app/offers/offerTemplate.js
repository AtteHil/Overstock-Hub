
import * as React from 'react';


import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Grid2 } from '@mui/material';
export default function OfferTemplate(){
    
    
    return(
        
        <Paper
        
      sx={{
        p: 2,
        marginLeft:2,
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
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                ID: 1030114
              </Typography>
            </Grid2>
            <Grid2>
              <Typography  variant="body2">
                Reserve
              </Typography>
            </Grid2>
          </Grid2>
          <Grid2 >
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid2>
        </Grid2>
      
    </Paper>
    )
};