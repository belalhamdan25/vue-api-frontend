<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
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
          <router-link class="nav-link" to="/portfolios">Portfolios</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>

         <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/freelancers">Freelancers</router-link>
        </li>

        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="/portfolios">Portfolios</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="/freelancers">Freelancers</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">Notification</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">Messages</router-link>
        </li>

         <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="/settings">Settings</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <button class="nav-link" @click.prevent="performLogout">
            Log Out
          </button>
        </li>
      </ul>
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
