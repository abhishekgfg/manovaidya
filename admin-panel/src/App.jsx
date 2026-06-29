import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import BlogManagement from './pages/BlogManagement';
import Appointments from './pages/Appointments';
import Login from './pages/Login';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          {/* Placeholder routes for other sidebar links */}
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<div className="p-4">Patients Page (Coming Soon)</div>} />
          <Route path="blog" element={<BlogManagement />} />
          <Route path="blogs" element={<Navigate to="/blog" replace />} />
          <Route path="analytics" element={<div className="p-4">Analytics (Coming Soon)</div>} />
          <Route path="settings" element={<div className="p-4">Settings (Coming Soon)</div>} />
          <Route path="*" element={<div className="p-4">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
