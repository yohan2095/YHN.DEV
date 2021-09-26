import WelcomeComp from './Welcome';
import ServiceComp from './Service';
import ContactComp from './Contact';

function HomeComp() {
    return (
      <div className="App">

          <WelcomeComp />

          <ServiceComp />

          <ContactComp />

      </div>
    );
  }
  
  export default HomeComp;