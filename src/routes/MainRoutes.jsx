import { lazy, useEffect } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import AddVideo from 'pages/AddVideo';
import AllVideo from 'pages/AllVideo';
import Login from 'pages/authentication/login';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page

// ==============================|| MAIN ROUTING ||============================== //

  const token = localStorage.getItem('token');
  // itha l token mawjoud f local storage ydir redirect lel dashboard w itha makan mawjoud ydir redirect lel login

const MainRoutes = {
  path: '/',
  element: token ? <Dashboard />:<Login />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'AllVideo',
      element: <AllVideo />
    },
    {
      path: 'addVideo',
      element: <AddVideo />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
  ]
};

export default MainRoutes;
