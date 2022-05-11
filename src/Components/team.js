import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h4,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }));

//   const Item2 = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     display: 'flex',
//     flexDirection: 
//     alignItems: 'center',
//     justifyContent: 'center'
//   }));

const members =[{
  name : 'Name',
  title : 'Title',
  link : 'twitter link'
},
{
  name : 'Name',
  title : 'Title',
  link : 'twitter link'
},
{
  name : 'Name',
  title : 'Title',
  link : 'twitter link'
},
{
  name : 'Name',
  title : 'Title',
  link : 'twitter link'
}]

const CardComp = ()=>{
  return(<div>
    <Card sx={{ width : '80%', height: '80%', marginBottom: '10%'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </div>)
}

const Team = () => {
    return ( <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Item sx={{height: '100vh', flexDirection :'column'}}>
              <Item sx={{height: '20vh', width: '100%', background: '#6FDFDF'}}>TEAM</Item>
              <Item sx={{height: '80vh', width: '100%', background : '#4E944F'}}>
                <Grid item xs={12} md={6} sx={{marginLeft: '5%', marginTop: '5%'}}>
                <CardComp />
                <CardComp />
                </Grid>
                <Grid item xs={12} md={6} sx={{marginLeft: '5%', marginTop: '5%'}}>
                <CardComp />
                <CardComp />
                </Grid>
              
              </Item>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{height: '100vh', background: 'green', color: '#fff'}}>REEL OR VIDEO</Item>
        </Grid>
        </Grid>
    </Box>
    </div> );
}
 
export default Team;