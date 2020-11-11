<template>
  <section class="projects">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
          <button
            class="btn btn-primary mb-4 form-control backButton py-md-4 py-lg-0 d-flex justify-content-center align-items-center"
            @click="gotToSignup()"
          >
            Add Projects Now
          </button>

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
                  @change="categoriesFiltter()"
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
              @input="multiSelectAction()"
            ></multiselect>
          </div>

          <div class="mb-4">
            <span class="">Budgut</span>
            <vue-slider
              v-model="Budgutvalue"
              :min="min"
              :max="max"
              :tooltip-placement="['bottom', 'bottom']"
              :tooltip="'always'"
              :marks="[1000, 2000, 4000, 6000, 8000, 10000]"
              @drag-end="budgetSlider()"
              :included="true"
              :hide-label="true"
              :process="process"
              :drag-on-click="true"
              :height="'8px'"
            >
              <template v-slot:tooltip="{ value }">
                <div class="custom-tooltip">{{ value }}</div>
              </template>
              <template v-slot:dot="{ focus }">
                <div :class="['custom-dot', { focus }]"></div>
              </template>
            </vue-slider>
          </div>
        </div>
        <div class="col-md-9  col-sm-12">
          <div class="row">
            <div class="col-12">
              <div class="p-4 bg-white border-r-5">
                <h6>All Projects</h6>
                <hr />

                <div v-if="projectsLoading">
                  <span>Loadin >>>> </span>
                </div>

                <div v-else>
                  <div v-if="filteredProjects.length">
                    <div
                      v-for="filteredProject in filteredProjects"
                      :key="filteredProject.id"
                    >
                      <router-link
                        :to="'project/' + filteredProject.id"
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
                                                <div
                            class="d-flex justify-content-start align-items-center "
                          >
                            <span
                              @click="pushSkill(projectS.name)"
                              class="label-tag"
                              v-for="projectS in filteredProject.skills"
                              :key="projectS.id"
                              ><i class="fas fa-tag"></i> {{ projectS.name }}
                            </span>
                          </div>
                      <hr />
                    </div>
                  </div>

                  <div v-else>
                    <div v-for="project in projects.data" :key="project.id">
                      <router-link
                        class="d-flex justify-content-start align-items-center p-2 project-item"
                        :to="'project/' + project.id"
                      >
                        <div
                          class="d-flex flex-column justify-content-center align-items-center"
                        >
                          <img
                            v-if="project.user_img != null"
                            class=" hw-60-c mr-4 rounded-circle"
                            :src="project.user_img"
                            alt="user image"
                          />
                          <div
                            class="hw-60-c letter-profile-img rounded-circle mr-4"
                            v-else
                          >
                            <span style="color:white;font-size:20px">{{
                              project.user_name.charAt(0).toUpperCase()
                            }}</span>
                          </div>
                        </div>
                        <div
                          class="d-flex flex-column justify-content-center align-items-start"
                        >
                          <h6 class="mb-0">{{ project.title }}</h6>
                          <div
                            class="d-flex justify-content-start align-items-center "
                          >
                            <div class="auth mr-2 text-muted">
                              <i class="fas fa-user" style="font-size:10px"></i>
                              <small> {{ project.user_name }}</small>
                            </div>
                            <div class="time mr-2 text-muted">
                              <i
                                class="fas fa-clock"
                                style="font-size:10px"
                              ></i>
                              <small>
                                {{ project.created_at | moment("from", "now") }}
                              </small>
                            </div>
                            <div class="offers mr-2 text-muted">
                              <i
                                class="fas fa-user-tie"
                                style="font-size:10px"
                              ></i>
                              <small> {{ project.offers_count }} offers</small>
                            </div>
                          </div>
                          <p class="text-muted" style="font-size:14px">
                            {{ project.desc.substring(0, 150) + ".." }}
                          </p>


                        </div>
                      </router-link>
                                                <div
                            class="d-flex justify-content-start align-items-center "
                          >
                            <span
                              @click="pushSkill(projectS.name)"
                              class="label-tag"
                              v-for="projectS in project.skills"
                              :key="projectS.id"
                              ><i class="fas fa-tag"></i> {{ projectS.name }}
                            </span>
                          </div>
                      <hr />
                    </div>

                    <pagination
                      :data="projects"
                      :limit="1"
                      @pagination-change-page="getResults"
                      class="margin-b-0 border-0 "
                    >

                    </pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.custom-dot {
  width: 120%;
  height: 120%;
  border-radius: 100%;
  border: 3px solid #41b883;
  background-color: white;
  transition: all 0.3s;
}
.custom-dot:hover {
  // transform: rotateZ(45deg);
  cursor: pointer;
}
.custom-dot.focus {
  border-radius: 50%;
}

