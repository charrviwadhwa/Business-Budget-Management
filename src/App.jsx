// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Approvals from './pages/Approvals';
import Department from './pages/Department';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/approvals" element={<Approvals />} />
      <Route path="/department" element={<Department />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/settings" element={<Settings />} />
      {/* <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
}

export default App;
