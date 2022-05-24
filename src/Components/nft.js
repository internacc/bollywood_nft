import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import datas from '.././data/nft_content.json';
import '.././styles/nft.css';
import FAQ from './faq';
import Roadmap from './roadmap';
import Team from './team';
import AOS from "aos";
import "aos/dist/aos.css";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'yellow',
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
    backgroundColor: '#FFEF82',
    ...theme.typography.body2,
    padding: '3%',
    textAlign: 'center',
    color: '#fff',
    margin: '2%',
    flexDirection: 'column',
    borderRadius: '10px',
    width: '90vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between'
  }));
  const ItemTop2 = styled(Item)(({ theme }) => ({
    backgroundColor: '#fff',
    // ...theme.typography.body2,
    // padding: '2%',
    textAlign: 'center',
    color: '#fff',
    margin: '2%',
    // flexDirection: 'column',
    borderRadius: '10px',
    width: '90vw',
    height: '80vh',
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }));
  // const Image=styled(Paper)(({ theme }) => ({
  //   display: 'flex',
  //   alignItems:'flex-end',
  //   justifyContent: 'flex-end',
  //   flexDirection: 'column'
  // }));

  const ItemContent = styled(Item)(({ theme }) => ({
    backgroundColor: '#f3f7f8',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '2%',
    padding: '1%',
    margin: '0% 0% 1.5% 2%'
  }));
  const Styledbtn = styled(Button)(({ theme }) => ({
    background: '#EFD345',
    height: '60px',
    width: '200px', 
    fontSize: '1.1rem',
    '&:hover':{backgroundColor: '#82954B', color: '#EFD345'},
    color: '#171620',
    marginRight: '20px'
  }));


const NFT = () => {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return ( <div data-aos="fade up" data-aos-duration="12000">
        <Box sx={{ flexGrow: 1 }}>
        <Grid item xs={12} md={12}>
        <ItemTop>
        <Typography sx={{fontSize: '4.5rem', fontWeight: '800', color:'#171620', fontFamily: 'Work Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'}}>BUY NFT</Typography>
          <ItemTop2>
          <ItemContent sx={{height: '70vh', width: '60vw', marginTop: '20px'}}>
          <Styledbtn variant="contained" endIcon={<SendIcon />} size="large" className='btn'><a href="https://opensea.io/" target="_blank" color="#171620" rel="noreferrer">
          Mint NFT</a>
      </Styledbtn>
          <Styledbtn variant="contained" endIcon={<SendIcon />} size="medium" sx={{ marginLeft: '20px', 
          }} className='btn'><a href="https://search.brave.com/search?q=how+to+mint+nft&source=desktop" target="_blank" color="#171620" rel="noreferrer">
        Opensea</a>
      </Styledbtn>
      
      {datas.map((data)=>(
        <Typography width="50%" align="justify" color="#171620" fontSize='1.25rem'>
        {data.info}
        </Typography>
      ))}
          </ItemContent>
          {/* As the css property for the <img> was not working so I have used the inline css here */}        
          <div className='images1'>
          <img src="reel1.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel2.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel3.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel4.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel5.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel6.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>    
          <img src="reel7.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel8.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel9.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel10.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          <img src="reel11.png" alt='not available' height="220px" width="180px" margin-top="5px" border-radius="20px"></img>
          </div>
          </ItemTop2>
          
          </ItemTop>
        </Grid>
      
    </Box>
    <Roadmap />
    <FAQ />
    <Team />
    </div> );
}
 
export default NFT;