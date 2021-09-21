import WelcomeComp from './Welcome';
import ServiceComp from './Service';
import ProfileComp from './Profile';

function HomeComp() {
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