
<template>
  <section class="invite-preview" :style="{backgroundImage:this.invite.generalStyle.backgroundImage}">
    <div
      class="invite-container"
      :style="this.invite.generalStyle"
      @click.stop="connectToEditor()"
    >
      <div v-for="cmp in this.invite.cmps" :key="cmp.id">
        <div v-if="cmp.kind === 'text' && cmp.type !== 'day'" :style="cmp.data.css">{{cmp.data.txt}}</div>
        <div v-else-if="cmp.kind ==='text' && cmp.type === 'day'" :style="cmp.data.css">
          <i class="far fa-calendar-alt"></i>
          {{cmp.data.txt.day}} &nbsp; | &nbsp;
          <i class="far fa-clock"></i>
          {{cmp.data.txt.time}}
        </div>
        <div v-else-if="cmp.kind ==='cmp'" :style="cmp.data.css">
          <component
            :key="cmp.id"
            :is="cmp.type"
            :id="cmp.id"
            :data="cmp.data"
          />
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
import templateService from "@/services/templateService";
import inviteService from "@/services/inviteService";
import mapCmp from "@/components/template-components/MapCmp.vue";
import countClock from "@/components/template-components/CountClock.vue";
import addressCmp from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";

export default {
  data() {
    return {
      invite: null
    };
  },
  created() {
    const id = this.$route.params.id;
    inviteService.getById(id).then(invite => {
      this.invite = invite;

      console.log("in general preview", invite);
      // const currInvite = invites.find(invite => {
      //   console.log("inviteService.query", invite);
      //   if (invite.templateId === inviteId) return invite;
      //   // function from server isnt right
      //   // put event bus to get the type of template
      // });
      // this.invite = currInvite;
      // console.log(this.invite);
    });
  },
  components: {
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    location,
    mapCmp,
    countClock,
    addressCmp,
    attending,
    socialMedia
  },
  methods: {},
  computed: {}
};
</script>

<style>
.invite-preview {
  display: flex;
  padding:0 30%;
  background-blend-mode: color;
  background-color: rgba(255, 255, 255, 0.4);
  background-size: auto; 
   align-items: center;

}
.full-page {
  background-size: cover;
  display: flex;
  height: 100vh;
}

.height {
  height: 85vh;
}

@media screen and (max-width: 420px) {
  .template-container {
    margin: 1px !important;
  }
}
</style>
 
 