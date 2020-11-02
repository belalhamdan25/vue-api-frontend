<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
    <div class="container">
            <router-link class="navbar-brand" to="/">Worker.com</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/portfolios"> <i class="far fa-images"></i> Portfolios</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link " to="/projects"> <i class="fas fa-suitcase"></i> Projects</router-link>
        </li>

         <li class="nav-item" v-if="!loggedIn"> 
          <router-link class="nav-link " to="/freelancers"> <i class="fas fa-users"></i> Freelancers</router-link>
        </li>



        <li class="nav-item" v-if="loggedIn">
                    <router-link class="nav-link" to="/portfolios"> <i class="far fa-images"></i> Portfolios</router-link>

        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link " to="/projects"> <i class="fas fa-suitcase"></i> Projects</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
           <router-link class="nav-link " to="/freelancers"> <i class="fas fa-users"></i> Freelancers</router-link>
        </li>


        
      </ul>

      <ul class="navbar-nav ml-auto">
                  <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/login"> <i class="fas fa-sign-in-alt"></i> Login</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link " to="/register"> <i class="fas fa-user-plus"></i> Register</router-link>
        </li>

                <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#"><i style="font-size:24px" class="far fa-bell"></i></router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#"><i style="font-size:24px" class="far fa-envelope"></i></router-link>
        </li>

            <!-- Dropdown -->
            <li class="nav-item dropdown ml-2" v-if="loggedIn">
              <a class="nav-link dropdown-toggle p-0 mt-2" href="#" id="navbardrop" data-toggle="dropdown">
                
                
                         <img
                          v-if="user.user_img != null"
                          class="circle2"
                          :src="user.user_img"
                        />

                        <div v-else class="circle">
                          <span style="color:white;font-size:20px">{{
                            user.first_name.charAt(0).toUpperCase()
                          }}</span>
                        </div>



              </a>
              <div class="dropdown-menu">
                 <router-link class="dropdown-item" to="/settings">Settings</router-link>
                 <button class="dropdown-item" @click.prevent="performLogout">Log Out</button>
              </div>
            </li>


      </ul>

    </div>
    </div>
  </nav>
</template>


<style scoped>
.navbar{
-webkit-box-shadow: 0px -4px 10px 5px rgba(184,184,184,0.3);
-moz-box-shadow: 0px -4px 10px 5px rgba(184,184,184,0.3);
box-shadow: 0px -4px 10px 5px rgba(184,184,184,0.3);
    z-index:999;
}


.nav-link{
  color: #65676b !important;
  padding:12px
}
.nav-link:hover{
  background: #f3f3f3 ;
  border-radius: 5px;
  
}

.circle {
  height: 36px;
  width: 36px;
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

.dropdown-toggle::after {
    display:none;
}

</style>

<script>
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
    user(){
      return this.$store.getters.get_user;
    }
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
        position:'top-right'
      })
    },
      sucessMessageOpen() {
      this.$toast.open({
        message: "Done ..",
        type: "success",
        duration: 5000,
        dismissible: true,
        position:'top-right'
      })
    },
  },
};
</script>
