<template>
  <section>
    <ul>
      <template-preview v-for="(template,index) in templates" :template="template" :index="index" :key="index"></template-preview>
    </ul>
  </section>
</template> 

<script>
import templatePreview from "@/components/TemplatePreview.vue";

export default {
  name: "templateList",
  props: ["templates"],
  components: {
    templatePreview
  }
};
</script>

<style>
ul {
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
