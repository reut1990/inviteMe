<template>
  <section class="full-page">
    <div class="first-template height">
      <div class="edit-template-section">
        <div class="template-container" :style="userStyleBackground">
          <div class="backgroun-frame">
            <div class="card-container">
              <!-- <component
              v-for="cmp in template.cmps"
              :key="cmp.id"
              :is="cmp.type"
              :data="cmp.data"

              />-->
              <div v-for="cmp in template.cmps" :key="cmp.id">
                <div v-if="cmp.kind === 'text'" :style="cmp.data.css">
                  {{cmp.data.txt}}
                  <!-- <pre>{{cmp.data.css}}</pre> -->
                </div>
                <div v-if="cmp.kind ==='cmp'" :style="cmp.data.css">
                  <component :key="cmp.id" :is="cmp.type" :data="cmp.data"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import publishModal from "@/components/PublishModal.vue";

import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";

import location from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import templateService from "@/services/templateService";

export default {
  data() {
    return {
      show: false,
      type: "first",
      template: null
    };
  },
  created() {
    templateService.query().then(res => {
      // check here//////////////////////////////////////////
      console.log(res);
      const currTemplate = res.find(temp => {
        console.log("templateService.query", temp);
        if (temp.id === "1p") return temp; // put event bus to get the type of template
      });
      this.template = currTemplate;
      console.log(this.template);
    });
  },
  components: {
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,

    location,
    socialMedia,
    attending
  },
  methods: {},
  computed: {}
};
</script>

<style>
.full-page {
  /* background-image: url("https://i.pinimg.com/564x/b4/38/9c/b4389cbe1b5fc601c8526d9896969fe0.jpg"); */
  background-size: cover;
  display: flex;
  align-items: center;
  height: 100vh;
}

.height{
  height:85vh
}
</style>
 
 