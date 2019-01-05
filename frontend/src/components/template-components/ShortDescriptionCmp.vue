<template>
  <section class="short-description-container">
    <input
      class="short-description"
      v-model="data.txt"
      :style="data.css"
      @click.stop="connectToEditor()"
      :class="{'select-box-border': isOnEdit}"
      @focus="updateEditStatus"
      @input="updateShortDescription($event, id)"
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
  data() {
    return {
      isSelected: false
    };
  },
  created() {
    console.log(this.id);
  },
  methods: {
    connectToEditor() {
      this.isSelected = true;
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateShortDescription(ev, cmpId) {
      var newTxt = ev.target.value;
      templateService.saveData(newShortDescription);
      this.$store.dispatch({ type: "updateTxt", newTxt, cmpId });
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
  }
};
</script>
<style>
.select-box-border {
  border: 1px dashed black;
}
.short-description{
  width: 100%;
}
/* .short-description {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
  max-width: 300px;
  width: 100%;
  margin-bottom: 10px;
}*/
</style>
