import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/about/About';
import Plans from './components/plan/Plans';
import Admin from './components/admin/Admin';
import AdminStudentHome from './components/admin/student/Home';
import AdminTeacherHome from './components/admin/teacher/Home';
import AdminHome from './components/admin/Home';

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
    children: [{
        path: '',
        name: 'AdminHome',
        component: AdminHome
      },
      {
        path: '/student',
        name: 'adminStudent',
        component: AdminStudentHome
      },
      {
        path: '/teacher',
        name: 'adminTeacher',
        component: AdminTeacherHome
      },
    ]
  }
]