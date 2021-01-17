<template>
  <section class="ProjectCreate">
    <div class="container">
      <div class="row py-4">
        <div class="col-12 bg-white p-4 radios-5">
          <div class="create-form">
            <h6>Create New Project</h6>
            <hr />
            <form  enctype="multipart/form-data">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="title">Project Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="title"
                    placeholder="Project Title"
                  />
                </div>
                <div class="form-group col-md-3">
                  <label for="budget">Project Budget</label>
                  <input
                    type="number"
                    class="form-control"
                    id="budget"
                    v-model="budget"
                    placeholder="Project Budget"
                  />
                </div>
                    <div class="form-group col-md-3">
                  <label for="budget">Project Attachments</label>
                  <input
                    @change="onFileChange"
                    type="file"
                    class="upload-btn-wrapper"
                    id="attachments"
                    multiple
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-12">
                  <label for="description">Project Description</label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="10"
                    v-model="desc"
                  ></textarea>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="timeline">Project Timeline</label>
                  <input
                    type="number"
                    class="form-control"
                    id="timeline"
                    v-model="timeline"
                    placeholder="Project Timeline"
                  />
                </div>
                <div class="form-group col-md-4">
                  <label for="skills">Project Skills</label>
                  <multiselect
                    v-model="skills"
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
                    @input="projectTags()"
                  ></multiselect>
                </div>

                <div class="form-group col-md-4">
                  <label for="category">Project Category</label>
                  <select  class="form-control" v-model="category">
                    <option selected disabled  value="" >Project Category</option>
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

              <button  @click.prevent="CreateProject" class="btn btn-hire">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      skills: [],
      options: [],
      categoriesValues: "",
      tagsId: [],
      category: [],
      title: "",
      budget: null,
      desc: "",
      timeline: null,
      attachments:[],
        form:new FormData

    };
  },
  methods: {
    errorMessageOpen() {
      this.$toast.open({
        message: " There was error during create project process",
        type: "error",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
    sucessMessageOpen() {
      this.$toast.open({
        message: "Project Created",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
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
    projectTags() {
      this.tagsId = [];
      var i;
      var arrayid = [];
      for (i = 0; i < this.skills.length; i++) {
        arrayid = this.skills[i];
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
    CreateProject() {
              this.$Progress.start();

      for(let i=0;i<this.attachments.length;i++){
      this.form.append("pics[]", this.attachments[i]);
      }
      this.form.append("title", this.title);
      this.form.append("desc", this.desc);
      this.form.append("budget", this.budget);
      this.form.append("timeline", this.timeline);
      this.form.append("category", this.category);
      for(let i=0;i<this.tagsId.length;i++){
      this.form.append("tag[]", this.tagsId[i]);
      }
      this.form.append("token", this.retriveToken);

      const config = {headers: {"Content-Type": "multipart/form-data"}};

      axios
        .post(
          "https://vue-api-backend.herokuapp.com/api/project/create",
          this.form,
          config
        ).then((response) => {
          this.$Progress.finish();
          console.log(response.data);
          this.sucessMessageOpen()
          this.$router.push("/my-projects");
        })
                      .catch((err) => {
          this.$Progress.fail();
          this.errorMessageOpen();
          console.log(err.message);
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