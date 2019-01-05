<template>
  <section class="event-title-container">
    <textarea
      rows="1"
      class="event-name"
      v-model="data.txt"
      :style="data.css"
      @click.stop="connectToEditor()"
      @input="updateEventName($event, id)"
      :class="{'select-box-border': isOnEdit}"
      @focus="updateEditStatus"
    />
    <button class="delete-cmp" :class="{'delete-cmp-show':isOnEdit}" @click="deleteCmp"><i class="far fa-trash-alt"></i></button>
  </section>
</template>
<script>
export default {
  props: {
    data: Object,
    id: String
  },
  created() {},
  methods: {
    connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateEventName(ev, cmpId) {
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

.event-name:focus{
    overflow: hidden;
    outline:none;
}
</style>