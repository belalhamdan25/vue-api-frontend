<template>
  <div class="dashboard">
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
            <router-link
              class="deco-none p-2 side-item active-side-nav"
              to="/dashboard"
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
                        <!-- <router-link class="p-2 side-item" to="/my-purchases"
              ><i class='bx bx-cart-alt'></i> My Purchases</router-link
            > -->
            <button class="p-2 side-item" @click.prevent="performLogout">
              <i class="bx bx-log-out"></i> Log out
            </button>
          </div>

          <div
            class="heading-color p-4 author-content bg-white author-content-settings d-flex flex-column mb-4 justify-content-center align-items-center radios-5"
          >
            <span class="mb-2">My portfolio</span>
            <h6 style="font-size: 25px; color: black">
              {{ userValuesDashboard.portfolio_count }}
            </h6>
            <div class="hr mb-2"></div>
            <router-link class="link-sec" to="/portfolio-create"
              ><i class="bx bx-plus"></i> Add New</router-link
            >
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div class="row">
            <div class="col-12 radios-5 bg-white p-4 mb-4">
              <div
                class="balance-content d-flex flex-column justify-content-center align-items-around"
              >
                <div class="d-flex justify-content-around align-items-center">
                  <div
                    style="color: #41b883"
                    class="d-flex bg-white flex-column justify-content-center align-items-center"
                  >
                    <h5 style="font-weight: 400">Total balance</h5>
                    <h5 style="font-size: 35px; font-weight: 400">
                      ${{ userValuesDashboard.balance_total }}
                    </h5>
                  </div>
                  <div class="hv"></div>

                  <button class="btn text-muted" @click="goToBalancePage">
                    Show Balance
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <!-- <div class="col-6 mb-4 bg-white radios-5 p-4">
              <div
                class="heading-color d-flex flex-column bg-white justify-content-around align-items-center"
              >
                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <h5 style="font-size: 35px; font-weight: 400">
                    {{ userValuesDashboard.projectPurchase }}
                  </h5>
                  <span>Purchases</span>
                </div>
                <div class="my-3"></div>

                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectPurchase * 100 == 0"
                  >
                    <span style="font-size: 15px">Closed</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.projectPurchaseStatusClosedCount *
                        100
                      "
                      :max="100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectPurchaseStatusClosedCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Closed</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.projectPurchaseStatusClosedCount *
                        100
                      "
                      :max="userValuesDashboard.projectPurchase * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectPurchaseStatusClosedCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectPurchase * 100 == 0"
                  >
                    <span style="font-size: 15px">In Proccess</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="userValuesDashboard.projectPurchaseStatusProccessCount * 100"
                      :max="100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectPurchaseStatusProccessCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">In Proccess</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="userValuesDashboard.projectPurchaseStatusProccessCount * 100"
                      :max="userValuesDashboard.projectPurchase * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectPurchaseStatusProccessCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectPurchase * 100 == 0"
                  >
                    <span style="font-size: 15px">Finished</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.projectPurchaseStatusFinishCount * 100
                      "
                      :max="100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectPurchaseStatusFinishCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Finished</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.projectPurchaseStatusFinishCount * 100
                      "
                      :max="userValuesDashboard.projectPurchase * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectPurchaseStatusFinishCount }}
                  </div>
                </div>
              </div>
            </div> -->
            
            <div class="col-12 mb-4 bg-white radios-5 p-4">
              <div
                class="heading-color d-flex  bg-white justify-content-around align-items-center"
              >
                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <h5 style="font-size: 35px; font-weight: 400">
                    {{ userValuesDashboard.offers_count }}
                  </h5>
                  <span>My Offers</span>
                </div>
                <div class="hv"></div>

                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="text-left"
                    v-if="userValuesDashboard.offerStatusCount * 100 == 0"
                  >
                    <span style="font-size: 15px">Awaiting approval</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.offerStatusAwaitingApprovalCount *
                        100
                      "
                      :max="100"
                    ></progress-bar>
                    {{ userValuesDashboard.offerStatusAwaitingApprovalCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Awaiting approval</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.offerStatusAwaitingApprovalCount *
                        100
                      "
                      :max="userValuesDashboard.offerStatusCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.offerStatusAwaitingApprovalCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.offerStatusCount * 100 == 0"
                  >
                    <span style="font-size: 15px">Finished</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="userValuesDashboard.offerStatusFinishedCount * 100"
                      :max="100"
                    ></progress-bar>
                    {{ userValuesDashboard.offerStatusFinishedCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Finished</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="userValuesDashboard.offerStatusFinishedCount * 100"
                      :max="userValuesDashboard.offerStatusCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.offerStatusFinishedCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.offerStatusCount * 100 == 0"
                  >
                    <span style="font-size: 15px">In Proccess</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.offerStatusInProccessCount * 100
                      "
                      :max="100"
                    ></progress-bar>
                    {{ userValuesDashboard.offerStatusInProccessCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">In Proccess</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      size="medium"
                      :val="
                        userValuesDashboard.offerStatusInProccessCount * 100
                      "
                      :max="userValuesDashboard.offerStatusCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.offerStatusInProccessCount }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 bg-white mb-4 radios-5 p-4">
              <div
                class="heading-color d-flex justify-content-around align-items-center"
              >
                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <h5 style="font-size: 35px; font-weight: 400">
                    {{ userValuesDashboard.projects_count }}
                  </h5>
                  <span>My Projects</span>
                </div>
                <div class="hv"></div>

                <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectStatusOpenCount * 100 == 0"
                  >
                    <span style="font-size: 15px">Open</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="100"
                      size="medium"
                      :val="userValuesDashboard.projectStatusOpenCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusOpenCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Open</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="userValuesDashboard.projectStatusCount * 100"
                      size="medium"
                      :val="userValuesDashboard.projectStatusOpenCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusOpenCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectStatusOpenCount * 100 == 0"
                  >
                    <span style="font-size: 15px">Closed</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="100"
                      size="medium"
                      :val="userValuesDashboard.projectStatusClosedCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusClosedCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Closed</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="userValuesDashboard.projectStatusCount * 100"
                      size="medium"
                      :val="userValuesDashboard.projectStatusClosedCount * 100"
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusClosedCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectStatusOpenCount * 100 == 0"
                  >
                    <span style="font-size: 15px">In Proccess</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="100"
                      size="medium"
                      :val="
                        userValuesDashboard.projectStatusProccessCount * 100
                      "
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusProccessCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">In Proccess</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="userValuesDashboard.projectStatusCount * 100"
                      size="medium"
                      :val="
                        userValuesDashboard.projectStatusProccessCount * 100
                      "
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusProccessCount }}
                  </div>

                  <div
                    class="text-left"
                    v-if="userValuesDashboard.projectStatusOpenCount * 100 == 0"
                  >
                    <span style="font-size: 15px">Finished</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="100"
                      size="medium"
                      :val="
                        userValuesDashboard.projectStatusFinishedCount * 100
                      "
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusFinishedCount }}
                  </div>

                  <div class="text-left" v-else>
                    <span style="font-size: 15px">Finished</span>
                    <progress-bar
                      style="width: 300px"
                      bar-color="#41b883"
                      :max="userValuesDashboard.projectStatusCount * 100"
                      size="medium"
                      :val="
                        userValuesDashboard.projectStatusFinishedCount * 100
                      "
                    ></progress-bar>
                    {{ userValuesDashboard.projectStatusFinishedCount }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 bg-white p-4 mb-4 radios-5">
              <div
                class="d-flex flex-column justify-content-center align-items-center"
              >
                <span class="mb-4">Lastest Projects Added</span>
                <div class="hr mb-4"></div>
                <div
                  v-for="filteredProject in filteredProjects.slice(0, 3)"
                  :key="filteredProject.id"
                >
                  <router-link
                    :to="'/project/' + filteredProject.id"
                    class="d-flex justify-content-start align-items-center p-2 project-item"
                  >
                    <div
                      class="d-flex flex-column justify-content-center align-items-center"
                    >
                      <img
                        v-if="filteredProject.user_img != null"
                        class="hw-60-c mr-4 rounded-circle"
                        alt="user image"
                        :src="user.user_img"
                      />
                      <div
                        class="hw-60-c letter-profile-img rounded-circle mr-4"
                        v-else
                      >
                        <span style="color: white; font-size: 20px">{{
                          filteredProject.user_name.charAt(0).toUpperCase()
                        }}</span>
                      </div>
                    </div>
                    <div
                      class="d-flex flex-column justify-content-center align-items-start"
                    >
                      <h6 class="mb-0">{{ filteredProject.title }}</h6>
                      <div
                        class="d-flex justify-content-start align-items-center"
                      >
                        <div class="auth mr-2 text-muted">
                          <i class="fas fa-user" style="font-size: 10px"></i>
                          <small> {{ filteredProject.user_name }}</small>
                        </div>
                        <div class="time mr-2 text-muted">
                          <i class="fas fa-clock" style="font-size: 10px"></i>
                          <small>
                            {{
                              filteredProject.created_at | moment("from", "now")
                            }}
                          </small>
                        </div>
                        <div class="offers mr-2 text-muted">
                          <i
                            class="fas fa-user-tie"
                            style="font-size: 10px"
                          ></i>
                          <small>
                            {{ filteredProject.offers_count }} offers</small
                          >
                        </div>
                        <small class="mb-0 status-project">{{
                          filteredProject.status
                        }}</small>
                      </div>
                      <p class="text-muted" style="font-size: 14px">
                        {{ filteredProject.desc.substring(0, 150) + ".." }}
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
<style>
.vue-simple-progress-bar {
  border-radius: 20px;
}
.vue-simple-progress {
  border-radius: 20px;
}
</style>

<script>
import ProgressBar from "vue-simple-progress";
import axios from "axios";

export default {
  components: {
    ProgressBar,
  },
  data() {
    return {
      userValuesDashboard: [],
      filteredProjects: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
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
    goToBalancePage() {
      this.$router.push("/balance");
    },

    categoriesFiltter() {
      this.filteredProjects = [];
      let payload = {
        cq: this.user.category_id,
      };
      axios({
        url:
          "https://vue-api-backend.herokuapp.com/api/project/categories-filter",
        method: "post",
        data: payload,
      }).then((response) => {
        this.filteredProjects = response.data;
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
  mounted() {
    this.userDataLoad();
    this.categoriesFiltter();
  },
};
</script>

<style>
.user-head {
  text-decoration: none !important;
}
.link-sec {
  text-decoration: none !important;
  color: #575757;
  transition: 0.3s;
}
.link-sec:hover {
  color: #41b883;
  transition: 0.3s;
  text-decoration: none !important;
}
.circle2 {
  height: 70px;
  width: 70px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
}
.project-item {
  cursor: pointer;
  text-decoration: none !important;
  color: #41b883;
  transition: 0.3s;
}
.project-item:hover {
  color: #369a6e;
  transition: 0.3s;
  background: #f8f8f8;
}
.circle {
  height: 70px;
  width: 70px;
  background: #41b883;
  border-radius: 50%;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
}
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
.side-item {
  text-decoration: none !important;
  color: #575757;
  width: 100%;
  font-size: 16px;
  transition: 0.3s;
  background: none;
  border: 0;
  text-align: left;
}
.side-item:hover {
  color: #41b883;
  margin-left: 10px;
  padding-left: 0px;
  transition: 0.3s;
}
.active-side-nav {
  color: #41b883;
  margin-left: 10px;
  padding-left: 0px;
  transition: 0.3s;
}
.heading-color {
  color: #575757;
  text-decoration: none;
}
.font-size-20 {
  font-size: 20px;
}
.font-size-35 {
  font-size: 35px;
}
.color-prime {
  color: #41b883;
}
.hr {
  width: 100%;
  height: 1px;
  background: #e7e7e7;
}
.hv {
  height: 70px;
  width: 1px;
  background: #e7e7e7;
}
</style>
