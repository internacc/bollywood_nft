import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'yellow',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:'0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));
  const ItemTop = styled(Item)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'green',
    ...theme.typography.body2,
    padding: '3%',
    textAlign: 'center',
    color: '#fff',
    margin: '0%'
  }));
  const ItemContent = styled(Item)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'orange',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:'0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2%'
  }));


const NFT = () => {
    return ( <div>
        <Box sx={{ flexGrow: 0 , display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Grid container spacing={0}>
        <Grid item xs={6} md={12}>
          <ItemTop><Typography variant='h3'>BUY NFT</Typography></ItemTop>
        </Grid>
        <Grid item xs={6} md={12}>
          <Item sx={{height: '75vh'}}>
              <ItemContent sx={{height: '50vh', width: '20vw', marginTop: '-5%'}}>

              </ItemContent>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div> );
}
 
export default NFT;