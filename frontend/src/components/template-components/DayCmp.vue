<template>
<!--need to put to components and fix style binding-->
  <section class="date-time-container">
    <div class="date-container">
      <datepicker
        placeholder="12.05.2018"
        :config="{ dateFormat: 'd-m-Y', static: true }"
        v-model="data.txt.day"
        @click.stop="connectToEditor()"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size+'px'}"
        @focusout="isSelected = false"
      ></datepicker>
    </div>
    <div class="time-container">
      <input
        type="time"
        v-model="data.txt.time"
        placeholder="12:00"
        maxlength="5"
        @click.stop="connectToEditor('hour')"
        class="time-input"
        :style="{color: data.css.color,
              textAlign:data.css.textAlign,
              fontFamily:data.css.fontFamily,
              fontSize:data.css.size}"
        @focusout="isSelected = false"
      >
    </div>
  </section>
</template>
<script>
import Datepicker from "vue-bulma-datepicker";

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
  methods: {
    connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor", cmpPart);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "text" });
    }
  },
  components: {
    Datepicker
  }
};
</script>

<style>
.date-time-container {
  display: flex;
  justify-content: space-evenly;
}
.date-container {
  width: 117px;
}
input {
  width: 117px;
}
.time-container {
  padding: 0;
  color: #191616;
  height: 36px;
  margin: 5px;
}
.time-input {
  width: 117px;
  height: 36px;
  background-color: #f1f1f1;
  letter-spacing: 1px;
  border-radius: 4px;
  font-family: Asap condensed;
  text-align: center;
  font-size: 1rem;
}
</style>
