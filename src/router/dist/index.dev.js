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

var _Settings = _interopRequireDefault(require("../views/Settings.vue"));

var _ErrorPage = _interopRequireDefault(require("../views/ErrorPage.vue"));

var _Portfolios = _interopRequireDefault(require("../views/Portfolios.vue"));

var _PortfolioShow = _interopRequireDefault(require("../views/PortfolioShow.vue"));

var _Projects = _interopRequireDefault(require("../views/Projects.vue"));

var _ProjectShow = _interopRequireDefault(require("../views/ProjectShow.vue"));

var _Freelancers = _interopRequireDefault(require("../views/Freelancers.vue"));

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: "/",
  name: "Home",
  component: _Home["default"],
  meta: {
    guest: true
  }
}, {
  path: "/login",
  name: "Login",
  component: _Login["default"],
  meta: {
    guest: true
  }
}, {
  path: "/register",
  name: "Register",
  component: _Register["default"],
  meta: {
    guest: true
  }
}, {
  path: "/dashboard",
  name: "Dashboard",
  component: _Dashboard["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/settings",
  name: "Settings",
  component: _Settings["default"],
  meta: {
    requiresAuth: true
  }
}, {
  path: "/error-page",
  name: "ErrorPage",
  component: _ErrorPage["default"]
}, {
  path: "/portfolios",
  name: "Portfolios",
  component: _Portfolios["default"] // meta: { guest: true}

}, {
  path: "/portfolio/:id",
  name: "PortfolioShow",
  component: _PortfolioShow["default"] // meta: { guest: true }

}, {
  path: "/projects",
  name: "Projects",
  component: _Projects["default"] // meta: { guest: true}

}, {
  path: "/project/:id",
  name: "ProjectShow",
  component: _ProjectShow["default"] // meta: { guest: true }

}, {
  path: "/freelancers",
  name: "Freelancers",
  component: _Freelancers["default"] // meta: { guest: true }

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