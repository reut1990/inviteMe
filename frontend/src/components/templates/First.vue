<template>
  <section class="first-template">
    <div class="template-container-first" :style="generalStyle" >
      <div class="backgroun-frame">
        <div class="card-container">
       
       
       
       
          <!-- <draggable>
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
          </draggable> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";
import location from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      // show: false,
      // id: '1p'
    };
  },
  components: {
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    location,
    socialMedia,
    attending,
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
    deleteCmpPart(cmpId){
      // get the cmps of template
      let cmps = this.$store.getters.dynamicCmps;
      console.log(cmps);
 
      cmps = cmps.filter(cmp => cmp.id !== cmpId );
      console.log(cmp.id);
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
    },
    removeEditPossibles() {
    },
  },
  created() {
    let cmps = [
      {
        id: '0',
        kind: "text",
        type: "invaitorName",
        data: {
          txt: "R.M.R invaits you",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 16 + "px"
          }
        }
      },
      {
        id: '1',
        kind: "text",
        type: "eventTitle",
        isEdit: true,
        data: {
          txt: "Get your dance on",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Satisfy",
            fontSize: 28 + "px"
          }
        }
      },
      {
        id: '2',
        kind: "text",
        type: "shortDescription",
        isEdit: true,
        data: {
          txt: "learn how to dance in three simple steps",
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
        id: '3',
        kind: "text",
        type: "day",
        isEdit: true,
        data: {
          txt: "01/12/1990",
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
      // {
      //   id: '4',
      //   kind: "text",
      //   type: "hour",
      //   isEdit: true,
      //   data: {
      //     txt: "00:30",
      //     css: {
      //       color: "black",
      //       textAlign: "center",
      //       fontWeight: {
      //         isBold: false,
      //         value: "normal"
      //       },
      //       fontFamily: "Satisfy",
      //       fontSize: 18 + "px"
      //     }
      //   }
      // },
      {
        id: '4',
        kind: "text",
        type: "location",
        isEdit: true,
        data: {
          txt: "23 Magal Street, Rishon-Lezion",
          css: {
            color: "black",
            textAlign: "center",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 17 + "px"
          }
        }
      },
      {
        id: '5',
        kind: "cmp",
        type: "attending",
        isEdit: true,
        data: {}
      },
      {
        id: '6',
        kind: "cmp",
        type: "socialMedia",
        isEdit: true,
        data: {
          txtF: "",
          txtL: "",
          txtT: "",
          txtI: ""
        }
      }
    ];
    const general = {
      backgroundColor: "#ff9a90"
    };
    this.$store.dispatch({
      type: "setCurrTemplate",
      tmpData: cmps,
      general
    });
  }
};
</script>

<style lang="scss">
.card-container {
height:80vh;
width: 60wh;
}
</style>