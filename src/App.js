import './App.css';
import NavBarComponent from './components/NavComponent/NavBarComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHome from './components/EventHome/EventHome';
import ThankYou from './components/ThankYou/ThankYou';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route exact path="/" element= {<EventHome/>}/>
          <Route exact path="/thank-you" element= {<ThankYou/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
