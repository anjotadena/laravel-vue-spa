import Home from './components/Home';
import LoginMain from './pages/login/Main';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: LoginMain
    },
];
