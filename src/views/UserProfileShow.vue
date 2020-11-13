<template>
  <section>
    <div class="container" v-for="userValue in userValues" :key="userValue.id">
      <div class="row">
        <div class="col-12">
          <div
            class="profile-header bg-white my-4 p-4 d-flex justify-content-between align-items-center p-2"
          >
            <div
              class="d-flex flex-column justify-content-start align-items-center"
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

              <span>{{ userValue.user_name }}</span>
            </div>

            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <span
                ><i class="fas fa-user-tag"></i> {{ userValue.category }}</span
              >
              <span>
                <i class="fas fa-map-marker-alt"></i>
                {{ userValue.location }}</span
              >
            </div>

            <div
              class="d-flex flex-column justify-content-start align-items-start"
            >
              <div style="position: relative; width: 220px">
                <radar-chart :user-data="arrayuserData"></radar-chart>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-9 col-md-8 col-sm-12">
          <div class="about bg-white my-2 p-4">belal</div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="skills bg-white my-2 p-4">belal</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.circle {
  height: 90px;
  width: 90px;
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
  height: 90px;
  width: 90px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 13px 53px -30px rgba(0, 0, 0, 0.45);
  border: 3px solid #e0e0e0;
}
</style>

<script>
import axios from "axios";
import RadarChart from "@/components/RadarChart";

export default {
  components: {
    RadarChart,
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
            ProjectsRate,
            PortfolioRate,
            ProfileRate,
            OffersRate,
            RateRate,
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