import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import datas from '.././data/team.json';
import '../styles/team.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.h4,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }));
  const Cardcomp = styled(Item)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.h4,
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  }));
const Heading = styled(Item)(({ theme }) => ({
  height: '15%', 
  paddingTop: '2%',
  width: '100%', 
  background: '#fff', 
  fontSize: '4.5rem', 
  fontFamily:'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
  fontWeight: '900',
  color: '#171620'
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
const Team = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return ( <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={12}>
          <Item sx={{height: '100vh', flexDirection :'column'}}>
              <Heading>Team</Heading>
              <Item className='content' sx={{height: '100%', width: '100%', background : '#f3f7f8', display: 'flex', flexDirection: 'row'}}>
                {datas.map((data)=>(
                  <Cardcomp key={data.id}>
                  <div data-aos="zoom-in-up" >
                  <img src={`${data.img}`} className="data" alt="not available"></img>
                  </div>
                  <Typography sx={{fontSize:'1.25rem',color: '#171620', lineHeight: '1.75rem',marginTop: '10%',fontWeight: '900',fontFamily:' Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>{data.name}</Typography>
                  <Typography sx={{fontSize:'1.25rem',color: '#171620', lineHeight: '1.75rem',fontFamily:' Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>{data.twitter}</Typography>
                </Cardcomp>
                ))}
              </Item>
          </Item>
        </Grid>
        </Grid>
    </Box>
    </div> );
}
 
export default Team;