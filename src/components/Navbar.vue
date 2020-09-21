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
          <router-link class="nav-link" to="#">Work Samples</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="#">Browse Jobs</router-link>
        </li>

        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item" v-if="!loggedIn">
          <router-link class="nav-link" to="/register">Sign Up</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">My Work Sample</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">Browse Jobs</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">My Offers</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">Notification</router-link>
        </li>

        <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="#">Messages</router-link>
        </li>

         <li class="nav-item" v-if="loggedIn">
          <router-link class="nav-link" to="/settings">User Settings</router-link>
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
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
