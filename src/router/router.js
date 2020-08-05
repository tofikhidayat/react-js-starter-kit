// middlewares
import Auth from '@middleware/auth'
// pages
import Home from '@page/'


export const routes = [
    {
        exact: true,
        path: '/',
        component: Home,
        middleware: [Auth]
    }
]