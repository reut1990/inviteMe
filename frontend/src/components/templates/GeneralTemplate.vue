<template>
  <section class="template">
    <div class="template-container" :style="generalStyle" @click.stop="connectToEditor()">
      <draggable>
        <component
          @connectToCmpPart="connectToCmpPart"
          @showEditor="showEditor"
          v-for="cmp in dynamicCmps"
          :key="cmp.id"
          :is="cmp.type"
          :id="cmp.id"
          :data="cmp.data"
          @deleteCmp="deleteCmpPart"
        />
      </draggable>
    </div>
  </section>
</template>

<script>
import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";
import location from "@/components/template-components/AddressCmp.vue";
import templateService from "@/services/templateService";
import inviteService from "@/services/inviteService";
import mapCmp from "@/components/template-components/MapCmp.vue";
import countClock from "@/components/template-components/CountClock.vue";
import addressCmp from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    location,
    mapCmp,
    countClock,
    addressCmp,
    attending,
    socialMedia,
    draggable
  },
  methods: {
    connectToCmpPart(cmpPart) {
      this.$emit("connectToCmpPart", cmpPart);
    },
    showEditor({ kind }) {
      this.$emit("showEditor", { kind });
    },
    connectToEditor() {
      this.$emit("connectToCmpPart", "background");
      this.$emit("showEditor", { kind: "background" });
    },
    deleteCmpPart(cmpId) {
      let cmps = this.$store.getters.dynamicCmps;
      cmps = cmps.filter(cmp => cmp.id !== cmpId);
      let generalStyle = this.$store.getters.generalStyle;
      this.$store.dispatch({
        type: "setCurrTemplate",
        tmpData: { cmps, generalStyle }
      });
    }
  },
  computed: {
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    },
    generalStyle() {
      return this.$store.getters.generalStyle;
    },
    user() {
      return this.$store.getters.loggedInUser;
    }
  },
  created() {
    this.inviteId = this.$route.params.id;
    inviteService.query().then(res => {
      const currInvite = res.find(invite => {
        return invite.templateId === this.inviteId;
      });

      this.$store.dispatch({
        type: "setCurrTemplate",
        tmpData: {
          cmps: currInvite.cmps,
          generalStyle: currInvite.generalStyle
        }
      });
    });
  }
};
</script>

<style>

</style>