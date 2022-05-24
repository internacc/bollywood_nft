import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) =>
    createStyles({
        btn_prop:{
            
        },
        icon_prop:{
            height: '3rem',
            width: '3rem'
        },
        btn_disp:{
            display:'flex',
            alignItems: 'center',
            justifyContent:'space-around'
        },
        comp_disp:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'space-between'
        }
    }),
);
const Btn_prop = styled(Button)(({ theme }) => ({
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '2px solid #3F0071',
    width: '100%',
    '&:hover':{
    background: '#3F0071'
    }
  }));
const Comp1 = () => {
    return ( <div>
        <Box sx={{flexGrow: 1}}>
            <div className={classes1.comp_disp}>
                <div className='part1'>
            <Typography variant="h3" component="div" gutterBottom sx={{ color: '#FFA900' }}>
                <strong>DARE TO ENTER</strong>
            </Typography>
            <Btn_prop className='btn_prop'>
                <Typography variant="h5" component="div">
                JOIN OUR DISCORD
                </Typography>
            </Btn_prop></div>
            
            </div>
        </Box>
    </div>);
}
 
export default Comp1;