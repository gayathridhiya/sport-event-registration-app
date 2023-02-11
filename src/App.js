import './App.css';
import GlobalNavBarComponent from './components/GlobalNavBarComponent';
import NavBarComponent from './components/NavBarComponent';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* <GlobalNavBarComponent /> */}
      <NavBarComponent/>

      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<GlobalNavBarComponent />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
