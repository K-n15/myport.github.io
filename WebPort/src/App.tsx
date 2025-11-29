import { useState } from "react";
import TopNav from "./components/TopNav/TopNav";
import SidePanel from "./components/SidePanel/SidePanel";
import Contents from './components/ContentBox/ContentBox';
import myLogo from './components/Logo.png';
import data from './Data/accomplishment.json';
import './App.css';

function App(){
  const [sideActive, toggleSidePanel] = useState(false);

  const word = "Hardworking and enthusiastic college student working towards a B.S. in Marketing. Seeking to use my superior knowledge of social media marketing and my advanced communication skills to effectively serve your company in an internship position. Dedicated and committed to becoming a dependable and valuable team member.";

  return (
      <>
        <div className="background">
          <TopNav title="Experience and Achievement" type='Portfolio' isActive={sideActive}/>
          <div className="detail">
            <SidePanel isActive={sideActive} toggle={()=>toggleSidePanel(!sideActive)}/>
            <div className="port">
              <Contents img={myLogo} heads={'Forensic'} description={word} isActive={sideActive}/>
              <Contents img={myLogo} heads={'Forensic'} description={word} isActive={sideActive}/>
              <Contents img={myLogo} heads={'Forensic'} description={word} isActive={sideActive}/>
              <Contents img={myLogo} heads={'Forensic'} description={word} isActive={sideActive}/>
            </div>
          </div>
        </div>
      </>
    );
}

export default App;