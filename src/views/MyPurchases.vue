<template>
  <div class="purchase">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <router-link
            :to="'/u/' + user.id"
            class="author-content d-flex flex-column bg-white justify-content-center align-items-center mb-4 p-4 user-head radios-5"
          >
            <img
              v-if="user.user_img != null"
              class="circle2"
              :src="user.user_img"
            />

            <div v-else class="circle">
              <span style="color: white; font-size: 25px">{{
                user.first_name.charAt(0).toUpperCase()
              }}</span>
            </div>

            <span class="mt-2 mb-2 heading-color" style="font-size: 18px"
              >{{ user.first_name }} {{ user.last_name }}</span
            >
          </router-link>
          <div
            class="author-content bg-white author-content-settings d-flex flex-column p-4 mb-4 justify-content-center align-items-start radios-5"
          >
            <router-link class="p-2 side-item" to="/dashboard"
              ><i class="bx bx-home"></i> Dashboard</router-link
            >
            <router-link class="p-2 side-item" to="/account-profile"
              ><i class="bx bx-user"></i> My Account</router-link
            >
            <router-link class="p-2 side-item" to="/balance"
              ><i class="bx bx-credit-card-front"></i> Account
              Balance</router-link
            >
            <router-link class="p-2 side-item" to="/my-projects"
              ><i class="bx bx-briefcase-alt"></i> My Projects</router-link
            >
            <router-link class="p-2 side-item" to="/my-portfolios"
              ><i class="bx bx-photo-album"></i> My portfolio</router-link
            >
            <router-link class="p-2 side-item" to="/my-offers"
              ><i class="bx bx-dollar-circle"></i> My Offers</router-link
            >
            <router-link
              class="p-2 side-item active-side-nav"
              to="/my-purchases"
              ><i class="bx bx-cart-alt"></i> My Purchases</router-link
            >
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="phrchases">
                <h6>My Phrchases</h6>
                <hr />
                <div v-if="loading">
                  <vcl-bullet-list :rows="10"></vcl-bullet-list>
                </div>

                <div
                  v-else
                  class="row"
                >
                  <div class="col-12">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hw-60-c {
  height: 60px !important;
  width: 60px !important;
}
.letter-profile-img {
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  background-color: #41b883;
}
</style>

<script>
import { VclBulletList } from "vue-content-loading";
// import axios from "axios";

export default {
  components: {
    VclBulletList,
  },
  data() {
    return {
      loading: false,
      usersValuez: [],
    };
  },
  methods: {
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
    // fetchPurchaseTable() {
    //   this.loading = true;
    //   let payload = {
    //     user_id: this.user.id,
    //   };
    //   axios({
    //     url: "https://vue-api-backend.herokuapp.com/api/project/all-phrchases",
    //     method: "post",
    //     data: payload,
    //   }).then((response) => {
    //     console.log(response.data);
    //     this.usersValuez = response.data;
    //     this.loading = false;
    //   });
    // },
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    // this.fetchPurchaseTable();
  },
};
</script>