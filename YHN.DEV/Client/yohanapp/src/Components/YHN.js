
import { Route, Switch, Link } from "react-router-dom";
import MainPageComp from './Mainpage';
import MainPageHEComp from './HEcomps/MainpageHE';
import LanguageSelectorComp from "./LanguageSelector";


function YHNComp() {
  

  return (
    <div className="App">

      <Link to="/en"></Link>
      <Link to="/he"></Link>

      <Switch>
       <Route exact path="/" component={LanguageSelectorComp} />
        <Route path="/en" component={MainPageComp} />
        <Route path="/he" component={MainPageHEComp} />
      </Switch>

    </div>
  );
}

export default YHNComp;