import Album from "../components/Album";
import Profile from "../components/Profile";
import DashboardLayout from "../components/DashboardLayout";
import MainLayout from "../components/MainLayout";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <Album /> },
      { path: 'products', element: <Profile /> },
      /*{ path: '*', element: <Navigate to="/404" /> }*/
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      /*{ path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }*/
    ]
  }
];

export default routes;
