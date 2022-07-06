import './App.css';
import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component"
import ErrorPage from "./pages/ErrorPage/ErrorPage.component"
import NavigationBar from "./pages/navigationbar/navigationbar.comonenet"
import SignIn from "./pages/sign-In/sign-In.componenet"

import { BrowserRouter, Route, Routes } from 'react-router-dom'


const HatsPage = () => (
  <div>
    <h1>
      Hats Page
    </h1>
  </div>
);


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/hats' element={<HatsPage />} />
          <Route path="/Sign-In" element={<SignIn />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
