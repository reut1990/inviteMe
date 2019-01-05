<template>
  <section class="second-template">
    <div class="second-template-container" :style="generalStyle" @click="connectToEditor()">
      <div class="second-card-container" @click.stop>
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
    </div>
    <button class="publish" @click="publish">Publish</button>
    <publish-modal v-if="show" @close="this.show=false" :id="id"></publish-modal>
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
import  mapCmp from "@/components/template-components/MapCmp.vue";
import countClock from "@/components/template-components/CountClock.vue";
import draggable from "vuedraggable";
export default {
  data() {
    return {
      show: false,
      id: "2p"
    };
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
    publish() {
      this.show = true;
      templateService
        .add({
          id: "1p",
          cmps: this.dynamicCmps,
          base: {
            name: "second"
          },
          name: "wedding",
          modified: Date.now(),
          creatorId: "abc123"
        })
        .then(template =>
          console.log("template was added successfully", template)
        );
    },
      deleteCmpPart(cmpId){
      // get the cmps of template
      let cmps = this.$store.getters.dynamicCmps;
      console.log(cmps);
 
      cmps = cmps.filter(cmp => cmp.id !== cmpId );
      console.log(cmps);
      this.$store.dispatch({
        type: "setCurrTemplate",
        tmpData: cmps
      });
    }
  },
  computed: {
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    },
    generalStyle() {
      return this.$store.getters.generalStyle;
    }
  },
  created() {
    const cmps = [
      {
        id: "0",
        kind: "text",
        type: "invaitorName",
        data: {
          txt: "You are cordially invited to attend",
          css: {
            color: "white",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Charmonman",
            fontSize: 20 + "px"
          }
        }
      },
      {
        id: "1",
        kind: "text",
        type: "eventTitle",
        isEdit: true,
        data: {
          txt: "Meital & Don Wedding ",
          css: {
            color: "white",
            textAlign: "center",
            fontFamily: "Charmonman",
            fontSize: 70 + "px",
            fontWeight: {
              isBold: true,
              value: "bold"
            },
            minHeight: "170px"
          }
        }
      },

      {
        id: "3",
        kind: "text",
        type: "day",
        isEdit: true,
        data: {
          txt: "01/12/2018",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 16 + "px"
          }
        }
      },
      {
        id: "4",
        kind: "text",
        type: "hour",
        isEdit: true,
        data: {
          txt: "20:30",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Satisfy",
            fontSize: 18 + "px"
          }
        }
      },
      {
        id: "5",
        kind: "cmp",
        type: "countClock",
        isEdit: true,
        data: {
          date: "2019-07-06 08:15:00",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Satisfy",
            fontSize: 18 + "px"
          }
        }
      },
      {
        id: "6",
        kind: "text",
        type: "location",
        isEdit: true,
        data: {
          txt: "Nezer Sireni, Tel-Aviv",
          css: {
            color: "white",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Charmonman",
            fontSize: 17 + "px"
          }
        }
      },
      {
        id: "7",
        kind: "cmp",
        type: "mapCmp",
        isEdit: true,
        data: {
          markers: [],
          places: [],
          currentPlace: null,
          center: { lat: 45.508, lng: -73.587 }
        }
      }
      // {
      //   id: '6',
      //   kind: "cmp",
      //   type: "attending",
      //   isEdit: true,
      //   data: {}
      // },
    ];
    const general = {
      backgroundImage:
        'url("https://images.pexels.com/photos/3880/couple-love-romantic-silhouette.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
      backgroundPosition:'center'
    };
    this.$store.dispatch({
      type: "setCurrTemplate",
      tmpData: cmps,
      general
    });
  }
};
</script>

<style>
.second-template-container {
  background-image: url(https://images.pexels.com/photos/3880/couple-love-romantic-silhouette.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  margin: 50px 20px 0 200px;
  background-size: cover;
  padding: 50px;
  background-blend-mode: multiply;
  background-color: burlywood;
}
</style>