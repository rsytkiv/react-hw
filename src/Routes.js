import Cast from './components/Cast';
import Favorite from './components/Favorite';
import Login from './components/Login';
import People from './components/People';
import { LOGIN_ROUTE } from './utils/consts';
import { GENERAL_ROUTE } from './utils/consts';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
];

export const privateRoutes = [
    {
        path: GENERAL_ROUTE,
        Component: Cast
    },
    {
        path: PEOPLE_ROUTE,
        Component: People
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorite
    }
];
