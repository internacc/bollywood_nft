import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import datas from '../data/faq.json';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#d8baff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '3rem'
  }));
const Item2 = styled(Item)(({ theme }) => ({
  width: '98vw',
  height: '30vh',
  display: 'flex',
  alignItems: 'center', 
  justifyContent: 'center', 
  flexDirection: 'column', 
  marginTop: '0', 
  marginBottom: '0', 
  paddingLeft: '0%', 
  border: '0px',
}));
const Accordion = styled((props) => (
    <MuiAccordion elevation={0} {...props} />
  ))(({ theme }) => ({
    
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    height: '100%'
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '3rem'}} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:'#d8baff',
    flexDirection: 'row-reverse',
    
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
      color: '#171620'
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(4),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    background: '#d8baff',
    height: '100%'
  }));

const FAQ = () => {
    const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return ( <div>
        <Box sx={{ flexGrow: 1, boxSizing: 'border-box'}}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Item sx={{width: '100%', height: '100%', background: '#d8baff'}}><Typography variant="h1" sx={{marginTop: '20px', color: '#171620', fontSize:'4.5rem', fontWeight: '900', fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>FAQ</Typography>
            {datas.map((data)=>(
              <div>
                <Item2 sx={{}}>
              <Accordion expanded={expanded === `${data.panel}`} onChange={handleChange(`${data.panel}`)} sx={{height: '100%', textAlign:'center', margin: '0', backgroundColor: '#d8baff'}}>
              <AccordionSummary>
                <Typography sx={{fontSize: '3rem', color:'#171620', fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif', fontWeight: '800'}}>Question {data.no}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{fontSize: '1.5rem', alignContent: 'left', textAlign: 'left', color: '#171620', fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>
                  {data.ans}
                </Typography>
              </AccordionDetails>
            </Accordion>
                </Item2>
                </div>
            ))}
          </Item>
        </Grid>
        </Grid>
        </Box> 
    </div> );
}
 
export default FAQ;