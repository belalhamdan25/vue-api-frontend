<template>
  <div class="my-projects">
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
                  <router-link class="" to="/portfolio-create">
                    Add New</router-link
                  >
                </div>
                <hr />

                <div class="row">
                  <div
                    class="col-lg-4 col-md-6 col-sm-6 pb-4 d-flex justify-content-center align-content-center pr-2 pl-2"
                    v-for="userValuesportfolio in userValuesportfolios.portfolios"
                    :key="userValuesportfolio.id"
                  >
                    <router-link
                      class="card-link"
                      :to="'portfolio/' + userValuesportfolio.id"
                    >
                      <div class="card portfolio-card border-0 p-2">
                        <div
                          class="d-flex justify-content-start align-items-center"
                        >
                          <div class="d-flex align-items-center px-1 w-img-100">
                            <img
                              v-if="user.user_img != null"
                              class="hw-35-c rounded-circle"
                              :src="
                                'https://vue-api-backend.herokuapp.com/users_images/' +
                                user.user_img
                              "
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
                          </div>
                          <div class="pl-2">
                            <div
                              class="justify-content-center pr-1 align-content-end"
                            >
                              <h6 class="card-name m-0 h-fit f-15">
                                {{ user.first_name }}
                                {{ user.last_name }}
                              </h6>

                              <small class="text-muted">{{
                                userValuesportfolio.title.substring(0, 20) +
                                ".."
                              }}</small>
                            </div>
                          </div>
                        </div>
                        <img
                          class="card-img-top img-raduis-bottom"
                          :src="userValuesportfolio.portfolio_images[0].name"
                          :alt="userValuesportfolio.desc"
                        />
                      </div>
                    </router-link>
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
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userValuesportfolios: [],
    };
  },
  methods: {
    userprojectsLoad() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/my-portfolios/" +
            this.user.id
        )
        .then((response) => {
          this.userValuesportfolios = response.data.data;
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