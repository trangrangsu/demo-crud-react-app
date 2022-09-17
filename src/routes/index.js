import Home from '../pages/Home';
import Add from '../pages/Add';
import Update from '../pages/Update';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/add', component: Add },
    { path: '/update', component: Update },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
