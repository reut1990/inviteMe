<template>
  <section class="third-template">
    <div class="edit-template-third-section">
      <div class="template-third-container" :style="generalStyle">
          <div class="card-third-container" >
           <draggable>
            <component
              @connectToCmpPart="connectToCmpPart"
              @showEditor="showEditor"
              v-for="cmp in dynamicCmps"
              :key="cmp.id"
              :id="cmp.id"
              :is="cmp.type"
              :data="cmp.data"
              @deleteCmp="deleteCmpPart"
            />
            </draggable>
            </div>
        </div>
      </div>
    <button class="publish" @click="publish">Publish</button>
    <publish-modal v-if="show" @close="show=false" :type="type"></publish-modal>
  </section>
</template>

<script>
import publishModal from "@/components/PublishModal.vue";
import invaitorName from "@/components/template-components/InvaitorNameCmp.vue";
import eventTitle from "@/components/template-components/EventTitleCmp.vue";
import shortDescription from "@/components/template-components/ShortDescriptionCmp.vue";
import day from "@/components/template-components/DayCmp.vue";
import map from "@/components/template-components/MapCmp.vue";
import location from "@/components/template-components/AddressCmp.vue";
import attending from "@/components/template-components/AttendingCmp.vue";
import socialMedia from "@/components/template-components/SocialMediaCmp.vue";
import templateService from "@/services/templateService";
import draggable from "vuedraggable";

export default {
  data() {
    return {
      show: false,
      type: "third"
    };
  },
  components: {
    // map,
    publishModal,
    invaitorName,
    eventTitle,
    shortDescription,
    day,
    location,
    socialMedia,
    attending,
    templateService,
    draggable
  },
  methods: {
    connectToCmpPart(cmpPart) {
      this.$emit("connectToCmpPart", cmpPart);
    },
    showEditor({ kind }) {
      this.$emit("showEditor", { kind });
    },
    connectToEditor(cmpPart) {
      this.$emit("connectToCmpPart", cmpPart);
      console.log('cmpPart:',cmpPart)
      this.$emit("showEditor", { kind: "background" });
    },
    publish() {
      this.show = true;
      templateService
        .add({
          cmps: this.dynamicCmps,
          base: {
            name: "third"
          },
          name: "Puki's birrthday",
          modified: Date.now(),
          creatorId: "abc123" // TODO: currLoggedinuserId here
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
 
    // getUserStyle() {
    //   return this.$store.getters.getUserStyle;
    // },
    dynamicCmps() {
      return this.$store.getters.dynamicCmps;
    },
      generalStyle() {
      return this.$store.getters.generalStyle;
    },
  },
  created() {
    const cmps = [
      {
        id: "0",
        kind: "text",
        type: "invaitorName",
        isEdit: true,
        data: {
          txt: `YOU ARE INVITED TO A`,
          css: {
            color: "white",
            textAlign: "left",
            padding: 13+"px",
            margin:"0 auto",
            fontWeight: {
              isBold: true,
              value: "normal"
            },
            fontFamily: "Oswald",
            fontSize: 27 + "px"
          }
        }
      },
             {
        id: "1",
        kind: "text",
        type: "shortDescription",
        isEdit: true,
        data: {
          txt: `Join us For Rotem's 26th Birthday `,
          css: {
            color: "white",
            textAlign: "center",
            padding:"",
            paddingTop:35+"px",
            margin:"",
            marginLeft:189+"px",
            marginTop:-88+"px",
            transform: "rotate(14deg)",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 20 + "px"
          }
        }
      },     
            {
        id: "2",
        kind: "text",
        type: "eventTitle",
        isEdit: true,
        data: {
          txt: "P O O L   P A R T Y",
          css: {
            color: "white",
            textAlign: "center",
            width:"100%",
            padding:"",
            paddingTop:32+"px",
            margin:"",
            marginRight:76+"px",
            // transform: "rotate(-14deg)",
            fontWeight: {
              isBold: true,
              value: "normal"
            },
            fontFamily: "fantasy",
            fontSize: 56 + "px"
          }
        }
      },

        {
        id: "3",
        kind: "text",
        type: "day",
        isEdit: true,
        data: {
          txt: {
            date: "19/08/2018",
            time: "12:30"
          },
          css: {
            color: "black",
            textAlign: "center",
            marginTop:39+"px",
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
        type: "location",
        isEdit: true,
        data: {
          txt: "124 conch street,Bikini Bottom",
          css: {
            color: "black",
            textAlign: "center",
            padding:"",
            margin:"",
            marginLeft:175 +"px",
            marginTop:35+"px",
            fontWeight: {
              isBold: false,
              value: "normal"
            },
            fontFamily: "Asap Condensed",
            fontSize: 18 + "px"
          }
        }
      },
      {
        id: "5",
        kind: "cmp",
        type: "attending",
        isEdit: true,
        data: {
          css:{
            padding:"",
            marginTop:47+"px",
          }
        }
      },
   
    ];
      const general = {
      backgroundColor: "",

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


</style>
 
 