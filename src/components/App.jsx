import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

import { lazy } from 'react';

const HomePage = lazy(()=>import('pages/HomePage'))
const ContactsPage = lazy(()=>import('pages/ContactsPage'))
const RegistrationPage = lazy(()=>import('pages/RegistrationPage'))
const LoginPage = lazy(()=>import('pages/LoginPage'))


export const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route
        path="/contacts"
        element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
        }
      />
    </Route>
  </Routes>
  );
};


