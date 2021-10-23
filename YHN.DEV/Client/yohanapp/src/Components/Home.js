import ServiceComp from './Service';
import ContactComp from './Contact';

function HomeComp() {
    return (
      <div className="App">
          <ServiceComp />


          <ContactComp />

      </div>
    );
  }
  
  export default HomeComp;