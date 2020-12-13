<template>
  <div class="balance">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <router-link
            :to="'/u/' + user.id"
            class="author-content d-flex flex-column bg-white justify-content-center align-items-center mb-4 p-4 radios-5"
          >
            <img
              v-if="user.user_img != null"
              class="circle2"
              :src="
                'https://vue-api-backend.herokuapp.com/users_images/' +
                user.user_img
              "
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
            <router-link class="p-2 side-item active-side-nav" to="/balance"
              ><i class="bx bx-credit-card-front"></i> Account
              Balance</router-link
            >
            <router-link class="p-2 side-item" to="#"
              ><i class="bx bx-briefcase-alt"></i> My Projects</router-link
            >
            <router-link class="p-2 side-item" to="#"
              ><i class="bx bx-photo-album"></i> My portfolio</router-link
            >
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row mb-4">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="personal-data">
                <h6>My Balance</h6>
                <hr />

                <div
                  class="d-flex mb-4 justify-content-around align-items-start"
                >
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span class="heading-color font-size-20">Under review</span>

                    <span class="font-size-35 color-prime"
                      >${{ userValuesDashboard.under_review }}</span
                    >
                  </div>
                  <div class="hv"></div>

                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span class="heading-color font-size-20">Outstanding</span>

                    <span class="font-size-35 color-prime"
                      >${{ userValuesDashboard.outstanding }}</span
                    >
                  </div>
                  <div class="hv"></div>

                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span class="heading-color font-size-20">Withdrawable</span>

                    <span class="font-size-35 color-prime"
                      >${{ userValuesDashboard.withdrawable }}</span
                    >
                  </div>
                  <div class="hv"></div>

                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span class="heading-color font-size-20">Total</span>

                    <span class="font-size-35 color-prime"
                      >${{ userValuesDashboard.balance_total }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="transactions">
                <h6>Account Transactions</h6>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userValuesDashboard: [],
    };
  },
  methods: {
    userDataLoad() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/user-dashboard/" +
            this.user.id
        )
        .then((response) => {
          this.userValuesDashboard = response.data;
        });
    },
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.userDataLoad();
    this.categoriesFiltter();
  },
};
</script>