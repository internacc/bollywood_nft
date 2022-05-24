import '../styles/App.css';
import Mainpg from './maingpg';
import Team from './team'
import { Routes, Route} from "react-router-dom";
import NFT from './nft';
import Roadmap from './roadmap';
import FAQ from './faq';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpg />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/team" element={<Team />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="faq" element={<FAQ/>} />
      </Routes>
      
    </div>
  );
}

export default App;
