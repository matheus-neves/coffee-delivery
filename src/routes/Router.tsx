import { Checkout } from '@pages/Checkout';
import { Home } from '@pages/Home';
import { DefaultLayout } from '@src/layouts/DefaultLayout';
import { Success } from '@src/pages/Success';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'checkout',
        element: <Checkout />
      },
      {
        path: 'checkout/success',
        element: <Success />
      }
    ]
  }
];

export const router = createBrowserRouter(routes);
