import HomePage from './modules/pages/HomePage';
import LoginPage from './modules/pages/LoginPage';
import SearchPage from './modules/pages/SearchPage';
import InsertPage from './modules/pages/InsertPage';
import RegisterPage from './modules/pages/RegisterPage';

const ApplicationRoutes = {
        Routes: [
            { path: '/', exact: true, component: HomePage },
            { path: '/login', exact: true, component: LoginPage },
            { path: '/home', exact: true, component: HomePage },
            { path: '/search', exact: true, component: SearchPage },
            { path: '/insert', exact: true, component: InsertPage },
            { path: '/register', exact: true, component: RegisterPage },
        ]
};

export default ApplicationRoutes;