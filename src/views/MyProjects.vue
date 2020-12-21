<template>
  <div class="my-projects">
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
            <router-link class="p-2 side-item" to="/balance"
              ><i class="bx bx-credit-card-front"></i> Account
              Balance</router-link
            >
            <router-link class="p-2 side-item active-side-nav" to="/my-projects"
              ><i class="bx bx-briefcase-alt"></i> My Projects</router-link
            >
            <router-link class="p-2 side-item" to="/my-portfolios"
              ><i class="bx bx-photo-album"></i> My portfolio</router-link
            >
            <router-link class="p-2 side-item" to="/my-offers"
              ><i class="bx bx-dollar-circle"></i> My Offers</router-link
            >
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4">
              <div class="projects">
                <div class="d-flex justify-content-between align-items-center">
                  <h6>My Projects</h6>
                  <router-link class="btn btn-hire" to="/project-create">
                    Add New</router-link
                  >
                </div>
                <hr />

                <div v-if="loading">
                  <vcl-bullet-list :rows="10"></vcl-bullet-list>
                </div>

                <div
                  v-else
                  v-for="userValuesproject in userValuesprojects.projects"
                  :key="userValuesproject.id"
                >
                  <router-link
                    :to="'project/' + userValuesproject.id"
                    class="d-flex justify-content-start align-items-center p-2 project-item"
                  >
                    <div
                      class="d-flex flex-column justify-content-center align-items-center"
                    >
                      <img
                        v-if="user.user_img != null"
                        class="hw-60-c mr-4 rounded-circle"
                        :src="user.user_img"
                        alt="user image"
                      />
                      <div
                        class="hw-60-c letter-profile-img rounded-circle mr-4"
                        v-else
                      >
                        <span style="color: white; font-size: 20px">{{
                          user.first_name.charAt(0).toUpperCase()
                        }}</span>
                      </div>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center align-items-start"
                    >
                      <h6 class="mb-0">{{ userValuesproject.title }}</h6>
                      <div
                        class="d-flex justify-content-start align-items-center"
                      >
                        <div class="auth mr-2 text-muted">
                          <i class="fas fa-user" style="font-size: 10px"></i>
                          <small>
                            {{ user.first_name }} {{ user.last_name }}</small
                          >
                        </div>
                        <div class="time mr-2 text-muted">
                          <i class="fas fa-clock" style="font-size: 10px"></i>
                          <small>
                            {{
                              userValuesproject.created_at
                                | moment("from", "now")
                            }}
                          </small>
                        </div>
                        <div class="offers mr-2 text-muted">
                          <i
                            class="fas fa-user-tie"
                            style="font-size: 10px"
                          ></i>
                        </div>
                        <small class="mb-0 status-project">{{
                          userValuesproject.status
                        }}</small>
                      </div>
                      <p class="text-muted" style="font-size: 14px">
                        {{ userValuesproject.desc.substring(0, 150) + ".." }}
                      </p>
                    </div>
                  </router-link>

                  <hr />
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
import {  VclBulletList } from "vue-content-loading";

export default {
    components: {
    VclBulletList,
  },
  data() {
    return {
      userValuesprojects: [],
      loading: false,
    };
  },
  methods: {
    userprojectsLoad() {
      this.loading = true;
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/my-projects/" +
            this.user.id
        )
        .then((response) => {
          this.userValuesprojects = response.data.data;
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