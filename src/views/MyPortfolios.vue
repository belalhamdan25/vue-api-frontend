<template>
  <div class="my-projects">
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
            <router-link
              class="p-2 side-item active-side-nav"
              to="/my-portfolios"
              ><i class="bx bx-photo-album"></i> My portfolio</router-link
            >
            <router-link class="p-2 side-item" to="/my-offers"
              ><i class="bx bx-dollar-circle"></i> My Offers</router-link
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
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="portfolios">
                <div class="d-flex justify-content-between align-items-center">
                  <h6>My Portfolios</h6>
                  <router-link class="btn btn-hire" to="/portfolio-create">
                    Add New</router-link
                  >
                </div>
                <hr />

                <div v-if="loading">
                  <div class="row">
                    <skelton-card
                      v-for="index in 9"
                      :key="index"
                    ></skelton-card>
                  </div>
                </div>

                <div v-else class="row">
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 pb-4 d-flex flex-column justify-content-center align-content-center pr-2 pl-2"
                    v-for="userValuesportfolio in userValuesportfolios.portfolios"
                    :key="userValuesportfolio.id"
                  >
                    <div class="card portfolio-card border-0 p-2">
                      <div
                        class="d-flex justify-content-start align-items-center"
                      >
                        <div class="d-flex align-items-center px-1 w-img-100">
                          <router-link class="card-link" :to="'/u/' + user.id">
                            <img
                              v-if="user.user_img != null"
                              class="hw-35-c rounded-circle"
                              :src="user.user_img"
                              alt="user image"
                            />
                            <div
                              class="hw-35-c letter-profile-img rounded-circle"
                              v-else
                            >
                              <span style="color: white">{{
                                user.first_name.charAt(0).toUpperCase()
                              }}</span>
                            </div>
                          </router-link>
                        </div>
                        <div class="pl-2">
                          <div
                            class="justify-content-start pr-1 align-content-start"
                          >
                            <router-link
                              class="card-link"
                              :to="'/u/' + user.id"
                            >
                              <h6
                                class="card-name m-0 h-fit f-15 primary-color"
                              >
                                {{ user.first_name }}
                                {{ user.last_name }}
                              </h6>
                            </router-link>

                            <router-link
                              class="card-link ml-0"
                              :to="'portfolio/' + userValuesportfolio.id"
                            >
                              <small class="text-muted">{{
                                userValuesportfolio.title.substring(0, 20) +
                                ".."
                              }}</small>
                            </router-link>
                          </div>
                        </div>
                      </div>
                      <router-link
                        class="card-link"
                        :to="'portfolio/' + userValuesportfolio.id"
                      >
                        <img
                          class="card-img-top img-raduis-bottom"
                          :src="userValuesportfolio.portfolio_images[0].name"
                          :alt="userValuesportfolio.desc"
                        />
                      </router-link>
                    </div>

                    <div
                      class="d-flex justify-content-center align-items-center"
                    >
                      <router-link
                        :to="'edit-portfolio/' + userValuesportfolio.id"
                        class="btn btn-hire mr-3"
                        >Edit</router-link
                      >
                      <button
                        @click="deletePort(userValuesportfolio.id)"
                        class="btn btn-hire-borderd "
                      >
                        Delete
                      </button>
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

<style scoped>
.primary-color {
  color: #41b883;
}
</style>

<script>
import axios from "axios";
import SkeltonCard from "@/components/SkeltonCard";

export default {
  components: { SkeltonCard },

  data() {
    return {
      userValuesportfolios: [],
      loading: false,
    };
  },
  methods: {
    deletePort(id) {
      this.$Progress.start();

      axios
        .post(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios-delete/" +
            id
        )
        .then((response) => {
          console.log(response);
          this.sucessMessageOpenDeleted();
          this.$Progress.finish();
                      window.location.reload()

        });
    },
    sucessMessageOpenDeleted() {
      this.$toast.open({
        message: "Deleted",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    userprojectsLoad() {
      this.loading = true;
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/my-portfolios/" +
            this.user.id
        )
        .then((response) => {
          this.userValuesportfolios = response.data.data;
          this.loading = false;
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
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },
  mounted() {
    this.userprojectsLoad();
  },
};
</script>