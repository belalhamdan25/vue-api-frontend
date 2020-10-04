<template>
  <section class="portfolio" id="toolbar-chat" ref="toolbarChat">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-center">
          <button
            type="button"
            class="btn btn-primary mb-4 form-control"
            @click="gotToSignup()"
          >
            Create Your Portfolio
          </button>

          <div class="input-group mb-3">
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
                class="btn btn-outline-secondary"
                v-if="!searchLoading"
                @click="search()"
                type="button"
              >
                <i class="fas fa-search"></i>
              </button>
              <button
                class="btn btn-outline-secondary"
                v-if="searchLoading"
                disabled="disabled"
                type="button"
              >
                <i class="fas fa-spinner"></i>
              </button>
            </div>
          </div>

          <!-- <div class="alert alert-danger" role="alert" v-if="error">
            <span
              class="glyphicon glyphicon-exclamation-sign"
              aria-hidden="true"
            ></span>
            {{ error }}
          </div> -->

          <div class="text-left mb-4">
            <h5>Categories</h5>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="design"
                  v-model="cquery"
                  id="design"
                  @change="categories()"
                />Design and works
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="translation"
                  v-model="cquery"
                  id="translation"
                  @change="categories()"
                />Translation and languages
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="programming"
                  v-model="cquery"
                  id="programming"
                  @change="categories()"
                />Programming and development
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="writing"
                  v-model="cquery"
                  id="writing"
                  @change="categories()"
                />Writing and editing
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="marketing"
                  v-model="cquery"
                  id="marketing"
                  @change="categories()"
                />Sales and marketing
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="consulting"
                  v-model="cquery"
                  id="consulting"
                  @change="categories()"
                />Consulting and training
              </label>
            </div>
          </div>

          <div class="text-left mb-4">
            <!-- <label class="typo__label">Skills</label> -->
            <h5>Skills</h5>

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
            <!-- <multiselect v-model="value" :options="options" placeholder="Select one" label="name" track-by="name" @input="dispatchAction()" ></multiselect> -->
          </div>
        </div>
        <div class="col-md-9  col-sm-12">
          <div v-if="searchPortfolios.length">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 pb-4  d-flex justify-content-center align-content-center"
                v-for="searchPortfolio in searchPortfolios"
                :key="searchPortfolio.id"
              >
                <div class="card portfolio-card border-0  p-2">
                  <div class=" d-flex justify-content-start align-items-center">
                    <div class="d-flex align-items-center px-1 w-img-100">
                      <img
                        v-if="loading"
                        class=" hw-50 rounded-circle"
                        :src="searchPortfolio.user_img"
                        alt="user image"
                      />
                      <div
                        class="hw-50 rounded-circle"
                        style="background-color:#E6E6E6"
                        v-else
                      ></div>
                    </div>
                    <div class="pl-2">
                      <div
                        class=" justify-content-center pr-1 align-content-end"
                      >
                        <h6 v-if="loading" class="card-name m-0 h-fit">
                          {{ searchPortfolio.user_name }}
                        </h6>
                        <div
                          class="card-name mb-2 h-fit"
                          v-else
                          style="width:50px;height:5px;background-color:#E6E6E6"
                        ></div>

                        <small v-if="loading" class="text-muted">{{
                          searchPortfolio.title.substring(0, 20) + ".."
                        }}</small>
                        <div
                          class="text-muted"
                          v-else
                          style="width:100px;height:5px;background-color:#E6E6E6"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="card-img-top img-raduis-bottom"
                    :src="searchPortfolio.img"
                    :alt="searchPortfolio.desc"
                    v-if="loading"
                  />

                  <img
                    v-else
                    src="https://e.top4top.io/p_17305yynx1.png"
                    class="card-img-top img-raduis-bottom"
                  />
                  <!-- <div class="card-body text-center">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div> -->
                </div>
              </div>
            </div>
          </div>

          <div v-else>
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-6 pb-4  d-flex justify-content-center align-content-center"
                v-for="Portfolio in Portfolios.data"
                :key="Portfolio.id"
              >
                <div class="card portfolio-card border-0  p-2">
                  <div class=" d-flex justify-content-start align-items-center">
                    <div class="d-flex align-items-center px-1 w-img-100">
                      <img
                        v-if="loading"
                        class=" hw-50 rounded-circle"
                        :src="Portfolio.user_img"
                        alt="user image"
                      />
                      <div
                        class="hw-50 rounded-circle"
                        style="background-color:#E6E6E6"
                        v-else
                      ></div>
                    </div>
                    <div class="pl-2">
                      <div
                        class=" justify-content-center pr-1 align-content-end"
                      >
                        <h6 v-if="loading" class="card-name m-0 h-fit">
                          {{ Portfolio.user_name }}
                        </h6>
                        <div
                          class="card-name mb-2 h-fit"
                          v-else
                          style="width:50px;height:5px;background-color:#E6E6E6"
                        ></div>

                        <small v-if="loading" class="text-muted">{{
                          Portfolio.title.substring(0, 20) + ".."
                        }}</small>
                        <div
                          class="text-muted"
                          v-else
                          style="width:100px;height:5px;background-color:#E6E6E6"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <img
                    class="card-img-top img-raduis-bottom"
                    :src="Portfolio.img"
                    :alt="Portfolio.desc"
                    v-if="loading"
                  />

                  <img
                    v-else
                    src="https://e.top4top.io/p_17305yynx1.png"
                    class="card-img-top img-raduis-bottom"
                  />
                  <!-- <div class="card-body text-center">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div> -->
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pl-3">
                <pagination
                  :data="Portfolios"
                  :limit="1"
                  @pagination-change-page="getResults"
                  class="margin-b-0 border-0"
                >
                  <span slot="prev-nav">Previous</span>
                  <span slot="next-nav">Next</span>
                </pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-card {
  background-color: white;
  /* border-radius: 10px; */
}
.h-fit {
  height: fit-content;
}
.hw-50 {
  height: 50px !important;
  width: 50px !important;
}
.w-img-100 {
  height: 80px;
}
.margin-b-0 {
  margin-bottom: 0 !important ;
}

