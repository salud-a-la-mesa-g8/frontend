//React-Router

import InicioSitio from '../components/InicioSitio';
import MostrarProductos from '../Productos';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
//const InicioSitio = lazy(() => import('../components/InicioSitio'));
//const MostrarProductos = lazy(() => import('../Productos'));

// const AsesoríaNutricional = Loadable(lazy(() => import('views/servicios/AsesoríaNutricional')));
// const CreaHuerta = Loadable(lazy(() => import('views/servicios/CreaHuerta')));
// const NoticiasRecetas = Loadable(lazy(() => import('views/servicios/NoticiasRecetas')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <InicioSitio />,
    children: [
        {
            path: '/productos',
            element: <MostrarProductos />
        },
        {
            path: '/Noticias',
            element: <MostrarProductos />
        },
    ]
};

export default MainRoutes;
