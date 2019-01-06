<template>
  <section>
    <main-header></main-header>
    <div class="before-banner">
      <section id="banner">
        <h1 class="titleBanner">
          <span class="first-line">Online Invitation</span>
          <span class="second-line">
            for any
            Occasion
          </span>
        </h1>
      </section>
    </div>

    <section class="templates">
      <div class="templates-container">
        <filter-list></filter-list>

        <templateList :templates="templates"></templateList>
      </div>
    </section>

    <main-footer></main-footer>
  </section>
</template>

<script>
// import templateList from "@/components/TemplateList.vue";
import mainHeader from "@/components/MainHeader.vue";
import mainFooter from "@/components/MainFooter.vue";
import filterList from "@/components/FilterList.vue";
import templateList from "@/components/TemplateList.vue";
import templateService from "@/services/templateService.js";

export default {
  name: "home",
  components: {
    templateList,
    mainHeader,
    mainFooter,
    filterList
  },
  computed: {},
  created() {
    templateService
      .query()
      .then(res => {
        this.templates = res;
      })
      .catch(err => {
        //  console.log('err', err);
      });
  },
  data() {
    return {
      templates: []
    };
  }
};
</script>

<style>
body {
  margin: 0;
}

#banner {
  background-image: url("../assets/final cover-app.png");
  display: block;
  height: 310px;
  margin-top: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  position: relative;
  top: 230px;
}

.before-banner {
  background: #ffe259;
  background: -webkit-linear-gradient(to right, #ffa751, #ffe259);
  background: linear-gradient(to right, #ffa751, #ffe259);
  background-color: transparent;
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-position: left 0px bottom 90px;
  z-index: 0;
  margin-top: -145px;
  height: 85vh;
}

.first-line {
  display: inline-block;
  animation: moveFromLeft 1.5s;
}

.second-line {
  margin-left: 15px;
  display: inline-block;
  animation: moveFromRight 1.5s;
}

#banner a {
  color: #ffffff;
}
.btn-get-start {
  background-color: #232323;
  color: #ffffff;
  cursor: pointer;
  z-index: 2;
  padding: 10px;
  /* border-radius: 25px; */
  margin-top: 75px;
  border: 2px solid lightgray;
  /* text-shadow: 2px 2px 2px lightslategrey;
    background-color: darkgray; */
}

#banner .button:hover {
  background-color: #676767;
}

.templates {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 50px;
  margin: auto;
}
.templates-container {
  display: flex;
  flex-direction: row;
}

@keyframes moveFromLeft {
  0% {
    transform: translateX(-150%);
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes moveFromRight {
  0% {
    transform: translateX(+150%);
    opacity: 0;
  }

  50% {
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* .new-img-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 70px;
}

.new img {
  max-width: 200px;
  height: 200px;
  cursor: pointer;
} */

@media (max-width: 860px) {
  .templates-container {
    display: flex;
    flex-direction: column;
  }

  .templates{
    padding: 2px;
  }
}
</style>
