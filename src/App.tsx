import React from 'react';
import { Header } from './components/Header/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { DetailsPage } from './pages/DetailsPage/DetailsPage';

const App:React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<AboutPage/>} path='/about'/>
        <Route element={<DetailsPage/>} path='/details/:id'/>
      </Routes>
    </Router>
  );
}

export default App;
