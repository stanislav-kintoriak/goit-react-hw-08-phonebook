import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
