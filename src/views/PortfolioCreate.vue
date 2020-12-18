<template>
  <div class="create-portfolio">
    <div class="container">
      <div class="row py-4">
        <div class="col-12 bg-white p-4 radios-5">
          <div class="create-form">
            <h6>Create New Portfolio</h6>
            <hr />
            <form
              @submit.prevent="CreatePortfolio"
              enctype="multipart/form-data"
            >
              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="title">Portfolio Title</label>
                  <input
                    type="text"
                    v-model="Ptitle"
                    class="form-control"
                    id="title"
                    placeholder="Portfolio Title"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="primary-image">Images</label>
                  <input
                    @change="onFileChange"
                    type="file"
                    class="form-control-file"
                    id="primary-image"
                    multiple
                    accept="image/*"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="description">Portfolio Description</label>
                  <textarea
                    v-model="Pdesc"
                    class="form-control"
                    id="description"
                    rows="5"
                  ></textarea>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="link">Portfolio Link</label>
                  <input
                    v-model="Plink"
                    type="text"
                    class="form-control"
                    id="link"
                    placeholder="Portfolio Link"
                  />
                </div>

                <div class="form-group col-md-4">
                  <label for="category">Portfolio Category</label>
                  <select class="form-control" v-model="Pcategory">
                    <option
                      v-for="categoriesValue in categoriesValues"
                      :key="categoriesValue.name"
                      :value="categoriesValue.id"
                    >
                      {{ categoriesValue.desc }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-8">
                  <label for="skills">Portfolio Skills</label>
                  <multiselect
                    v-model="Pskills"
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
                    @input="portfolioTags()"
                  ></multiselect>
                </div>
                <div class="form-group col-md-4">
                  <label for="date">Portfolio date</label>
                  <input
                    type="date"
                    class="form-control"
                    v-model="Pdate"
                    id="date"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Add Portfolio
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";

export default {
  components: { Multiselect },

  data() {
    return {
      Ptitle: "",
      Pdesc: "",
      Plink: "",
      Pdate: "",
      Pcategory: "",
      Pskills: [],
      options: [],
      categoriesValues: "",
      tagsId: [],
      attachments: [],
    };
  },
  methods: {
    loadTagsNames() {
      axios
        .get(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/skills-filter-id-names"
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
    portfolioTags() {
      this.tagsId = [];
      var i;
      var arrayid = [];
      for (i = 0; i < this.Pskills.length; i++) {
        arrayid = this.Pskills[i];
        this.tagsId.push(arrayid.id);
      }
    },
    onFileChange(e) {
      // ******************************************
      let selectedFiles=e.target.files;
      if(!selectedFiles.length){
        return false;
      }
      for (let i = 0; i < selectedFiles.length; i++) {
        this.attachments.push((selectedFiles[i]));
      }
      console.log(this.attachments);
      //**************************************
    },
    CreatePortfolio(e) {
      this.$Progress.start();
      e.preventDefault();
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      let formData = new FormData();
      formData.append("title", this.Ptitle);
      formData.append("desc", this.Pdesc);
      formData.append("link", this.Plink);
      formData.append("date", this.Pdate);
      formData.append("category_id", this.Pcategory);
      formData.append("tags_id[] ", this.tagsId);
      for(let i=0;i<this.attachments.length;i++){
      formData.append("pics[]", this.attachments[i]);
      }
      formData.append("token", this.retriveToken);
      axios
        .post(
          "https://vue-api-backend.herokuapp.com/api/portfolio/portfolios/create",
          formData,
          config
        )
        .then(function (response) {
          this.$Progress.finish();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  mounted() {
    this.loadTagsNames();
    this.loadcategoriesValues();
  },
  computed: {
    user() {
      return this.$store.getters.get_user;
    },
    retriveToken() {
      return this.$store.getters.get_token;
    },
  },
};
</script>