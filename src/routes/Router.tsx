import { Checkout } from '@pages/Checkout';
import { Home } from '@pages/Home';
import { DefaultLayout } from '@src/layouts/DefaultLayout';
import { Success } from '@src/pages/Success';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
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
]);
