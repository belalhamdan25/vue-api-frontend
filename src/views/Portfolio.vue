<template>
  <section class="portfolio">
    <div class="container">
      <header class="section-header">
        <h3>Portfolio</h3>
      </header>
      <div class="row row-eq-height justify-content-center">
        
        <div class="col-lg-4 bg-white">
          side bar
        </div>
        <div class="col-lg-8">
          <div class="row  row-eq-height justify-content-center ">
            <div v-for="Portfolio in Portfolios" :key="Portfolio.id">
              <div class="col-lg-6 mb-4">
                <div class="portfolio-card" style="width: 18rem;">
                      <img class="card-img-top" :src="Portfolio.user_img" alt="user image">
                    <h6 class="card-name">{{Portfolio.user_name}}</h6>
                    <h5 class="card-title">{{Portfolio.title}}</h5>
                  <img class="card-img-top" :src="Portfolio.img" :alt="Portfolio.desc">
                  <div class="card-body text-center">
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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

<style scoped>
.portfolio-card{
background-color:white ;
border-radius:10px ;
padding: 1.25rem 2.25rem 0 2.25rem;
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Portfolios: {},
    };
  },
  methods: {
    loadPortfolios() {
      axios
        .get("http://localhost/vue-api-backend/public/api/portfolio/portfolios")
        .then(({ data }) => (this.Portfolios = data.data));
    },
  },
  mounted() {
    this.loadPortfolios();
  },
};
</script>
