import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import About from './components/about/About';
import Plans from './components/plan/Plans';
import Admin from './components/admin/Admin';
import AdminStudentHome from './components/admin/student/Home';
import AdminTeacherHome from './components/admin/teacher/Home';
import AdminDashboard from './components/admin/admin/Dashboard';
import CreateStudent from './components/admin/admin/CreateStudent';
import CreateTeacher from './components/admin/admin/CreateTeacher';

export const routes = [{
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }, {
    path: '/register',
    component: Register,
    name: 'register'
  }, {
    path: '/plans',
    component: Plans,
    name: 'plans'
  }, {
    path: '/about',
    component: About,
    name: 'about'
  },
  {
    path: '/admin',
    component: Admin,
    children: [{
        path: '',
        name: 'admin.dashboard',
        component: AdminDashboard,
      },
      {
        path: 'create-student',
        name: 'admin.create.student',
        component: CreateStudent,
      },
      {
        path: 'create-teacher',
        name: 'admin.create.teacher',
        component: CreateTeacher,
      },
      {
        path: 'student',
        name: 'adminStudent',
        component: AdminStudentHome
      },
      {
        path: 'teacher',
        name: 'adminTeacher',
        component: AdminTeacherHome
      },
    ]
  }
]