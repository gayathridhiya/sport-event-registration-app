
import React, { lazy, Suspense } from 'react';
import NavBarComponent from './components/NavComponent/NavBarComponent';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const EventHome = lazy(() => import('./components/EventHome/EventHome'));
const ThankYou = lazy(() => import('./components/ThankYou/ThankYou'));

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarComponent/>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element= {<EventHome/>}/>
          <Route exact path="/thank-you" element= {<ThankYou/>}/>
        </Routes>
      </Suspense>

      </BrowserRouter>
    </>
  );
}

export default App;
