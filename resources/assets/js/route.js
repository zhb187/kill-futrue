//Route file
import login from './components/login'
import register from './components/register'
import newList from './components/order-list/new-list'
import dashBoard from './components/dash-board'
export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name:login,
        component: login
    },
    {
        path: '/register',
        name: 'register',
        component: register,
    },
    {
        path: '/dash-board',
        component: dashBoard,
        children: [
            {
                path: 'OrderList/newList',
                name: 'newList',
                component: newList
            }
        ]
    }
]
