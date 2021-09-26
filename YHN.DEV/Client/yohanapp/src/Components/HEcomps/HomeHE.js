import WelcomeHEComp from './WelcomeHE';
import ServiceHEComp from './ServiceHE';
import ContactHEComp from './ContactHE';

function HomeHEComp() {

    return (
      <div className="App">

          <WelcomeHEComp />

          <ServiceHEComp />

          <ContactHEComp />

      </div>
    );
  }
  
  export default HomeHEComp;