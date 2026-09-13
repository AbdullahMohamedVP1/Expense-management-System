import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        
          <Route path="/" element={<Root />} />
          
        
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/income" 
            element={
              <ProtectedRoute>
                <Income />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/expense" 
            element={
              <ProtectedRoute>
                <Expense />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};