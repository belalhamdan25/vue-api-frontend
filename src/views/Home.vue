<template>
  <div class="home">
    <slideHomePage></slideHomePage>
    <howWorksHomePage></howWorksHomePage>
    <whyUsHomePage></whyUsHomePage>
    <categoriesHomePage></categoriesHomePage>
    <startSectionHomePage></startSectionHomePage>
  </div>
</template>

<script>
import SlideHomePage from "../components/SlideHomePage";
import HowWorksHomePage from "../components/HowWorksHomePage";
import WhyUsHomePage from "../components/WhyUsHomePage";
import CategoriesHomePage from "../components/CategoriesHomePage";
import StartSectionHomePage from "../components/StartSectionHomePage";



export default {
  components: {
    slideHomePage: SlideHomePage,
    howWorksHomePage: HowWorksHomePage,
    whyUsHomePage: WhyUsHomePage,
    categoriesHomePage: CategoriesHomePage,
    startSectionHomePage: StartSectionHomePage,
  },
};
</script>

<style>

</style>