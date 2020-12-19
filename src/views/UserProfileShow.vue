<template>
  <section>
    <div class="container" v-for="userValue in userValues" :key="userValue.id">
      <div class="row my-4">
        <div class="col-12">
          <div class="row">
            <div class="col-12 radios-5 bg-white pt-4 pr-4 pl-4">
              <div class="">
                <div class="d-none d-md-block">
                  <div
                    class="profile-header d-flex justify-content-between align-items-center mx-4"
                  >
                    <div
                      class="d-flex flex-column justify-content-center align-items-center"
                    >
                      <img
                        v-if="userValue.user_img != null"
                        class="circle2"
                        :src="userValue.user_img"
                      />

                      <div v-else class="circle">
                        <span style="color: white; font-size: 25px">{{
                          userValue.user_name.charAt(0).toUpperCase()
                        }}</span>
                      </div>

                      <h6 class="mt-4">{{ userValue.user_name }}</h6>
                    </div>

                    <div
                      class="d-flex flex-column justify-content-center align-items-start"
                      style="color: #666"
                    >
                      <p>
                        <i class="fas fa-user-tag"></i> {{ userValue.category }}
                      </p>
                      <p>
                        <i class="fas fa-map-marker-alt"></i>
                        {{ userValue.location }}
                      </p>
                      <p>
                        <i class="bx bxs-user"></i>
                        {{
                          userValue.role_name.charAt(0).toUpperCase() +
                          userValue.role_name.slice(1)
                        }}
                      </p>
                    </div>

                    <div
                      class="d-flex flex-column justify-content-center align-items-center"
                    >
                      <div style="position: relative; width: 225px">
                        <radar-chart :user-data="arrayuserData"></radar-chart>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white p-0 mx-0">
              <div class="navbar-collapse">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active-user-nav" href="#"><i class='bx bx-user'></i> About me<span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#"><i  class='bx bx-photo-album'></i> Portfolio</a>
                  <a class="nav-item nav-link" href="#"><i class='bx bx-spreadsheet'></i> Offers</a>
                  <a class="nav-item nav-link" href="#"><i class='bx bx-briefcase-alt'></i> Projects</a>
                  <a class="nav-item nav-link" href="#"><i class='bx bx-star' ></i> Rates</a>
                </div>
              </div>
            </nav> -->
              </div>

              <div class="d-block d-sm-block d-md-none">
                <div
                  class="profile-header d-flex flex-column justify-content-center align-items-center"
                >
                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                  >
                    <img
                      v-if="userValue.user_img != null"
                      class="circle2"
                      :src="userValue.user_img"
                    />

                    <div v-else class="circle">
                      <span style="color: white; font-size: 25px">{{
                        userValue.user_name.charAt(0).toUpperCase()
                      }}</span>
                    </div>

                    <h6 class="mt-4">{{ userValue.user_name }}</h6>
                  </div>

                  <div
                    class="d-flex flex-column justify-content-center align-items-center"
                    style="color: #666"
                  >
                    <p>
                      <i class="fas fa-user-tag"></i> {{ userValue.category }}
                    </p>
                    <p>
                      <i class="fas fa-map-marker-alt"></i>
                      {{ userValue.location }}
                    </p>
                  </div>
                </div>
              </div>

              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-about-tab"
                    data-toggle="pill"
                    href="#pills-about"
                    role="tab"
                    aria-controls="pills-about"
                    aria-selected="true"
                    ><i class="bx bx-user"></i> About me</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-portfolio-tab"
                    data-toggle="pill"
                    href="#pills-portfolio"
                    role="tab"
                    aria-controls="pills-portfolio"
                    aria-selected="false"
                    ><i class="bx bx-photo-album"></i> Portfolio</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-offers-tab"
                    data-toggle="pill"
                    href="#pills-offers"
                    role="tab"
                    aria-controls="pills-offers"
                    aria-selected="false"
                    ><i class="bx bx-spreadsheet"></i> Offers</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-projects-tab"
                    data-toggle="pill"
                    href="#pills-projects"
                    role="tab"
                    aria-controls="pills-projects"
                    aria-selected="false"
                    ><i class="bx bx-briefcase-alt"></i> Projects</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-rates-tab"
                    data-toggle="pill"
                    href="#pills-rates"
                    role="tab"
                    aria-controls="pills-rates"
                    aria-selected="false"
                    ><i class="bx bx-star"></i> Rates</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-9 col-md-8 col-sm-12">
          <div class="row mr-lg-2 mr-md-2">
            <div class="col-12 mb-2 radios-5 bg-white p-4">
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-about"
                  role="tabpanel"
                  aria-labelledby="pills-about-tab"
                >
                  <div class="about">
                    <h6>About Me</h6>
                    <hr />
                    <p style="color: #666">{{ userValue.about }}</p>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-portfolio"
                  role="tabpanel"
                  aria-labelledby="pills-portfolio-tab"
                >
                  <div class="portfolio">
                    <h6>Portfolio</h6>
                    <hr />

                    <div class="row">
                      <div
                        class="col-lg-4 col-md-6 col-sm-6 pb-4 d-flex justify-content-center align-content-center pr-2 pl-2"
                        v-for="userPort in userValue.portfolios"
                        :key="userPort.id"
                      >
                        <router-link
                          class="card-link"
                          :to="'/portfolio/' + userPort.id"
                        >
                          <div class="card portfolio-card border-0 p-2">
                            <div
                              class="d-flex justify-content-start align-items-center"
                            >
                              <div
                                class="d-flex align-items-center px-1 w-img-100"
                              >
                                <img
                                  v-if="userValue.user_img != null"
                                  class="hw-35-c rounded-circle"
                                  :src="userValue.user_img"
                                  alt="user image"
                                />
                                <div
                                  class="hw-35-c letter-profile-img rounded-circle"
                                  v-else
                                >
                                  <span style="color: white">{{
                                    userValue.user_name.charAt(0).toUpperCase()
                                  }}</span>
                                </div>
                              </div>
                              <div class="pl-2">
                                <div
                                  class="justify-content-center pr-1 align-content-end"
                                >
                                  <h6 class="card-name m-0 h-fit f-15">
                                    {{ userValue.user_name }}
                                  </h6>

                                  <small class="text-muted">{{
                                    userPort.title.substring(0, 20) + ".."
                                  }}</small>
                                </div>
                              </div>
                            </div>

                            <img
                              class="card-img-top img-raduis-bottom mt-2"
                              :src="userPort.portfolio_images[0].name"
                              :alt="userPort.desc"
                            />
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-offers"
                  role="tabpanel"
                  aria-labelledby="pills-offers-tab"
                >
                  <div class="offers">
                    <h6>Offers</h6>
                    <hr />

                    <div class="row">
                      <div class="col-12">
                        <router-link
                          v-for="userOffers in userValue.user_offers"
                          :key="userOffers.id"
                          :to="'/project/' + userOffers.project.id"
                          class="d-flex justify-content-start align-items-center p-2 project-item"
                        >
                          <!-- <div
                            class="d-flex flex-column justify-content-center align-items-center"
                          >
                            <img
                              v-if="userValue.user_img != null"
                              class="hw-35-c mr-4 rounded-circle"
                              :src="userValue.user_img"
                              alt="user image"
                            />
                            <div
                              class="hw-35-c letter-profile-img rounded-circle mr-4"
                              v-else
                            >
                              <span style="color: white; font-size: 20px">{{
                                userValue.user_name
                                  .charAt(0)
                                  .toUpperCase()
                              }}</span>
                            </div>
                          </div> -->
                          <div
                            class="d-flex flex-column justify-content-center align-items-start"
                          >
                            <h6 class="mb-0">{{ userOffers.project.title }}</h6>
                            <div
                              class="d-flex justify-content-start align-items-center"
                            >
                              <!-- <div class="auth mr-2 text-muted">
                                <i
                                  class="fas fa-user"
                                  style="font-size: 10px"
                                ></i>
                                <small> {{ filteredProject.user_name }}</small>
                              </div> -->
                              <div class="time mr-2 text-muted">
                                <i
                                  class="fas fa-clock"
                                  style="font-size: 10px"
                                ></i>
                                <small>
                                  {{
                                    userOffers.project.created_at
                                      | moment("from", "now")
                                  }}
                                </small>
                              </div>
                                 <small class="status-project">
                                  {{ userOffers.status}}
                              </small>
                              <!-- <div class="offers mr-2 text-muted">
                                <i
                                  class="fas fa-user-tie"
                                  style="font-size: 10px"
                                ></i>
                                <small>
                                  {{
                                    filteredProject.offers_count
                                  }}
                                  offers</small
                                >
                              </div> -->
                            </div>
                            <p class="text-muted" style="font-size: 14px">
                              {{
                                userOffers.project.desc.substring(0, 150) + ".."
                              }}
                            </p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-projects"
                  role="tabpanel"
                  aria-labelledby="pills-projects-tab"
                >
                  <div class="projects">
                    <h6>Projects</h6>
                    <hr />

                    <div class="row">
                      <div class="col-12">
                        <router-link
                          :to="'/project/' + userProject.id"
                          class="d-flex justify-content-start align-items-center p-2 project-item"
                          v-for="userProject in userValue.projects"
                          :key="userProject.id"
                        >
                          <div
                            class="d-flex flex-column justify-content-center align-items-center"
                          >
                            <img
                              v-if="userValue.user_img != null"
                              class="hw-35-c mr-4 rounded-circle"
                              :src="userValue.user_img"
                              alt="user image"
                            />
                            <div
                              class="hw-35-c letter-profile-img rounded-circle mr-4"
                              v-else
                            >
                              <span style="color: white; font-size: 20px">{{
                                userValue.user_name.charAt(0).toUpperCase()
                              }}</span>
                            </div>
                          </div>
                          <div
                            class="d-flex flex-column justify-content-center align-items-start"
                          >
                            <h6 class="mb-0">{{ userProject.title }}</h6>
                            <div
                              class="d-flex justify-content-start align-items-center"
                            >
                              <div class="auth mr-2 text-muted">
                                <i
                                  class="fas fa-user"
                                  style="font-size: 10px"
                                ></i>
                                <small> {{ userValue.user_name }}</small>
                              </div>
                              <div class="time mr-2 text-muted">
                                <i
                                  class="fas fa-clock"
                                  style="font-size: 10px"
                                ></i>
                                <small>
                                  {{
                                    userProject.created_at
                                      | moment("from", "now")
                                  }}
                                </small>
                              </div>
                              <small class="mb-0 status-project">{{
                                userProject.status
                              }}</small>
                              <!-- <div class="offers mr-2 text-muted">
                                <i
                                  class="fas fa-user-tie"
                                  style="font-size: 10px"
                                ></i>
                                <small>
                                  {{
                                    filteredProject.offers_count
                                  }}
                                  offers</small
                                >
                              </div> -->
                            </div>
                            <p class="text-muted" style="font-size: 14px">
                              {{ userProject.desc.substring(0, 150) + ".." }}
                            </p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="pills-rates"
                  role="tabpanel"
                  aria-labelledby="pills-rates-tab"
                >
                  <div class="rates">
                    <h6>Rates</h6>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="row">
            <div class="col-12 bg-white mb-2 p-4 radios-5">
              <div class="statistics">
                <h6>Statistics</h6>
                <hr />
                <div class="d-flex justify-content-between align-items-center">
                  <p class="">Rate</p>
                  <star-rating
                    class="mb-2"
                    :rating="userValue.rate"
                    :border-width="2"
                    :read-only="true"
                    inactive-color="#fff"
                    border-color="#ffd055"
                    :star-size="13"
                    :show-rating="false"
                    :star-points="[
                      23,
                      2,
                      14,
                      17,
                      0,
                      19,
                      10,
                      34,
                      7,
                      50,
                      23,
                      43,
                      38,
                      50,
                      36,
                      34,
                      46,
                      19,
                      31,
                      17,
                    ]"
                  ></star-rating>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <p>Joind</p>
                  <p>
                    {{ userValue.created_at | moment("from", "now") }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 bg-white p-4 radios-5">
              <div class="skills">
                <h6>My Skills</h6>
                <hr />

                <span
                  class="label-tag"
                  v-for="userSkills in userValue.skills"
                  :key="userSkills.id"
                  ><i class="fas fa-tag"></i> {{ userSkills.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
hr {
  display: block;
  margin-left: -24px;
  margin-right: -24px;
  border-width: 1px;
  border-color: #f0f0f0;
}
.circle {
  height: 120px;
  width: 120px;
  background: #41b883;
  border-radius: 50%;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  border: 3px solid #e0e0e0;
}
.hw-35-c {
  height: 35px !important;
  width: 35px !important;
}
.letter-profile-img {
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  background-color: #41b883;
}
.circle2 {
  height: 120px;
  width: 120px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  border: 3px solid #e0e0e0;
}
.radios-5 {
  border-radius: 5px;
}
h6 {
  color: rgb(87, 87, 87);
}
p {
  font-size: 14px;
  color: rgb(87, 87, 87);
}
p {
  font-size: 14px;
  color: rgb(87, 87, 87);
}
a {
  font-size: 15px;
  color: rgb(87, 87, 87);
}
.label-tag {
  display: inline-block;
  height: 24px;
  line-height: 24px;
  position: relative;
  margin: 0 16px 8px 0;
  padding: 0 10px 0 10px;
  background: #41b883;
  /* -webkit-border-bottom-right-radius: 3px;
  border-bottom-right-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  border-top-right-radius: 3px; */
  /* -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  text-decoration: none;
  /* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */
  transition: 0.3s;
  cursor: pointer;
}

.label-tag:hover {
  background: #369a6e;
  transition: 0.3s;
}
/* .active {
  border-bottom: 3px solid #41b883;
  background: #f5f4f9;
} */
.nav-link {
  padding: 12px;
  color: #666;
}
.nav-link:hover {
  background: #f5f4f9;
  color: #666;
  border-radius: 0;
  border-bottom: 3px solid #f5f4f9;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #666;
  background-color: #f5f4f9;
  border-radius: 0;
  border-bottom: 3px solid #41b883;
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
</style>

<script>
import axios from "axios";
import RadarChart from "@/components/RadarChart";
import StarRating from "vue-star-rating";

export default {
  components: {
    RadarChart,
    StarRating,
  },
  data() {
    return {
      userId: "",
      userPath: "",
      userValues: [],
      arrayuserData: [],
    };
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
  },

  methods: {
    fetchUserId() {
      this.userPath = this.$route.path;
      var str = this.$route.path;
      var n = str.lastIndexOf("/");
      var result = str.substring(n + 1);
      this.userId = result;
    },

    loadUserData() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/user/user/" + this.userId
        )
        .then((response) => {
          this.userValues = response.data;

          var ProjectsRate = 0;
          var PortfolioRate = 0;
          var SkillsRate = 0;
          var ProfileRate = 0;
          var OffersRate = 0;

          if (this.userValues.data.projects_count >= 50) {
            ProjectsRate = 5;
          } else {
            ProjectsRate = this.userValues.data.projects_count / 10;
            if (ProjectsRate < 1) {
              ProjectsRate = ProjectsRate + 1;
            }
          }

          if (this.userValues.data.portfolios_count >= 50) {
            PortfolioRate = 5;
          } else {
            PortfolioRate = this.userValues.data.portfolios_count / 10;
            if (PortfolioRate < 1) {
              PortfolioRate = PortfolioRate + 1;
            }
          }

          if (this.userValues.data.skills_count >= 50) {
            SkillsRate = 5;
          } else {
            SkillsRate = this.userValues.data.skills_count / 10;
            if (SkillsRate < 1) {
              SkillsRate = SkillsRate + 1;
            }
          }

          if (this.userValues.data.user_offers_count >= 50) {
            OffersRate = 5;
          } else {
            OffersRate = this.userValues.data.user_offers_count / 10;
            if (OffersRate < 1) {
              OffersRate = OffersRate + 1;
            }
          }

          if (
            this.userValues.data.user_img != null &&
            this.userValues.data.skills_count != 0 &&
            this.userValues.data.portfolios_count != 0
          ) {
            ProfileRate = 4;
          } else if (
            this.userValues.data.user_img == null &&
            this.userValues.data.skills_count != 0 &&
            this.userValues.data.portfolios_count != 0
          ) {
            ProfileRate = 3;
          } else if (
            this.userValues.data.user_img != null &&
            this.userValues.data.skills_count == 0 &&
            this.userValues.data.portfolios_count != 0
          ) {
            ProfileRate = 3;
          } else if (
            this.userValues.data.user_img != null &&
            this.userValues.data.skills_count != 0 &&
            this.userValues.data.portfolios_count == 0
          ) {
            ProfileRate = 3;
          } else if (
            this.userValues.data.user_img == null &&
            this.userValues.data.skills_count == 0 &&
            this.userValues.data.portfolios_count != 0
          ) {
            ProfileRate = 2;
          } else if (
            this.userValues.data.user_img != null &&
            this.userValues.data.skills_count == 0 &&
            this.userValues.data.portfolios_count == 0
          ) {
            ProfileRate = 2;
          } else if (
            this.userValues.data.user_img == null &&
            this.userValues.data.skills_count != 0 &&
            this.userValues.data.portfolios_count == 0
          ) {
            ProfileRate = 2;
          } else if (
            this.userValues.data.user_img == null &&
            this.userValues.data.skills_count == 0 &&
            this.userValues.data.portfolios_count == 0
          ) {
            ProfileRate = 1;
          }

          var RateRate = this.userValues.data.rate;

          this.arrayuserData = [
            RateRate,
            ProfileRate,
            PortfolioRate,
            OffersRate,
            ProjectsRate,
            SkillsRate,
          ];
        });
    },
  },
  mounted() {
    this.fetchUserId();
    this.loadUserData();
  },
};
</script>