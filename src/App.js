import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './containers/Root';
import ProductsPage from './containers/Products';
import FavoritesPage from './containers/Favorites';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <ProductsPage />,
      },
      {
        path: 'favorites',
        element: <FavoritesPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
