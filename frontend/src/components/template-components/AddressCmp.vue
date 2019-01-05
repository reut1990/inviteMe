<template>
  <section>
    <div class="address-details">
      <input
        class="address"
        v-model="data.txt"
        :style="data.css"
        @click.stop="connectToEditor()"
        @input="updateName($event, id)"
        :class="{'select-box-border': isOnEdit}"
        @focus="updateEditStatus"
      >
     
    </div>
      <button class="delete-cmp" :class="{'delete-cmp-show':isOnEdit}" @click="deleteCmp"><i class="far fa-trash-alt"></i></button>
  </section>
</template>

<script>
export default {
  props: {
    data: Object,
    id: String
  },
  created() {
    this.showEditPossible
  },
  methods: {
    connectToEditor() {
    
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateName(ev, cmpId) {
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
    },
    showEditPossible() {
      var canBeEdit = this.$store.getters.possibleEditing;
      // console.log("hover 4" , canBeEdit);
      if (canBeEdit) {
        isOnEdit() === true;
      }
    }
  }
};
</script>

<style>
.address {
  width: 100%;
}

</style>