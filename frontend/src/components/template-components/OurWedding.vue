
<template>
  <div class="txt-ourWedding">
    ∙∙·▫▫ᵒᴼᵒ▫ₒₒₒ▫ᵒᴼᵒ
    <span>
      <input
        class="invaitor-name"
        v-model="data.txt"
        :class="{'select-box-border': isSelected}"
        :style="data.css"
        @click.stop="connectToEditor()"
        @focusout="isSelected = false"
        @input="updateInvaitorName($event, id)"
      >
    </span>
    ᵒᴼᵒ▫ₒₒₒ▫ᵒᴼᵒ▫▫·∙∙
  </div>
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
  created() {},
  methods: {
    connectToEditor() {
      this.isSelected = true;
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    },
    updateText(ev) {
      var newText = ev.target.value;
      templateService.saveData(newText);
    }
  },
  computed: {},
  components: {}
};
</script>
<style>
.txt-ourWedding {
  text-shadow: 0 0 20px lightblue;
  background: dimgrey;
}

/* .txt-ourWedding span {
  font-size: 30px;
} */
</style>