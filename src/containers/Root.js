import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from '../components/Nav/Navigation';

function RootLayout() {
  return (
    <Fragment>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default RootLayout;