.custom-tooltip {
  font-size: 14px;
  white-space: nowrap;
  padding: 2px 5px;
  min-width: 20px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  border-color: #41b883;
  background-color: #41b883;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
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
.backButton {
  background-color: #41b883;
  border: 0;
}
.backButton:hover {
  background-color: #369a6e;
}
.border-r-5 {
  border-radius: 5px;
}
hr {
  display: block;
  margin-left: -24px;
  margin-right: -24px;
  border-width: 1px;
  border-color: #f0f0f0;
}
///check box styles
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
///cehck box styles

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
.primary-color {
  color: #41b883;
}
.second-color {
  color: #369a6e;
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
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },

  data() {
    return {
      projects: {},
      filteredProjects: [],
      projectsLoading: false,
      searchLoading: false,
      query: "",
      value: [],
      value2: "",
      options: [],
      categoriesValues: [],
      cquery: [],
      Budgutvalue: [1000, 10000],
      BudgutvalueBasic: [1000, 10000],
      min: 1000,
      max: 10000,
      process: (dotsPos) => [
        [dotsPos[0], dotsPos[1], { backgroundColor: "#41b883" }],
      ],
    };
  },
  methods: {
    loadProjects() {
      this.projectsLoading = true;
      axios
        .get("https://vue-api-backend.herokuapp.com/api/project/projects")
        .then(({ data }) => {
          this.projects = data;
          this.projectsLoading = false;
        });
    },
    getResults(page = 1) {
      this.$Progress.start();
      this.projectsLoading = true;
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/project/projects?page=" +
            page
        )
        .then((response) => {
          this.projects = response.data;
          this.projectsLoading = false;
          this.$Progress.finish();
        });
      this.scrollTop();
    },

    scrollTop: function() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 100);
      }, 20);
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
    errorSearchMessageOpen() {
      this.$toast.open({
        message: "No results found, please try with different keywords",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    search() {
      if (this.query == "") {
        this.filteredProjects = [];
        this.errorSearchMessageOpen();
      } else {
        this.$Progress.start();
        this.filteredProjects = [];
        this.searchLoading = true;
        this.projectsLoading = true;
        axios
          .get(
            "https://vue-api-backend.herokuapp.com/api/project/search?q=" +
              this.query
          )
          .then((response) => {
            response.data.error
              ? this.errorSearchMessageOpen()
              : (this.filteredProjects = response.data);
            this.searchLoading = false;
            this.projectsLoading = false;
            this.query = "";
            this.$Progress.finish();
          });
      }
    },
    categoriesFiltter() {
      this.$Progress.start();
      this.filteredProjects = [];
      this.projectsLoading = true;

      let payload = {
        cq: this.cquery,
      };
      axios({
        url:
          "https://vue-api-backend.herokuapp.com/api/project/categories-filter",
        method: "post",
        data: payload,
      }).then((response) => {
        this.filteredProjects = response.data;
        this.projectsLoading = false;
        this.$Progress.finish();
      });
    },
    multiSelectAction() {
      if (this.value == null) {
        this.filteredProjects = [];
      } else {
        this.$Progress.start();
        this.projectsLoading = true;

        let payload = {
          sq: this.value,
        };
        axios({
          url:
            "https://vue-api-backend.herokuapp.com/api/project/skills-filter",
          method: "post",
          data: payload,
        }).then((response) => {
          this.filteredProjects = response.data;
          this.projectsLoading = false;
          this.$Progress.finish();
        });
      }
    },
    pushSkill(skillNamePressed) {
      this.$Progress.start();
      this.projectsLoading = true;
      this.value2 = skillNamePressed;
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/project/skill-filter?skq=" +
            this.value2
        )
        .then((response) => {
          this.filteredProjects = response.data;
          this.value = [
            {
              name: this.value2,
            },
          ];
          this.projectsLoading = false;
          this.$Progress.finish();
        });
    },
    budgetSlider() {
      if (
        JSON.stringify(this.Budgutvalue) ===
        JSON.stringify(this.BudgutvalueBasic)
      ) {
        this.$Progress.start();
        this.filteredProjects = [];
        this.$Progress.finish();
      } else {
        this.$Progress.start();
        this.filteredProjects = [];
        this.projectsLoading = true;
        let payload = {
          bq: this.Budgutvalue,
        };
        axios({
          url:
            "https://vue-api-backend.herokuapp.com/api/project/budget-filter",
          method: "post",
          data: payload,
        }).then((response) => {
          this.filteredProjects = response.data.data;
          this.projectsLoading = false;
          this.$Progress.finish();
        });
      }
    },

    gotToSignup: function() {
      this.$router.push("/register");
    },
  },
  mounted() {
    this.loadProjects();
    this.loadTagsNames();
    this.loadcategoriesValues();
  },
};
</script>
