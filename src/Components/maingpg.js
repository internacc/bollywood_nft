import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../styles/main.css';
import { Link } from 'react-router-dom';

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
  marginRight: '20%',
  fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  fontWeight: '900',
  fontSize: '30px'
}));
const Btn = styled(Button)(({theme})=>({
  padding: '2% 12%', 
  background: '#A25B5B', 
  '&:hover':{
    background: '#CC9C75'
  }
}))
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#D5D8B5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    display : 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.secondary,
    opacity: 1,
  }));
const Item3 = styled(Item)(({theme})=>({
  height: '150vh', 
  background: '#000000',
  color: '#fff',
  display: 'flex', 
  flexDirection: 'column',
  overflow: 'hidden',
  borderStyle: 'dashed',
  borderColor: '#A9A9A9',
  borderWidth: '25px',
  borderBottom: '0px',
  borderTop: '0px',
}))
const Mainpg = () => {
      return ( <div className='entry'>
      <Box classname="box" sx={{ flexGrow: 1}}>
      <Grid container spacing={1} sx={{display: 'flex', justifyContent :'space-between', background: '#000000'}}>
        <Grid item xs={12} md={3} sx={{overflow: 'hidden'}}>
          <Item3 className='animate' sx={{margin: '-2%'}}>
              <img src='reel_1.png' alt="not availble" opacity="0.6"></img>
              <img src='reel_2.png' alt="not availble" opacity="0.6"></img>
              <img src='reel_3.png' alt="not availble" opacity="0.6"></img>
              <img src='reel_4.png' alt="not availble" opacity="0.6"></img>
              <img src='reel_5.png' alt="not availble" opacity="0.6"></img>
          </Item3>
        </Grid>
        <Grid item xs={12} md={9}> 
        
        <Item sx={{ justifyContent: 'space-between', position: 'absolute', zIndex: '2', width: '60vw',margin: '35% 0% 0% 7%'}}>
          <Typography variant='h4' sx={{textAlign: 'center', marginRight: '5rem', color: '#CC9C75', fontWeight: '700', fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>ENTER THE WORLD OF BOLLYWOOD MAGIC!</Typography>
          <Btn variant='contained' ><Link to="/nft"><Typo variant='h5'>ENTER</Typo></Link><KeyboardDoubleArrowDownIcon size='large'/></Btn>
        </Item>
        <img src="bg_img.png" alt="not avaialble" width="100%" className='bgimg'></img>
        </Grid>
      </Grid>
    </Box>

    </div> );
}
 
export default Mainpg;