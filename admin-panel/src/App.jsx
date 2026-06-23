import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import BlogManagement from './pages/BlogManagement';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* Placeholder routes for other sidebar links */}
          <Route path="appointments" element={<div className="p-4">Appointments Page (Coming Soon)</div>} />
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
