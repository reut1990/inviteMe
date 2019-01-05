<template>
  <li>
  
    <div class="container-template" >
      <router-link :to="`invite/${template._id}`">      
      <img class="img-div" :src="templateImg" alt="loading img...">
      </router-link>
      <!-- <div class="img-div" ></div> -->
      <!-- {{template.image.backgroundImage}} -->
      
      <h5 class="template-name">{{template.name}}</h5>
      <div class="template-nums">
        <h5 class="template-stars">{{template.stars}}</h5>
        <template-star class="stars-rate" :score="template.stars"></template-star>
        <h5 class="template-download">{{template.downloadNum}}</h5>
      </div>
    </div>  
        
  </li>
</template>

<script>
import templateStar from "@/components/TemplateStar.vue";

export default {
  name: "templatePrev",
  props: ["template", "index"],
  components: {
    templateStar
  },
  data(){
    return{
      idAddress: `template/${this.template.id}`,
    }
  },
  computed:{
    templateImg(){
      return require(`../assets/template${this.index+1}.png`);
    }
  }
};
</script>

<style>
.container-template {
  width: 250px;
  height: 370px;
  border: 1px solid gray;
  border-radius: 6px;
}
.container-template:hover {
  background:rgba(0, 0, 0, 0.14);
}

h5 {
  margin: 0;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
}
.img-div {
  background: rgb(199, 191, 191);
  width: 100%;
  height: 290px;
}
.template-name {
  font-size: 1.1rem;
  padding: 5px;
}
.template-nums {
  padding: 10px;
}
.template-stars {
  float: left;
}
.template-download {
  float: right;
}
li {
  margin: 10px;
}
.stars-rate {
  float: left;
  padding-left: 5px;
}
</style>
