import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import AuthForm from './Views/Auth/AuthForm';
import Home from './Views/Home/Home';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
const theme = createTheme();

function App() {
  const isLoggedIn = localStorage.getItem('userData');
  console.log(isLoggedIn)
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<Home />} />
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
      
    </Router>
  );
}

export default App;
