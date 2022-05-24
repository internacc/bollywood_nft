import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
// import Check from '@mui/icons-material/Check';
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box } from '@mui/system';
import {Paper, Typography } from '@mui/material';
import '../styles/roadmap.css';
import AOS from "aos";
import "aos/dist/aos.css";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
        '#00d97e',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:
        '#00d97e',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 4,
    border: 0,
    borderRadius: 1,
    marginTop: 0,
    marginLeft: 15,
    marginRight: 15
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  zIndex: 1,
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50px',
  borderWidth: '100px',
  borderColor: '#00d97e',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.completed && {
    backgroundColor:
      '#00d80e',
  }),
}));
// {/*Taken from stepper in material ui*/}
function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  // const icons = {
    
  // };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ['NFT', 'Access to Bollywood events', 'Exclusive', 'Ongoing','Bye','See You Soon'];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.h1,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Roadmap() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div data-aos="zoom-in" data-aos-duration="28000">
    <Box sx={{ width: '97%', background: 'fff', height: '60vh', marginTop: '2%', marginLeft: '2%'}}>
    <Item sx={{background: '#b5f2ff', color: '#171620', borderRadius: '10px'}}>
         <Typography sx={{fontSize: '4.5rem', fontWeight: '900', lineHeight: '10rem', fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>Roadmap</Typography>
         <Item sx={{margin: '20px 20px', borderRadius: '20px'}}>
         <Stack sx={{ width: '100%', marginTop: '5%', display: 'flex', alignItems: 'space-between', justifyContent: 'center'}} >
      <Stepper alternativeLabel activeStep={6} connector={<ColorlibConnector />} >
        {steps.map((label) => (
          <Step key={label.id}>
            <StepLabel StepIconComponent={ColorlibStepIcon}><Typography variant='h3' sx={{fontSize: '1.5rem',fontWeight: '400',fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>{label}</Typography></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
    </Item>
    </Item>
    
    {/* <img src='cloud.jpg' alt='not available'></img> */}
    </Box>
    </div>
  );
}
