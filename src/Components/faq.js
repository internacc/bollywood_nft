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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: '3rem'
  }));
const Accordion = styled((props) => (
    <MuiAccordion elevation={0} {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '3rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(5),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    
  }));

const FAQ = () => {
    const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
    return ( <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Item sx={{width: '100vw', height: '20vh', background: 'yellow'}}><Typography variant="h3" sx={{marginTop: '1.8%'}}>FAQ</Typography></Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{width: '100vw', height: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{height: '100%', textAlign:'center'}}>
        <AccordionSummary id="panel1d-header">
          <Typography sx={{fontSize: '3rem', padding: '2rem'}}>QUESTION 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize: '1.5rem', alignContent: 'left', textAlign: 'left'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{height: '100%'}}>
        <AccordionSummary id="panel2d-header">
          <Typography sx={{fontSize: '3rem', padding: '2rem' }}>QUESTION 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize: '1.5rem', textAlign: 'left'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{height: '100%'}}>
        <AccordionSummary id="panel3d-header" sx={{}}>
          <Typography sx={{fontSize: '3rem', padding: '2rem'}}>QUESTION 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontSize: '1.5rem', textAlign: 'left'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Item>
        </Grid>
        </Grid>
        </Box>
        
    </div> );
}
 
export default FAQ;