import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../styles/main.css';

//this is the new path. The older path has changed from @mui/styles to @mui/material/styles.
//makeStyles is no longer working with react ^18.0.0
//import { styled } from '@mui/material/styles';
//documentation : https://mui.com/material-ui/customization/how-to-customize/

//@mui/styles legacy documentation : https://mui.com/system/styles/basics/
// import { styled } from '@mui/material/styles';
// const useStyles = makeStyles({
//   typ_cls: {
//     margin: '2rem'
//   },
//   btn_cls:{
//     backgroundColor: '#ffffff',
//     borderRadius:'5px solid green'
//   }
// });

const Typo = styled(Typography)(({ theme }) => ({
  marginRight: '20%'
}));
const Btn = styled(Button)(({theme})=>({
  padding: '2% 12%', 
  background: 'yellow', 
  '&:hover':{
    background: 'green'
  }
}))
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
  }));
const Item3 = styled(Item)(({theme})=>({
  height: '100vh', 
  backgroundImage: 'url(flower_bg.png)',
  // background: '#BABD42',
  color: '#fff',
  display: 'flex', 
  flexDirection: 'column',
  overflow: 'hidden',
  border: '20px dashed black',
  borderBottom: '0px',
  borderTop: '0px',
  padding: '0%',
}))
const Item2 = styled(Item)(({theme})=>({
  
    padding: '0', 
    height: '100vh',  
    backgroundImage: 'url(flower_bg.png)', 
  }
))
const Mainpg = () => {
  // const classes=useStyles();
      return ( <div className='entry'>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} sx={{display: 'flex', justifyContent :'space-around', boxSizing: 'border-box',backgroundImage: 'url(flower_bg.png)'}}>
        <Grid item xs={12} md={4}>
          <Item3>
            <div className='animate'>
              <img src='img1.jpg' alt="not availble"></img>
              <img src='img3.jpg' alt="not availble"></img>
              <img src='img2.jpg' alt="not availble"></img>
              <img src='flower_bg.png' alt="not availble"></img>
            </div>
          </Item3>
        </Grid>
        <Grid item xs={12} md={8}> 
        <Item2>
          <Item sx={{ display:'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <Typography variant='h4' sx={{textAlign: 'center', marginRight: '5rem', color: '#6FDFDF'}}>ENTER THE WORLD OF BOLLYWOOD MAGIC!</Typography>
            <Btn variant='contained' ><Typo variant='h5'>ENTER</Typo><KeyboardDoubleArrowDownIcon /></Btn>
          </Item>
        </Item2>
        </Grid>
      </Grid>
    </Box>
    </div> );
}
 
export default Mainpg;