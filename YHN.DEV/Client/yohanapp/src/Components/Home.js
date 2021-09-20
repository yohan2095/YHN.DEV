import { useState } from 'react';
import WelcomeComp from './Welcome';
import ServiceComp from './Service';
import ProfileComp from './Profile';

function HomeComp() {

    const [page, setPage] = useState("Home");
    return (
      <div className="App">

          <WelcomeComp />

          <br></br><br/>

          <ProfileComp />          

          <ServiceComp />

      </div>
    );
  }
  
  export default HomeComp;