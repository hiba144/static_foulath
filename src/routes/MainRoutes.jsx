import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import AddVideo from 'pages/AddVideo';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
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
