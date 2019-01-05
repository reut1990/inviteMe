<template>
  <section class="event-description-container">
    <input
      class="invaitor-name"
      v-model="data.txt"
      :style="data.css"
      @click.stop="connectToEditor()"
      @input="updateInvaitorName($event, id)"
      :class="{'select-box-border': isOnEdit}"
      @focus="updateEditStatus"   
    >
     <button class="delete-cmp" :class="{'delete-cmp-show':isOnEdit}" @click="deleteCmp"><i class="far fa-trash-alt"></i></button>
  </section>
</template>
<script>
import templateService from "@/services/templateService.js";
import userLogin from "@/components/UserLogin.vue";

export default {
  props: {
    data: Object,
    id: String
  },
 
  created() {},
  methods: {
    connectToEditor() {
      this.isSelected = true;
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
     updateInvaitorName(ev, cmpId) {
      var newTxt = ev.target.value;
      this.$store.dispatch({ type: "updateTxt", newTxt, cmpId });
      // templateService.saveData(newInvaitorName);
    },
    updateEditStatus() {
      this.$store.dispatch("changeEditingStatus", { id: this.id });
    },
      deleteCmp(){
      this.$emit("deleteCmp",this.id);
    }
  },
  computed: {
     isOnEdit() {
      return this.$store.getters.currenEditing === this.id;
    }
  },

};
</script>

<style>

</style>