import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Dashboard from "../views/Dashboard.vue";
import ErrorPage from "../views/ErrorPage.vue";
import Portfolios from "../views/Portfolios.vue";
import PortfolioShow from "../views/PortfolioShow.vue";
import Projects from "../views/Projects.vue";
import ProjectShow from "../views/ProjectShow.vue";
import Freelancers from "../views/Freelancers.vue";
import UserProfileShow from "../views/UserProfileShow.vue";
import AccountProfile from "../views/AccountProfile.vue";
import Balance from "../views/Balance.vue";
import MyProjects from "../views/MyProjects.vue";
import MyPortfolios from "../views/MyPortfolios.vue";
import ChargeBalance from "../views/ChargeBalance.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import PortfolioCreate from "../views/PortfolioCreate.vue";
import ProjectCreate from "../views/ProjectCreate.vue";
import MyOffers from "../views/MyOffers.vue";
import EditProject from "../views/EditProject.vue";
import EditPortfolio from "../views/EditPortfolio.vue";

import store from "../store/index"
Vue.use(VueRouter);


const routes = [{
        path: "/",
        name: "Home",
        component: Home,
        meta: { guest: true, title: 'Worker | Hire the best freelancers for any job' }
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { guest: true, title: 'Worker | Login' },
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: { guest: true, title: 'Worker | Register' }

    },
    {
        path: "/forgot-password",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: { guest: true, title: 'Worker | Forgot Password' }

    },

    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true, title: 'Worker | Dashboard' }
    },


    {
        path: "/account-profile",
        name: "AccountProfile",
        component: AccountProfile,
        meta: { requiresAuth: true, title: 'Worker | Edit Account Profile' }

    },
    {
        path: "/balance",
        name: "Balance",
        component: Balance,
        meta: { requiresAuth: true, title: 'Worker | Balance' }
    },
    {
        path: "/charge-balance",
        name: "ChargeBalance",
        component: ChargeBalance,
        meta: { requiresAuth: true, title: 'Worker | Charge Balance' }
    },
    {
        path: "/my-projects",
        name: "MyProjects",
        component: MyProjects,
        meta: { requiresAuth: true, title: 'Worker | My Projects' }
    },
    {
        path: "/my-portfolios",
        name: "MyPortfolios",
        component: MyPortfolios,
        meta: { requiresAuth: true, title: 'Worker | My Portfolios' }
    },
    {
        path: "/my-offers",
        name: "MyOffers",
        component: MyOffers,
        meta: { requiresAuth: true, title: 'Worker | My Offers' }
    },
    {
        path: "/portfolio-create",
        name: "PortfolioCreate",
        component: PortfolioCreate,
        meta: { requiresAuth: true, title: 'Worker | Create New Portfolio' }
    },
    {
        path: "/project-create",
        name: "ProjectCreate",
        component: ProjectCreate,
        meta: { requiresAuth: true, title: 'Worker | Create New Project' }
    },
    {
        path: "/edit-project/:id",
        name: "EditProject",
        component: EditProject,
        meta: { requiresAuth: true, title: 'Worker | Edit Project' }
    },
    {
        path: "/edit-portfolio/:id",
        name: "EditPortfolio",
        component: EditPortfolio,
        meta: { requiresAuth: true, title: 'Worker | Edit EditPortfolio' }
    },
    {
        path: "*",
        name: "ErrorPage",
        component: ErrorPage,
    },
    {
        path: "/portfolios",
        name: "Portfolios",
        component: Portfolios,
        meta: { title: 'Worker | Portfolios' }

        // meta: { guest: true}

    },
    {
        path: "/portfolio/:id",
        name: "PortfolioShow",
        component: PortfolioShow,
        // meta: {  title:'Worker | :title' }
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
        meta: { title: 'Worker | Projects' }

        // meta: { guest: true}

    },
    {
        path: "/project/:id",
        name: "ProjectShow",
        component: ProjectShow,
        // meta: { guest: true }
    },

    {
        path: "/freelancers",
        name: "Freelancers",
        component: Freelancers,
        meta: { title: 'Worker | Freelancers' }

        // meta: { guest: true }
    },

    {
        path: "/u/:id",
        name: "UserProfileShow",
        component: UserProfileShow,
        // meta: { guest: true }
    },
    // {
    //   path: "/about",
    //   name: "About",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});



router.beforeEach((to, from, next) => {

    document.title = to.meta.title
    next()

    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!store.state.loggedIn) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }

    ///////////////////////

    if (to.matched.some(record => record.meta.guest)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.loggedIn) {
            next({
                path: '/dashboard',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }

    ///////////////////////

    if (to.matched.some(record => record.meta.requiresFreelancer)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.user.role_name == "client") {
            next({
                path: '/error-page',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }

    ///////////////////////

    if (to.matched.some(record => record.meta.requiresClient)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.user.role_name == "freelancer") {
            next({
                path: '/error-page',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }

    ///////////////////////

    if (to.matched.some(record => record.meta.requiresFreelancerOrClient)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (store.state.user.role_name != "client" || store.state.user.role_name != "freelancer") {
            next({
                path: '/error-page',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }

    ///////////////////////



})


export default router;