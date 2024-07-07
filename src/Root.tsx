import { Route, HashRouter, Routes, Navigate } from 'react-router-dom';

import { App } from './App';
import {
  HomePage,
  LoginPage,
  ServicesPage,
  NotFoundPage,
  ContactPage,
  AboutPage,
  SpecialistsPage,
  ItemSpecialistPage,
} from './pages';

export const Root = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />

        <Route path="specialists">
          <Route index element={<SpecialistsPage />} />
          <Route path=":specialistId" element={<ItemSpecialistPage />} />
        </Route>

        <Route path="services" element={<ServicesPage />} />

        <Route path="about" element={<AboutPage />} />

        <Route path="contact" element={<ContactPage />} />

        <Route path="login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </HashRouter>
);
