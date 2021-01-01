<template>
  <div class="balance">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <router-link
            :to="'/u/' + user.id"
            class="author-content d-flex flex-column bg-white justify-content-center align-items-center mb-4 p-4  user-head radios-5"
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
            <router-link class="p-2 side-item active-side-nav" to="/balance"
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
              ><i class='bx bx-dollar-circle'></i> My Offers</router-link
            >
                                    <!-- <router-link class="p-2 side-item" to="/my-purchases"
              ><i class='bx bx-cart-alt'></i> My Purchases</router-link
            > -->
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row mb-4">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="personal-data">
                <div class="d-flex justify-content-between align-items-center">
                  <h6>My Balance</h6>
                  <button class="btn btn-hire" @click="ChargeBalanceBtn">Charge</button>
                </div>
                <hr />

                <div
                  class="d-flex mb-4 justify-content-around align-items-start"
                >
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <span class="heading-color font-size-20"
                      >Total Balance</span
                    >

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

                <div v-for="transaction in transactions" :key="transaction.id">
                  <div class="text-left mb-4">
                    <div
                      class="d-flex  justify-content-between align-items-start"
                    >

                      <h6 class="text-muted">$ {{ transaction.amount }}</h6>
                      <h6 class="text-muted">{{ transaction.desc }}</h6>
                      <h6>
                        <i class=" text-muted fas fa-clock" style="font-size: 10px"></i>
                        <small class="text-muted">
                          {{ transaction.created_at | moment("from", "now") }}
                        </small>
                      </h6>
                      
                    </div>
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
<style>
.btn-hire {
  background: #41b883;
  color: white;
  /* font-size: 12px; */
}
.btn-hire:hover {
  background: #369a6e;
    color: white;

}
</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
      userValuesDashboard: [],
      transactions: [],
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
    ChargeBalanceBtn() {
      this.$router.push("/charge-balance");
    },
    myTransaction() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/my-transaction/" +
            this.user.id
        )
        .then((response) => {
          this.transactions = response.data;
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
    this.myTransaction();
  },
};
</script>