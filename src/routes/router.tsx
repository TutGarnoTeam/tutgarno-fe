import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout/Layout.tsx';
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ServicesPage,
  SpecialistsPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFoundPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/services',
        element: <ServicesPage />,
      },
      {
        path: '/specialists',
        element: <SpecialistsPage />,
      },
      {
        path: '/contacts',
        element: <ContactPage />,
      },
    ],
  },
], {basename: '/tutgarno-fe'});

export { router };
