import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/about/About';
import Plans from './components/plan/Plans';
import Admin from './components/admin/Admin';

export const routes = [{
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/register',
    component: Register,
    name: 'register'
  },
  {
    path: '/plans',
    component: Plans,
    name: 'plans'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/admin',
    component: Admin,
    name: 'admin',
  }
]