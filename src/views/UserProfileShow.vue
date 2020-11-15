<template>
  <section>
    <div class="container" v-for="userValue in userValues" :key="userValue.id">
      <div class="row my-4 ">
        <div class="col-12">
          <div class="row">
            <div class="col-12 radios-5 bg-white pt-4 pr-4 pl-4">
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
                </div>

                                    <div
                  class="d-flex flex-column justify-content-center align-items-center"
                >
                  <div style="position: relative; width: 225px">
                    <radar-chart :user-data="arrayuserData"></radar-chart>
                  </div>
                </div>
               
              </div>

              <nav class="navbar navbar-expand-lg navbar-light bg-white p-0 mx-0">

              <div class="navbar-collapse">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active-user-nav" href="#"><i class='bx bx-user'></i> About me<span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#"><i  class='bx bx-photo-album'></i> Portfolio</a>
                  <a class="nav-item nav-link" href="#"><i class='bx bx-spreadsheet'></i> Offers</a>
                  <a class="nav-item nav-link" href="#"><i class='bx bx-briefcase-alt'></i> Projects</a>
                  <a class="nav-item nav-link" href="#"><i class='bx bx-star' ></i> Rates</a>
                </div>
              </div>
            </nav>
              </div>

              <div class="d-block d-sm-block d-md-none">
                                                  <div
                class="profile-header d-flex flex-column justify-content-center align-items-center "
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

            </div>
          </div>
        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-9 col-md-8 col-sm-12">
          <div class="row mr-lg-2 mr-md-2">
            <div class="col-12 mb-2  radios-5 bg-white p-4">
              <div class="about">
                <h6>About Me</h6>
                <hr />

                <p style="color: #666">{{ userValue.about }}</p>
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
            <div class="col-12 bg-white  p-4 radios-5">
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
a{
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
.active-user-nav{
border-bottom: 3px solid #41b883;
background: #f5f4f9;
}
.nav-link{
  padding: 12px;
  color:#666
}
.nav-link:hover{
background: #f5f4f9;
color:#666
}
</style>

<script>
import axios from "axios";
import RadarChart from "@/components/RadarChart";
import StarRating from "vue-star-rating";

export default {
  components: {
    RadarChart,
    StarRating
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