<template>
  <section class="portfolio" id="toolbar-chat" ref="toolbarChat">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <div v-if="LoggedInCheck">
            <router-link
              to="/my-portfolios"
              class="btn btn-primary mb-4 form-control backButton py-md-4 py-lg-0 d-flex justify-content-center align-items-center"
            >
              Create Your Portfolio
            </router-link>
          </div>
          <div v-else>
            <button
              class="btn btn-primary mb-4 form-control backButton py-md-4 py-lg-0 d-flex justify-content-center align-items-center"
              @click="gotToSignup()"
            >
              Create Your Portfolio
            </button>
          </div>

          <div class="input-group mb-4">
            <input
              type="text"
              class="form-control"
              v-model="query"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="Search"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary backButton"
                v-if="!searchLoading"
                @click="search()"
                type="button"
              >
                <i class="fas fa-search"></i>
              </button>
              <button
                class="btn btn-primary backButton"
                v-if="searchLoading"
                disabled="disabled"
                type="button"
              >
                <i class="fas fa-spinner"></i>
              </button>
            </div>
          </div>

          <div class="text-left mb-4">
            <h6 class="iconC2">Categories</h6>
            <div
              class=""
              v-for="categoriesValue in categoriesValues"
              :key="categoriesValue.name"
            >
              <label class="con iconC2">
                <input
                  type="checkbox"
                  :value="categoriesValue.name"
                  v-model="cquery"
                  :id="categoriesValue.name"
                  @change="categories()"
                />
                <span class="checkmark"></span>
                {{ categoriesValue.desc }}
              </label>
            </div>
          </div>

          <div class="text-left mb-4">
            <h6 class="iconC2">Skills</h6>

            <multiselect
              v-model="value"
              open-direction="bottom"
              tag-placeholder="Skills"
              :hide-selected="false"
              placeholder="Choose Skills"
              label="name"
              track-by="name"
              :close-on-select="false"
              :options="options"
              :multiple="true"
              :taggable="true"
              :show-no-results="true"
              @input="dispatchAction()"
            ></multiselect>
          </div>
        </div>
        <div class="col-md-9 col-sm-12">
          <!-- <div v-show="value2" class="row">
            <div class="col-12">
            <h6 ><b>Results</b> {{value2}} Skill :</h6>
            </div>
          </div> -->
          <!-- <vcl-instagram primary="#dfdfdf"></vcl-instagram> -->

          <div v-if="portfoliosLoading">
            <div class="row">
              <skelton-card v-for="index in 18" :key="index"></skelton-card>
            </div>
          </div>

          <div v-else>
            <div v-if="searchPortfolios.length">
              <div class="row">
                <div
                  class="col-lg-4 col-md-6 col-sm-6 pb-4 d-flex justify-content-center align-content-center pr-2 pl-2"
                  v-for="searchPortfolio in searchPortfolios"
                  :key="searchPortfolio.id"
                >
                  <router-link
                    class="card-link"
                    :to="'portfolio/' + searchPortfolio.id"
                  >
                    <div class="card portfolio-card border-0 p-2">
                      <div
                        class="d-flex justify-content-start align-items-center"
                      >
                        <div class="d-flex align-items-center px-1 w-img-100">
                          <img
                            v-if="searchPortfolio.user.user_img != null"
                            class="hw-35-c rounded-circle"
                            :src="searchPortfolio.user.user_img"
                            alt="user image"
                          />
                          <div
                            class="hw-35-c letter-profile-img rounded-circle"
                            v-else
                          >
                            <span style="color: white">{{
                              searchPortfolio.user.first_name
                                .charAt(0)
                                .toUpperCase()
                            }}</span>
                          </div>
                        </div>
                        <div class="pl-2">
                          <div
                            class="justify-content-center pr-1 align-content-end"
                          >
                            <h6 class="card-name m-0 h-fit f-15">
                              {{ searchPortfolio.user.first_name }}
                              {{ searchPortfolio.user.last_name }}
                            </h6>

                            <small class="text-muted">{{
                              searchPortfolio.title.substring(0, 20) + ".."
                            }}</small>
                          </div>
                        </div>
                      </div>
                      <img
                        class="card-img-top img-raduis-bottom"
                        :src="searchPortfolio.portfolio_images[0].name"
                        :alt="searchPortfolio.desc"
                      />
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <div v-else>
              <div class="row">
                <div
                  class="col-lg-4 col-md-6 col-sm-6 pb-4 d-flex justify-content-center align-content-center pr-2 pl-2"
                  v-for="Portfolio in Portfolios.data"
                  :key="Portfolio.id"
                >
                  <router-link
                    class="card-link"
                    :to="'portfolio/' + Portfolio.id"
                  >
                    <div class="card portfolio-card border-0 p-2">
                      <div
                        class="d-flex justify-content-start align-items-center"
                      >
                        <div class="d-flex align-items-center px-1 w-img-100">
                          <img
                            v-if="Portfolio.user.user_img != null"
                            class="hw-35-c rounded-circle"
                            :src="Portfolio.user.user_img"
                            alt="user image"
                          />
                          <div
                            class="hw-35-c letter-profile-img rounded-circle"
                            v-else
                          >
                            <span style="color: white">{{
                              Portfolio.user.first_name.charAt(0).toUpperCase()
                            }}</span>
                          </div>
                        </div>
                        <div class="pl-2">
                          <div
                            class="justify-content-center pr-1 align-content-end"
                          >
                            <h6 class="card-name m-0 h-fit f-15">
                              {{ Portfolio.user.first_name }}
                              {{ Portfolio.user.last_name }}
                            </h6>

                            <small class="text-muted">{{
                              Portfolio.title.substring(0, 20) + ".."
                            }}</small>
                          </div>
                        </div>
                      </div>
                      <img
                        class="card-img-top img-raduis-bottom"
                        :src="Portfolio.portfolio_images[0].name"
                        :alt="Portfolio.desc"
                      />
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="row">
                <div class="col-12 pl-2">
                  <pagination
                    :data="Portfolios"
                    :limit="1"
                    @pagination-change-page="getResults"
                    class="margin-b-0 border-0"
                  >
                  </pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.img-w-a {
  width: 640px !important;
  height: 480px !important;
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
.iconC {
  color: rgb(170, 170, 170);
}
.iconC2 {
  color: rgb(87, 87, 87);
}
/* The container */
.con {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 15px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.con input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: rgb(230, 230, 230);
}

/* On mouse-over, add a grey background color */
.con:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.con input:checked ~ .checkmark {
  background-color: #41b883;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.con input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.con .checkmark:after {
  left: 7px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.portfolio-card {
  background-color: white;
  transition: 0.3s;
  /* box-shadow: 0 4px 8px 0 rgba(230, 230, 230, 0.2), 0 6px 20px 0 rgba(219, 219, 219, 0.19); */
  color: #41b883;

  /* border-radius: 10px; */
}
.portfolio-card:hover {
  color: #369a6e;
  /* cursor: pointer; */
  transition: 0.3s;
  background-color: rgba(255, 255, 255, 0.548);

  /* border-radius: 10px; */
}
.h-fit {
  height: fit-content;
}
.f-15 {
  font-size: 16px;
}
.w-img-100 {
  height: 60px;
}
.margin-b-0 {
  margin-bottom: 0 !important ;
}
.backButton {
  background-color: #41b883;
  border: 0;
}
.backButton:hover {
  background-color: #369a6e;
}
.card-link {
  text-decoration: none;
}
</style>

<style>
.pagination > li > a {
  background-color: white;
  color: #41b883;
}

.pagination > li > a:focus,
.pagination > li > a:hover,
.pagination > li > span:focus,
.pagination > li > span:hover {
  color: #41b883;
  background-color: #eee;
  border-color: #ddd;
}

.pagination > .active > a {
  color: white;
  background-color: #41b883 !important;
  border: solid 1px #41b883 !important;
}

.pagination > .active > a:hover {
  background-color: #41b883 !important;
  border: solid 1px #41b883;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import SkeltonCard from "@/components/SkeltonCard";

export default {
  components: { Multiselect, SkeltonCard },
  data() {
    return {
      Portfolios: {},
      portfoliosLoading: false,
      error: false,
      errorS: "",
      query: "",
      searchLoading: false,
      searchPortfolios: [],
      cquery: [],
      value: [],
      value2: "",
      options: [],
      categoriesValues: [],
      portfolioImages: [],
    };
  },
  computed: {
    LoggedInCheck() {
      return this.$store.getters.get_loggedIn;
    },
  },
  methods: {
    loadPortfolios() {
      this.portfoliosLoading = true;
      axios
        .get("https://vue-api-backend.herokuapp.com/api/portfolio/portfolios")
        .then(({ data }) => {
          this.Portfolios = data;
          this.portfoliosLoading = false;
        });
    },
    getResults(page = 1) {
      this.$Progress.start();
      this.portfoliosLoading = true;
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios?page=" +
            page
        )
        .then((response) => {
          this.Portfolios = response.data;
          this.portfoliosLoading = false;
          this.$Progress.finish();
        });

      this.scrollTop();
    },
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 100);
      }, 20);
    },

    search: function () {
      if (this.query == "") {
        this.searchPortfolios = [];
        this.errorSearchMessageOpen();
        this.value2 = "";
      } else {
        // Clear the error message.
        this.error = "";
        // Empty the products array so we can fill it with the new products.
        this.searchPortfolios = [];
        // Set the loading property to true, this will display the "Searching..." button.

        this.$Progress.start();
        this.searchLoading = true;
        this.portfoliosLoading = true;
        this.value2 = "";

        // Making a get request to our API and passing the query to it.
        axios
          .get(
            "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/search?q=" +
              this.query
          )
          .then((response) => {
            // If there was an error set the error message, if not fill the products array.
            response.data.error
              ? this.errorSearchMessageOpen()
              : (this.searchPortfolios = response.data);
            // The request is finished, change the loading to false again.
            this.searchLoading = false;
            this.portfoliosLoading = false;

            // Clear the query.
            this.query = "";
            this.$Progress.finish();
          });
      }
    },
    errorSearchMessageOpen() {
      this.$toast.open({
        message: "No results found, please try with different keywords",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    categories() {
      this.$Progress.start();

      this.portfoliosLoading = true;

      this.value2 = "";

      this.searchPortfolios = [];
      let payload = {
        cq: this.cquery,
      };
      axios({
        url:
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/categories-filter",
        method: "post",
        data: payload,
      }).then((response) => {
        // console.log(response.data.data);
        this.searchPortfolios = response.data;
        this.portfoliosLoading = false;
        this.$Progress.finish();

        // console.log(this.cquery);
      });
    },
    gotToSignup: function () {
      this.$router.push("/register");
    },

    dispatchAction() {
      if (this.value == null) {
        this.errorSkills = "";
        this.searchPortfolios = [];
        this.value2 = "";
      } else {
        this.value2 = "";
        this.$Progress.start();
        this.portfoliosLoading = true;
        let payload = {
          sq: this.value,
        };
        axios({
          url:
            "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/skills-filter",
          method: "post",
          data: payload,
        }).then((response) => {
          this.searchPortfolios = response.data;
          this.portfoliosLoading = false;
          this.$Progress.finish();
        });
      }
    },
    loadTagsNames() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/skills-filter-names"
        )
        .then((response) => {
          this.options = response.data;
        });
    },
    loadcategoriesValues() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/categories-filter-values"
        )
        .then((response) => {
          this.categoriesValues = response.data;
        });
    },
  },
  mounted() {
    this.loadPortfolios();
    this.getResults();
    this.loadTagsNames();
    this.loadcategoriesValues();
  },
};
</script>
