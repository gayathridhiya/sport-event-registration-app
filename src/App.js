import logo from './logo.svg';
import './App.css';
import GlobalNavBarComponent from './components/GlobalNavBarComponent';
import NavBarComponent from './components/NavBarComponent';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalNavBarComponent />
      {/* <NavBarComponent/> */}

      <BrowserRouter>



        <Routes>
          {/* <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} /> 
            */}
          <Route exact path="/home" element={<GlobalNavBarComponent />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
