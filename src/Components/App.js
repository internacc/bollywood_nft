import '../styles/App.css';
import Mainpg from './maingpg';
import Roadmap from './roadmap';
import Team from './team'
import { Routes, Route} from "react-router-dom";
import FAQ from './faq';
import NFT from './nft';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpg />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/team" element={<Team />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/nft" element={<NFT />} />
      </Routes>
      
    </div>
  );
}

export default App;
