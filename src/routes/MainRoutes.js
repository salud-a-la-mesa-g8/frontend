import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';


// project imports
//Components
import MenuSuperior from '../components/MenuSuperior';
//import InicioSitio from '../components/InicioSitio';
//import MostrarProductos from '../Productos';

// dashboard routing
// const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const InicioSitio = lazy(() => import('../components/InicioSitio'));
const MostrarProductos = lazy(() => import('../Productos'));
// sample page routing
// const TheProducts = Loadable(lazy(() => import('views/productos')));
// // utilities routing
// const AsesoríaNutricional = Loadable(lazy(() => import('views/servicios/AsesoríaNutricional')));
// const CreaHuerta = Loadable(lazy(() => import('views/servicios/CreaHuerta')));
// const NoticiasRecetas = Loadable(lazy(() => import('views/servicios/NoticiasRecetas')));

const config = {
    // basename: only at build time to set, and Don't add '/' at end off BASENAME for breadcrumbs, also Don't put only '/' use blank('') instead,
    // like '/berry-material-react/react/default'
    basename: '/free',
    defaultPath: '/free',
    fontFamily: `'Roboto', sans-serif`,
    borderRadius: 12
};
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MenuSuperior />,
    children: [
        {
            path: '/',
            element: <InicioSitio />
        },
        {
            path: '/productos',
            element: <MostrarProductos />
        },
    ]
};

export default function ThemeRoutes() {
    return useRoutes([MainRoutes], config.basename);
}
