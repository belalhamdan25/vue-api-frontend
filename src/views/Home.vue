<template>
  <div class="home">
    <slideHomePage></slideHomePage>
    <howWorksHomePage></howWorksHomePage>
    <whyUsHomePage></whyUsHomePage>
  </div>
</template>

<script>
import SlideHomePage from "../components/SlideHomePage";
import HowWorksHomePage from "../components/HowWorksHomePage";
import WhyUsHomePage from "../components/WhyUsHomePage";



export default {
  components: {
    slideHomePage: SlideHomePage,
    howWorksHomePage: HowWorksHomePage,
    whyUsHomePage: WhyUsHomePage,
  },
};
</script>

<style>

</style>