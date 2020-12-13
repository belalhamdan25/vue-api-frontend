<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-nav">
    <div class="container">
      <router-link class="navbar-brand" to="/"><h4>Worker</h4></router-link>

      <!-- <router-link class="navbar-brand" to="/">
              <img src="./../../src/assets/images/worker-logo.svg" width="150" height="40" alt="worker logo">
            </router-link> -->

      <div class="d-block d-sm-none d-none d-sm-block d-md-block ml-auto d-lg-none">  
            <div class="navbar-nav ml-auto list-style-inline">
              <li class="nav-item center-nav" v-if="loggedIn">
                <router-link class="nav-link" to="#"
                  ><i  class='bx bx-envelope'></i></router-link>
              </li>

              <li class="nav-item center-nav" v-if="loggedIn">
                <router-link class="nav-link" to="#"
                  ><i class='bx bx-bell' ></i></router-link>
              </li>

              <!-- <li class="dropdown nav-item dropdown center-drop-down" v-if="loggedIn" >
                                <router-link  class="nav-link" to="#"
                  >
                  
                  <i class='bx bx-user-circle'></i>
                  
                  </router-link>
              
              <div class="dropdown-content">
                <router-link class="dropdown-item" to="/settings">
                <i class='bx bx-slider'></i> Settings</router-link
              >
              <button class="dropdown-item" @click.prevent="performLogout">
                <i class='bx bx-log-out'></i> Log out
              </button>
              </div>
            </li> -->


            </div>
      </div>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class='bx bx-bar-chart bx-rotate-270' ></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item center-nav" v-if="!loggedIn">
            <router-link class="nav-link" to="/portfolios">
              <i  class='bx bx-photo-album'></i>
              Portfolios</router-link
            >
          </li>
          <li class="nav-item center-nav" v-if="!loggedIn">
            <router-link class="nav-link " to="/projects">
            <i class='bx bx-briefcase-alt'></i>
              Projects</router-link
            >
          </li>

          <li class="nav-item center-nav" v-if="!loggedIn">
            <router-link class="nav-link " to="/freelancers">
              <i class='bx bx-group'></i>
              Freelancers</router-link
            >
          </li>

          <li class="nav-item center-nav" v-if="loggedIn">
            <router-link class="nav-link" to="/portfolios">
              <i  class='bx bx-photo-album'></i>
              Portfolios</router-link
            >
          </li>

          <li class="nav-item center-nav" v-if="loggedIn">
            <router-link class="nav-link " to="/projects">
            <i class='bx bx-briefcase-alt'></i>
              Projects</router-link
            >
          </li>

          <li class="nav-item center-nav" v-if="loggedIn">
            <router-link class="nav-link " to="/freelancers">
              <i class='bx bx-group'></i>
              Freelancers</router-link
            >
          </li>
          <li class="nav-item center-nav" v-if="!loggedIn">
            <router-link class="nav-link" to="/login">
            <i class='bx bx-log-in'></i>
              Login</router-link
            >
          </li>
          <li class="nav-item center-nav" v-if="!loggedIn">
            <router-link class="nav-link " to="/register">
              <i class='bx bx-user-plus'></i>
              Register</router-link
            >
          </li>

          <div class="d-none d-md-none d-lg-none  d-lg-block d-xl-none  d-xl-block"> 
            <div class="navbar-nav ml-auto list-style-inline">
              <li class="nav-item center-nav" v-if="loggedIn">
                <router-link class="nav-link" to="#"
                  ><i  class='bx bx-envelope'></i></router-link>
              </li>

              <li class="nav-item center-nav" v-if="loggedIn">
                <router-link class="nav-link" to="#"
                  ><i class='bx bx-bell' ></i></router-link>
              </li>

              <!-- <li class="dropdown nav-item dropdown center-drop-down" v-if="loggedIn" >
                                <router-link  class="nav-link" to="#"
                  >
                  
                  <i class='bx bx-user-circle'></i>
                  
                  
                  </router-link>
              
              <div class="dropdown-content">
                <router-link class="dropdown-item" to="/settings">
                <i class='bx bx-slider'></i> Settings</router-link
              >
              <button class="dropdown-item" @click.prevent="performLogout">
                <i class='bx bx-log-out'></i> Log out
              </button>
              </div>
            </li> -->


            </div>
          </div>


          
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.center-drop-down {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
}
.dropdown {
  position: relative;
  display: inline-block;
  
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 135px;
  box-shadow: 0px 13px 17px -5px rgba(0,0,0,0.2);
  padding: 12px 0;
  z-index: 1;
      /* left: 50%;
    transform: translate(-50%, 0); */
    right:25%;
    
}

.dropdown:hover .dropdown-content {
  display: block;
}

.shadow-nav {
  -webkit-box-shadow: 0px -4px 10px 5px rgba(184, 184, 184, 0.3);
  -moz-box-shadow: 0px -4px 10px 5px rgba(184, 184, 184, 0.3);
  box-shadow: 0px -4px 10px 5px rgba(184, 184, 184, 0.3);
  z-index: 999;
}

.nav-link {
  color: #65676b !important;
  padding: 12px;
  transition: 0.3s;
}
.dropdown-item {
  color: #65676b;
}
.nav-link:hover {
  background: #f3f3f3;
  border-radius: 5px;
  transition: 0.3s;
}

.circle {
  height: 30px;
  width: 30px;
  background: #41b883;
  border-radius: 50%;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
}
.circle2 {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}


.center-nav {
  display: flex;
  align-items: center;
}
.list-style-inline {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
}

</style>

<script>
import 'boxicons';

export default {
  data() {
    return {
      token: null,
    };
  },
  mounted() {
    this.checkUserStatus();
  },
  computed: {
    loggedIn() {
      return this.$store.getters.get_loggedIn;
    },
    user() {
      return this.$store.getters.get_user;
    },
  },
  methods: {
    checkUserStatus() {
      if (localStorage.getItem("token") != null) {
        this.token = localStorage.getItem("token");
      }
    },
    performLogout() {
      this.$store
        .dispatch("performLogoutAction")
        .then((res) => {
          this.$router.push("/");
          this.sucessMessageOpen();
          console.log(res);
        })
        .catch((err) => {
          this.errorMessageOpen();
          console.log(err);
        });
    },
    errorMessageOpen() {
      this.$toast.open({
        message: " There was error during logout process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Done ..",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
  },
};
</script>
