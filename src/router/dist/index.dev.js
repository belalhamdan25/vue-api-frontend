"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

var _Register = _interopRequireDefault(require("../views/Register.vue"));

var _Dashboard = _interopRequireDefault(require("../views/Dashboard.vue"));

var _ErrorPage = _interopRequireDefault(require("../views/ErrorPage.vue"));

var _Portfolios = _interopRequireDefault(require("../views/Portfolios.vue"));

var _PortfolioShow = _interopRequireDefault(require("../views/PortfolioShow.vue"));

var _Projects = _interopRequireDefault(require("../views/Projects.vue"));

var _ProjectShow = _interopRequireDefault(require("../views/ProjectShow.vue"));

var _Freelancers = _interopRequireDefault(require("../views/Freelancers.vue"));

var _UserProfileShow = _interopRequireDefault(require("../views/UserProfileShow.vue"));

var _AccountProfile = _interopRequireDefault(require("../views/AccountProfile.vue"));

var _Balance = _interopRequireDefault(require("../views/Balance.vue"));

var _MyProjects = _interopRequireDefault(require("../views/MyProjects.vue"));

var _MyPortfolios = _interopRequireDefault(require("../views/MyPortfolios.vue"));

var _ChargeBalance = _interopRequireDefault(require("../views/ChargeBalance.vue"));

var _ForgotPassword = _interopRequireDefault(require("../views/ForgotPassword.vue"));

var _PortfolioCreate = _interopRequireDefault(require("../views/PortfolioCreate.vue"));

var _ProjectCreate = _interopRequireDefault(require("../views/ProjectCreate.vue"));

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home["default"],
  meta: {
    guest: true,
    title: 'Worker | Hire the best freelancers for any job'
  }
}, {
  path: "/login",
  name: "Login",
  component: _Login["default"],
  meta: {
    guest: true,
    title: 'Worker | Login'
  }
}, {
  path: "/register",
  name: "Register",
  component: _Register["default"],
  meta: {
    guest: true,
    title: 'Worker | Register'
  }
}, {
  path: "/forgot-password",
  name: "ForgotPassword",
  component: _ForgotPassword["default"],
  meta: {
    guest: true,
    title: 'Worker | Forgot Password'
  }
}, {
  path: "/dashboard",
  name: "Dashboard",
  component: _Dashboard["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | Dashboard'
  }
}, {
  path: "/account-profile",
  name: "AccountProfile",
  component: _AccountProfile["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | Edit Account Profile'
  }
}, {
  path: "/balance",
  name: "Balance",
  component: _Balance["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | Balance'
  }
}, {
  path: "/charge-balance",
  name: "ChargeBalance",
  component: _ChargeBalance["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | Charge Balance'
  }
}, {
  path: "/my-projects",
  name: "MyProjects",
  component: _MyProjects["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | My Projects'
  }
}, {
  path: "/my-portfolios",
  name: "MyPortfolios",
  component: _MyPortfolios["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | My Portfolios'
  }
}, {
  path: "/portfolio-create",
  name: "PortfolioCreate",
  component: _PortfolioCreate["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | Create New Portfolio'
  }
}, {
  path: "/project-create",
  name: "ProjectCreate",
  component: _ProjectCreate["default"],
  meta: {
    requiresAuth: true,
    title: 'Worker | Create New Project'
  }
}, {
  path: "*",
  name: "ErrorPage",
  component: _ErrorPage["default"]
}, {
  path: "/portfolios",
  name: "Portfolios",
  component: _Portfolios["default"],
  meta: {
    title: 'Worker | Portfolios'
  } // meta: { guest: true}

}, {
  path: "/portfolio/:id",
  name: "PortfolioShow",
  component: _PortfolioShow["default"] // meta: {  title:'Worker | :title' }

}, {
  path: "/projects",
  name: "Projects",
  component: _Projects["default"],
  meta: {
    title: 'Worker | Projects'
  } // meta: { guest: true}

}, {
  path: "/project/:id",
  name: "ProjectShow",
  component: _ProjectShow["default"] // meta: { guest: true }

}, {
  path: "/freelancers",
  name: "Freelancers",
  component: _Freelancers["default"],
  meta: {
    title: 'Worker | Freelancers'
  } // meta: { guest: true }

}, {
  path: "/u/:id",
  name: "UserProfileShow",
  component: _UserProfileShow["default"] // meta: { guest: true }

} // {
//   path: "/about",
//   name: "About",
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () =>
//     import(/* webpackChunkName: "about" */ "../views/About.vue")
// }
];
var router = new _vueRouter["default"]({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title;
  next();

  if (to.matched.some(function (record) {
    return record.meta.requiresAuth;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!_index["default"].state.loggedIn) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  } ///////////////////////


  if (to.matched.some(function (record) {
    return record.meta.guest;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_index["default"].state.loggedIn) {
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  } ///////////////////////


  if (to.matched.some(function (record) {
    return record.meta.requiresFreelancer;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_index["default"].state.user.role_name == "client") {
      next({
        path: '/error-page',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  } ///////////////////////


  if (to.matched.some(function (record) {
    return record.meta.requiresClient;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_index["default"].state.user.role_name == "freelancer") {
      next({
        path: '/error-page',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  } ///////////////////////


  if (to.matched.some(function (record) {
    return record.meta.requiresFreelancerOrClient;
  })) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (_index["default"].state.user.role_name != "client" || _index["default"].state.user.role_name != "freelancer") {
      next({
        path: '/error-page',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  } ///////////////////////

});
var _default = router;
exports["default"] = _default;