import WelcomeHEComp from './WelcomeHE';
import ProfileHEComp from './ProfileHE';
import ServiceHEComp from './ServiceHE';

function HomeHEComp() {

    return (
      <div className="App">

          <WelcomeHEComp />

          <br></br><br/>

          <ProfileHEComp />

          <ServiceHEComp />

      </div>
    );
  }
  
  export default HomeHEComp;