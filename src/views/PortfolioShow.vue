<template>
  <div>
    <div class="container-fluid mb-4">
      <div class="row bg-white">
        <div class="container">
          <div class="row padding-25 bg-white">
            <div
              class="col-lg-10 col-md-9 col-sm-12 d-flex justify-content-start align-items-center "
              v-for="portfolioValue in portfolioValues"
              :key="portfolioValue.id"
            >
              <div class="image-user mr-4">
                <img
                  v-if="portfolioValue.user_img  != null"
                  :src="portfolioValue.user_img"
                  class="rounded-circle hw-70-c"
                />
                <div class=" rounded-circle hw-70-c letter-profile-img " v-else>
                  <span style="color:white;font-size:25px">{{
                    portfolioValue.user_first_name.charAt(0).toUpperCase()
                  }}</span>
                </div>
              </div>

              <div
                class="d-flex flex-column justify-content-center align-items-start "
              >
                <div class="portfolio-title">
                  <h5 class="heading-color">
                    {{ portfolioValue.title }}
                  </h5>
                </div>
                <div class="portfolio-author">
                  <a href="#">
                    <small class="primary-color">
                      <i class="fas fa-user "></i>
                      {{ portfolioValue.user_first_name }}
                      {{ portfolioValue.user_last_name }}
                    </small>
                  </a>
                </div>
                <div class="portfolio-date">
                  <small class="text-secondary">
                    <i class="far fa-clock"></i>
                    {{ portfolioValue.created_at | moment("from", "now") }}
                  </small>
                </div>
              </div>
            </div>
            <div
              class="col-lg-2 col-md-3 col-sm-12 p-4 d-flex justify-content-center align-items-center justify-content-md-end"
            >
              <button type="button" class="btn btn-hire">
                <i class="fas fa-briefcase"></i> Hire
              </button>
              <!-- <i class="far love fa-heart text-danger"></i> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-lg-9 col-md-8 col-sm-12"
          v-for="portfolioValue in portfolioValues"
          :key="portfolioValue.id"
        >
          <div class="row mr-lg-2 mr-md-2">
            <div class="col-12  mb-2  p-4 radios-5 bg-white ">
              <h6>Portfolio View</h6>
              <hr />
              <div
                class="port-view d-flex flex-column justify-content-center align-items-center "
              >
                <a
                  class="mb-2 border-img "
                  v-for="portfolioImage in portfolioImages"
                  :key="portfolioImage.id"
                  data-fancybox="gallery"
                  :href="portfolioImage.name"
                >
                  <img class="img-fluid" :src="portfolioImage.name" />
                </a>

                <!-- <img :src="portfolioImage.name" class="img-fluid border-img mb-2" v-for="portfolioImage in portfolioImages"
                :key="portfolioImage.id"> -->
              </div>
            </div>
            <div class="col-12 mb-4 radios-5  p-4 bg-white ">
              <div class="port-det ">
                <h6>Portfolio Details</h6>
                <hr />
                <p>{{ portfolioValue.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 ">
          <div class="row">
            <div class="col-12 mb-2 radios-5 bg-white p-4 ">
              <div class="skills ">
                <h6>Skills</h6>
                <hr />
                <a
                  href=""
                  @click="pushskill(portfolioValuesSkill.name)"
                  class="label-tag "
                  v-for="portfolioValuesSkill in portfolioValuesSkills"
                  :key="portfolioValuesSkill.id"
                  ><i class="fas fa-tag"></i> {{ portfolioValuesSkill.name }}</a
                >
              </div>
            </div>

            <div class="col-12 radios-5 mb-4 p-4 bg-white">
              <div class="row">
                <div class="col-12">
                  <h6>Share Portfolio</h6>
                  <hr />
                </div>
              </div>

              <div class="share">
                <div class="mb-2">
                  <input
                    onClick="this.setSelectionRange(0, this.value.length)"
                    type="text"
                    class="form-control"
                    :id="portfolioPath"
                    :aria-describedby="portfolioPath"
                    :placeholder="portfolioPath"
                    :value="projectFullPath"
                    readonly
                  />
                </div>

                <div
                  class="shareicon"
                  v-for="portfolioValue in portfolioValues"
                  :key="portfolioValue.id"
                >
                  <ShareNetwork
                    network="facebook"
                    :url="projectFullPath"
                    :title="portfolioValue.title"
                    :description="portfolioValue.desc"
                  >
                    <a href="#" class="fa fa-facebook "></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="twitter"
                    :url="projectFullPath"
                    :title="portfolioValue.title"
                    :description="portfolioValue.desc"
                  >
                    <a href="#" class="fa fa-twitter "></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="whatsapp"
                    :url="projectFullPath"
                    :title="portfolioValue.title"
                    :description="portfolioValue.desc"
                  >
                    <a href="#" class="fa fa-whatsapp"></a>
                  </ShareNetwork>
                  <ShareNetwork
                    network="linkedin"
                    :url="projectFullPath"
                    :title="portfolioValue.title"
                  >
                    <a href="#" class="fa fa-linkedin"></a>
                  </ShareNetwork>
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
h6 {
  color: rgb(87, 87, 87);
}

hr {
  display: block;
  margin-left: -24px;
  margin-right: -24px;
  border-width: 1px;
  border-color: #f0f0f0;
}
h5 {
  color: rgb(87, 87, 87);
}
p {
  font-size: 14px;
  color: rgb(87, 87, 87);
}
.hw-70-c {
  height: 70px !important;
  width: 70px !important;
}
.letter-profile-img {
  background-color: #41b883;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
}
.padding-25 {
  padding: 25px;
}
.primary-color {
  color: #41b883;
}
.second-color {
  color: #369a6e;
}
.heading-color {
  color: rgb(87, 87, 87);
}
small {
  font-size: 90% !important;
}
.love {
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
}
.love:hover {
  background-color: #dc354627 !important;
  border-radius: 100%;
}
.radios-5 {
  border-radius: 5px;
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
}

.label-tag:hover {
  background: #369a6e;
  transition: 0.3s;
}
.btn-hire {
  background: #41b883;
  color: white;
  /* font-size: 12px; */
}
.btn-hire:hover {
  background: #369a6e;
}
.portfolio-author a small {
  transition: 0.3s;
}
.portfolio-author a {
  text-decoration: none;
}
.portfolio-author a small:hover {
  color: #369a6e;
  transition: 0.3s;
}
.shareicon {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.shareicon a {
  text-decoration: none;
}
.fa {
  padding: 10px;
  font-size: 20px;
  width: 40px;
  height: 40px;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Add a hover effect if you want */
.fa:hover {
  opacity: 0.7;
  transition: 0.3s;
}

/* Set a specific color for each brand */

/* Facebook */
.fa-facebook {
  /* background: #3B5998; */
  background: #3b5998;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: white;
  /* border-radius: 50%; */
}

.fa-twitter {
  background: #55acee;
  color: white;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: #fff;
}

.fa-whatsapp {
  background: #25d366;
  color: white;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: #fff;
}
.fa-linkedin {
  background: #2867b2;
  color: white;
  border-radius: 5px;
  border: 1px rgb(236, 236, 236) solid;
  color: #fff;
}
.border-img {
  border: 1px solid #f1f1f1;
  padding: 5px;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      portfolioId: "",
      portfolioPath: "",
      portfolioValues: [],
      portfolioValuesSkills: [],
      portfolioImages: [],
      projectFullPath:""
    };
  },
  methods: {
    fetchPortfolioId() {
      this.portfolioPath = this.$route.path;
      var str = this.$route.path;
      var n = str.lastIndexOf("/");
      var result = str.substring(n + 1);
      this.portfolioId = result;
    },
    loadPortfolioData() {
      axios
        .get(
          "http://localhost/vue-api-backend/public/api/portfolio/portfolios/portfolios-show/" +
            this.portfolioId
        )
        .then((response) => {
          this.portfolioValues = response.data;
          // console.log(response.data);
        });
    },
    loadPortfolioSkillsData() {
      axios
        .get(
          "http://localhost/vue-api-backend/public/api/portfolio/portfolios/portfolios-show-skills/" +
            this.portfolioId
        )
        .then((response) => {
          this.portfolioValuesSkills = response.data;
        });
    },
    loadPortfolioImagesData() {
      axios
        .get(
          "http://localhost/vue-api-backend/public/api/portfolio/portfolios/portfolios-show-images?pm=" +
            this.portfolioId
        )
        .then((response) => {
          this.portfolioImages = response.data;
          // console.log(response.data);
        });
    },
    pushskill(skillNamePressed) {
      // console.log(skillNamePressed);
      // let skillNamePressedvar=skillNamePressed;
      this.$store.commit("SET_skillPressed", skillNamePressed);
      this.$router.push({ path: "/portfolios" });
      // this.$store.dispatch('SET_skillPressed', skillNamePressed)
    },
      fetchFullPath(){
      var path = this.$route.fullPath;
      var websiteUrl="website-url";
      this.projectFullPath = websiteUrl+path;
    }
  },
  mounted() {
    this.fetchPortfolioId();
    this.loadPortfolioData();
    this.loadPortfolioSkillsData();
    this.loadPortfolioImagesData();
    this.fetchFullPath();
  },
};
</script>
