import './App.css';
import GlobalNavBarComponent from './components/GlobalNavBarComponent';
import NavBarComponent from './components/NavBarComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHome from './components/EventHome';
import SeletedCartComponent from './components/SeletedCartComponent';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
        <Routes>
          <Route exact path="/" element= {<EventHome/>}/>
          <Route exact path="/myEvents" element= {<SeletedCartComponent/>}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
