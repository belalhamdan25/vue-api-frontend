<template>
  <section class="freelancers">
    <div class="container">
      <div class="row py-4">
        <div class="col-md-3 col-sm-12 w-100 text-left">
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
              @input="tags()"
            ></multiselect>
          </div>

          <div class="text-left mb-4">
            <h6 class="iconC2">Rate</h6>

            <star-rating
              v-model="rating"
              :show-rating="false"
              :star-size="30"
              @rating-selected="setRating"
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
            >
            </star-rating>

            <a @click="rating = 0">Reset Rating</a>
          </div>
        </div>
        <div class="col-md-9  col-sm-12">
          <div class="row">
            <div
              class="col-12 d-flex justify-content-start align-content-center flex-wrap mt-41"
            >
              <div
                v-for="freelancer in freelancers.data"
                :key="freelancer.id"
                class="col-lg-4 col-md-6 col-sm-6 pb-4 mb-5 pr-0"
              >
                <div
                  class="card-continer d-flex flex-column justify-content-center align-items-center bg-white p-2"
                >

                <img v-if="freelancer.user_img != null" class="circle2" :src="freelancer.user_img">

                  <div v-else class="circle">
                     <span style="color:white;font-size:25px">{{
                    freelancer.name.charAt(0).toUpperCase()
                  }}</span>
                  </div>

                  <h6 class="text-dark">{{freelancer.name}}</h6>

                  <small
                    class=" d-flex justify-content-center align-items-center text-secondary mb-2"
                  >
                    <span class="mr-1"><i class="fas fa-user-tag"></i> {{freelancer.category.charAt(0).toUpperCase() + freelancer.category.slice(1)}}</span>
                    <span><i class="fas fa-map-marker-alt"></i> {{freelancer.location}}</span>
                  </small>

                  <star-rating
                    class="mb-2"
                    :rating="freelancer.rate"
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

                  <button class="buton-p btn btn-hire">Profile</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-hire {
  background: #41b883;
  color: white;
  /* font-size: 12px; */
}
.btn-hire:hover {
  background: #369a6e;
}
.buton-p {
  padding: 3px 60px;
}
.card-continer {
  border-radius: 0.25rem;
}
.mt-41 {
  margin-top: 41px;
}
.circle {
  height: 90px;
  width: 90px;
  background: #41b883;
  border-radius: 50%;
  margin-top: -50px;
  margin-bottom: 15px;
    display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0,0,0,0.45);
-moz-box-shadow: 0px 13px 53px -30px rgba(0,0,0,0.45);
box-shadow: 0px 13px 53px -30px rgba(0,0,0,0.45);
border: 3px solid #e0e0e0;

}
.circle2 {
  height: 90px;
  width: 90px;
  border-radius: 50%;
  margin-top: -50px;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 13px 53px -30px rgba(0,0,0,0.45);
-moz-box-shadow: 0px 13px 53px -30px rgba(0,0,0,0.45);
box-shadow: 0px 13px 53px -30px rgba(0,0,0,0.45);
border: 3px solid #e0e0e0;

}
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
import StarRating from "vue-star-rating";

export default {
  components: {
    Multiselect,
    StarRating,
  },
  data() {
    return {
      freelancers: {},
      query: "",
      searchLoading: false,
      categoriesValues: [],
      cquery: [],
      options: [],
      value: [],
      rating: 0,
    };
  },
  methods: {
    loadFreelancers() {
      axios
        .get("https://vue-api-backend.herokuapp.com/api/freelancer/freelancers")
        .then(({ data }) => {
          this.freelancers = data;
        });
    },
    search: function() {
      console.log("search pressed");
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
    categories() {
      console.log("cat pressed");
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
    tags() {
      console.log("tag pressed");
    },
    setRating: function(rating) {
      this.rating = rating;
    },
  },
  mounted() {
    this.loadFreelancers();
    this.loadcategoriesValues();
    this.loadTagsNames();
  },
};
</script>
