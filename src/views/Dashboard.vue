<template>
  <div class="dashboard">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <div
            class="author-content d-flex flex-column bg-white justify-content-center align-items-center mb-4 p-4 radios-5"
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
          </div>
          <div
            class="author-content bg-white author-content-settings d-flex flex-column p-4 mb-4 justify-content-center align-items-start radios-5"
          >
            <router-link class="p-2 side-item active-side-nav" to="#"
              ><i class="bx bx-home"></i> Dashboard</router-link
            >
            <router-link class="p-2 side-item" to="/account-profile"
              ><i class="bx bx-user"></i> My Account</router-link
            >
            <router-link class="p-2 side-item" to="#"
              ><i class="bx bx-credit-card-front"></i> Account
              Balance</router-link
            >
            <router-link class="p-2 side-item" to="#"
              ><i class="bx bx-briefcase-alt"></i> My Projects</router-link
            >
            <router-link class="p-2 side-item" to="#"
              ><i class="bx bx-photo-album"></i> My portfolio</router-link
            >
          </div>
          <!-- <div
            class="heading-color author-content bg-white author-content-settings d-flex flex-column p-4 mb-4 justify-content-center align-items-center radios-5"
          >
            <span class="mb-2">New Messages</span>
            <h6 style="font-size: 25px; color: black">10</h6>
            <div class="hr mb-2"></div>

            <div class="d-flex justify-content-center align-items-center">
              <span class="mr-4"
                >Inbox
                <span style="font-size: 17px; font-weight: 500; color: black"
                  >15</span
                ></span
              >
              <span class=""
                >Sent
                <span style="font-size: 17px; font-weight: 500; color: black"
                  >3</span
                ></span
              >
            </div>
          </div> -->
          <div
            class="heading-color p-4 author-content bg-white author-content-settings d-flex flex-column mb-4 justify-content-center align-items-center radios-5"
          >
            <span class="mb-2">My portfolio</span>
            <h6 style="font-size: 25px; color: black">{{userValuesDashboard.portfolio_count}}</h6>
            <div class="hr mb-2"></div>
            <router-link class="link-sec" to="#"
              ><i class="bx bx-plus"></i> Add New</router-link
            >
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <div
            class="balance-content d-flex bg-white flex-column justify-content-center align-items-around mb-4 radios-5 p-4"
          >
                      <div class="d-flex justify-content-around align-items-center">
                                    <div
              style="color: #41b883"
              class="d-flex bg-white flex-column justify-content-center align-items-center"
            >
              <h5 style="font-weight: 400">Total balance</h5>
              <h5 style="font-size: 35px; font-weight: 400">${{userValuesDashboard.balance_total}}</h5>
            </div>
            <div class="hv"></div>
            <div
              class="heading-color d-flex bg-white flex-column justify-content-center align-items-center"
            >
              <h5 style="font-weight: 400">Withdrawable balance</h5>
              <h5 style="font-size: 35px; font-weight: 400">${{userValuesDashboard.withdrawable}}</h5>
            </div>
                      </div>

              <div class="hr mt-2"></div>
            <div class="d-flex justify-content-around align-items-center mt-2">
                <span class="heading-color">Outstanding blance ${{userValuesDashboard.outstanding}}</span>
                <span class="heading-color">Under review balance ${{userValuesDashboard.under_review}}</span>
            </div>

          </div>

          <div
            class="heading-color  d-flex bg-white justify-content-around align-items-center mb-4 radios-5 p-4"
          >
            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >
              <h5 style="font-size: 35px; font-weight: 400">{{userValuesDashboard.offers_count}}</h5>
              <span>My Offers</span>
            </div>
                        <div class="hv"></div>

            <div
              class="d-flex flex-column justify-content-center align-items-center"
            >

            <div class="text-left">
            <span style="font-size:15px">Awaiting approval</span>
              <progress-bar style="width:300px" bar-color="#41b883"   size="small" :val="60" text="60%" ></progress-bar>
            </div>

                        <div class="text-left">
                          <span style="font-size:15px">Completed Projects</span>
              <progress-bar style="width:300px" bar-color="#41b883"  size="small" :val="40" text="40%" ></progress-bar>
            </div>

                        <div class="text-left">
                          <span style="font-size:15px">In Proccess</span>
              <progress-bar style="width:300px" bar-color="#41b883"  size="small" :val="30" text="30%" ></progress-bar>
            </div>


              </div>
          </div>
          <div
            class="d-flex bg-white flex-column p-4 justify-content-center align-items-center mb-4 radios-5"
          >
                <span class="mb-4">Lastest Projects Added</span>
                <div class="hr mb-4"></div>
                    <div
                      v-for="filteredProject in filteredProjects.slice(0, 5)"
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
                            class=" hw-60-c  mr-4 rounded-circle"
                            :src="filteredProject.user_img"
                            alt="user image"
                          />
                          <div
                            class="hw-60-c letter-profile-img rounded-circle mr-4"
                            v-else
                          >
                            <span style="color:white;font-size:20px">{{
                              filteredProject.user_name.charAt(0).toUpperCase()
                            }}</span>
                          </div>
                        </div>
                        <div
                          class="d-flex flex-column justify-content-center align-items-start"
                        >
                          <h6 class="mb-0">{{ filteredProject.title }}</h6>
                          <div
                            class="d-flex justify-content-start align-items-center "
                          >
                            <div class="auth mr-2 text-muted">
                              <i class="fas fa-user" style="font-size:10px"></i>
                              <small> {{ filteredProject.user_name }}</small>
                            </div>
                            <div class="time mr-2 text-muted">
                              <i
                                class="fas fa-clock"
                                style="font-size:10px"
                              ></i>
                              <small>
                                {{
                                  filteredProject.created_at
                                    | moment("from", "now")
                                }}
                              </small>
                            </div>
                            <div class="offers mr-2 text-muted">
                              <i
                                class="fas fa-user-tie"
                                style="font-size:10px"
                              ></i>
                              <small>
                                {{ filteredProject.offers_count }} offers</small
                              >
                            </div>
                          </div>
                          <p class="text-muted" style="font-size:14px">
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
</template>

<script>
import ProgressBar from 'vue-simple-progress'
import axios from "axios";

export default {  
     
  components: { 
      ProgressBar
   },
  data() {
    return {
      userValuesDashboard:[],
      filteredProjects:[],
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },

  },
      methods:{
        userDataLoad() {
        axios
          .get(
            "https://vue-api-backend.herokuapp.com/api/user/user-dashboard/" +
              this.user.id
          )
          .then((response) => {
            this.userValuesDashboard=response.data;
          });

    },

        categoriesFiltter() {
      this.filteredProjects = [];
      let payload = {
        cq: this.user.category_id
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

    },
    mounted() {
    this.userDataLoad();
    this.categoriesFiltter();

    }
};
</script>

<style scoped>
.radios-5 {
  border-radius: 5px;
}
.link-sec {
  text-decoration: none;
  color: #575757;
  transition: 0.3s;
}
.link-sec:hover {
  color: #41b883;
  transition: 0.3s;
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
  text-decoration: none;
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
  text-decoration: none;
  color: #575757;
  width: 100%;
  font-size: 16px;
  transition: 0.3s;
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
