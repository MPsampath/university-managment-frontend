import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/components/ProtectedRoute';

const App = () => {
    return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              {/* Default route */}
              <Route path="/" element={<Login />} />
          </Routes>
      </Router>
    );
};

export default App;
