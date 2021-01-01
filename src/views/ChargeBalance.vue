<template>
  <div class="charge-balnce">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <router-link
            :to="'/u/' + user.id"
            class="author-content d-flex flex-column bg-white justify-content-center align-items-center user-head mb-4 p-4 radios-5"
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
            class="author-content bg-white author-content-settings d-flex flex-column p-4 mb-4 justify-content-center   align-items-start radios-5"
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
              <div class="charge-balance">
                <h6>Charge Balance</h6>
                <hr />
                <form>
                  <div class="form-group">
                    <label for="amount">Amount</label>
                    <input
                      class="form-control"
                      id="amount"
                      name="amount"
                      placeholder="Amount"
                      required
                      type="number"
                      v-model="amount"
                    />
                  </div>
                  <div class="form-group">
                    <label for="cardNumber">Card Number</label>
                    <input
                      class="form-control"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="Card Number"
                      required
                      type="text"
                      maxlength="14"
                      v-model="cardNumber"
                    />
                  </div>
                  <div class="form-group">
                    <label for="nameCard">Name On Card</label>
                    <input
                      class="form-control"
                      id="nameCard"
                      name="nameCard"
                      v-model="cardName"
                      placeholder="Name On Card"
                      required
                    />
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="expMonth">Exp. Month</label>
                      <input
                        type="text"
                        class="form-control"
                        id="expMonth"
                        name="expMonth"
                        maxlength="2"
                        required
                        v-model="cardMonth"
                        placeholder="Exp. Month"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="expYear">Exp. Year</label>
                      <input
                        type="text"
                        class="form-control"
                        id="expYear"
                        name="expYear"
                        placeholder="Exp. Year"
                        maxlength="2"
                        required
                        v-model="cardYear"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="CVV">CVV</label>
                    <input
                      type="text"
                      class="form-control"
                      id="CVV"
                      name="CVV"
                      placeholder="CVV"
                      required
                      maxlength="4"
                      v-model="cvv"
                    />
                  </div>
                  <button
                    @click.prevent="chargeBtn"
                    type="submit"
                    class="btn btn-hire"
                  >
                    Charge
                  </button>
                </form>
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
      cardNumber: null,
      cardName: null,
      cardMonth: null,
      cardYear: null,
      cvv: null,
      amount: null,
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
    chargeBtn() {
              this.$Progress.start();
        axios.post('https://vue-api-backend.herokuapp.com/api/balance/charge',{
          amount:this.amount,
          token:this.retriveToken
        })
        .then(res=>{
            console.log(res.data);
            this.sucessMessageOpen();
            this.$Progress.finish();
                      this.$router.push("/balance");


        })
        .catch(err => {
            console.log(err);
            this.errorMessageOpen();
        })
    },
       errorMessageOpen() {
      this.$toast.open({
        message: " There was error during Balance Charged process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Balance Charged",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
    retriveToken() {
      return this.$store.getters.get_token;
    },
  },
};
</script>