/* .img-raduis-bottom{
      border-radius: 0px 0px 10px 10px;
} */
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },
  data() {
    return {
      Portfolios: {},
      loading: false,
      error: false,
      errorS: "",
      query: "",
      searchLoading: false,
      searchPortfolios: [],
      cquery: [],
      value: [],
      options: [
        { name: "Photoshop" },
        { name: "Illustrator" },
        { name: "Graphic design" },
        { name: "Logo design" },
        { name: "Microsoft word" },
        { name: "Microsoft excel" },
        { name: "Translation" },
        { name: "HTML 5" },
        { name: "CSS 3" },
        { name: "PHP" },
        { name: "Online marketing" },
        { name: "Web development" },
        { name: "Android" },
        { name: "After effect" },
        { name: "Javascript" },
        { name: "Bootstrap" },
        { name: "Vuejs" },
        { name: "Reactjs" },
        { name: "Jquery" },
        { name: "Data Analysis" },
        { name: "Website Design" },
        { name: "Mobile App Development" },
        { name: "Writing" },
        { name: "Editing" },
        { name: "Video Editing" },
        { name: "Search Engine Optimization" },
        { name: "Social Media Marketing" },
        { name: "MYSQL" },
        { name: "3D Design" },
        { name: "Laravel" },
        { name: "ASP" },
        { name: "Microsoft .NET" },
        { name: "Node js" },
        { name: "Git" },
        { name: "Swift" },
        { name: "Wordpress" },
        { name: "UX design" },
        { name: "UI design" },
        { name: "Responsive design" },
        { name: "User modeling" },
        { name: "Independent Sales" },
        { name: "Training" },
        { name: "Consulting" },
        { name: "Voice-Over Acting" },
        { name: "Career Coaching" },
        { name: "Research" },
        { name: "TypeScript" },
        { name: "Technical recruiter" },
        { name: "Education" },
        { name: "Advertising" },
        { name: "Electronic design" },
        { name: "E-books" },
        { name: "Landing pages" },
        { name: "Sketch" },
        { name: "Microsoft office" },
        { name: "Adobe" },
        { name: "Interior design" },
        { name: "Ruby on rails" },
      ],
    };
  },
  methods: {
    loadPortfolios() {
      axios
        .get("http://localhost/vue-api-backend/public/api/portfolio/portfolios")
        .then(({ data }) => (this.Portfolios = data));
    },
    getResults(page = 1) {
      axios
        .get(
          "http://localhost/vue-api-backend/public/api/portfolio/portfolios?page=" +
            page
        )
        .then((response) => {
          this.Portfolios = response.data;
        });

      this.scrollTop();
      this.doStuff();
    },
    scrollTop: function() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 100);
      }, 20);
    },
    doStuff: function() {
      //Show Loader
      this.loading = false;
      this.$Progress.start();

      //Waste 0.5 seconds
      setTimeout(() => {
        this.loading = true;
        this.$Progress.finish();
      }, 500);
    },
    search: function() {
      if (this.query == "") {
        this.searchPortfolios = [];
        this.doStuff();
        this.errorSearchMessageOpen()
      } else {
        // Clear the error message.
        this.error = "";
        // Empty the products array so we can fill it with the new products.
        this.searchPortfolios = [];
        // Set the loading property to true, this will display the "Searching..." button.
        this.searchLoading = true;
        this.loading = false;
        this.$Progress.start();

        // Making a get request to our API and passing the query to it.
        axios
          .get(
            "http://localhost/vue-api-backend/public/api/portfolio/portfolios/search?q=" +
              this.query
          )
          .then((response) => {
            // If there was an error set the error message, if not fill the products array.
            response.data.error
              ?    (this.errorSearchMessageOpen())
              : (this.searchPortfolios = response.data);
            // The request is finished, change the loading to false again.
            this.loading = true;
            this.searchLoading = false;
            // Clear the query.
            this.query = "";
            this.$Progress.finish();
          });
      }
    },
     errorSearchMessageOpen() {
      this.$toast.open({
        message: "No results found, please try with different keywords",
        type: "info",
        duration: 5000,
        dismissible: true,
        position:'top-right'
      })
    },
    categories() {
      this.doStuff();
      this.searchPortfolios = [];
      let payload = {
        cq: this.cquery,
      };
      axios({
        url:
          "http://localhost/vue-api-backend/public/api/portfolio/portfolios/categories-filter",
        method: "post",
        data: payload,
      }).then((response) => {
        // console.log(response.data.data);
        this.searchPortfolios = response.data.data;
        // console.log(this.cquery);
      });
    },
    gotToSignup: function() {
      this.$router.push("/login");
    },

    dispatchAction() {
      if (this.value == null) {
        this.errorSkills = "";
        this.searchPortfolios = [];
        this.doStuff();
      } else {
        this.loading = false;
        this.$Progress.start();
        let payload = {
          sq: this.value,
        };
        axios({
          url:
            "http://localhost/vue-api-backend/public/api/portfolio/portfolios/skills-filter",
          method: "post",
          data: payload,
        }).then((response) => {
          this.searchPortfolios = response.data;
          this.loading = true;
          this.$Progress.finish();
        });
      }
    },
  },
  mounted() {
    this.loadPortfolios();
    this.getResults();
    this.doStuff();
  },
};
</script>
