<template>
<section>
  <span class="fa fa-star" :class="{'checked': score >= 1}"></span>
  <span class="fa fa-star" :class="{'checked': score >= 2}"></span>
  <span class="fa fa-star" :class="{'checked': score >= 3}"></span>
  <span class="fa fa-star" :class="{'checked': score >= 4}"></span>
  <span class="fa fa-star" :class="{'checked': score >= 5}"></span>
</section>
</template>

<script>
export default {
    name: "templateStars",
    props: ['score']
}
</script>

<style>
.checked {
 color: orange;
}

</style>

  
 

