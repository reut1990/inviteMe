<template>
  <section @connectToCmpPart="connectToCmpPart">
    <div class="editTxt-container">
      <div class="editTxt-hedear">
        <h4>style your text</h4>
      </div>
      <div class="editTxt-btns">
        <div class="edit-font" @click="handleFont">
          <select class="select-font">
            <option value="font" disable-selection>font</option>
            <option value="Quicksand">Quicksand</option>
            <option value="AsapCondensed">AsapCondensed</option>
            <option value="Merriweather">Merriweather</option>
            <option value="Oswald">Oswald</option>
          </select>
        </div>
        <p class="edit-size" @click="handleSize">
          <i class="fas fa-font fa-lg" @click.stop="handleSize(-1)"></i>
          <i class="fas fa-font fa-2x" @click.stop="handleSize(+1)"></i>
        </p>
        <div class="edit-color-bold">
          <div class="edit-color">
            <input class="textColor-icon" type="color"  @input="handleColor" v-model="color">
          </div>
          <div @click="handleBold" class="edit-bold">
            <i class="fa fa-bold fa-lg"></i>
          </div>
        </div>
        <div class="edit-aling" @click="handleAlignment">
          <i class="fa fa-align-left fa-lg" @click.stop="handleAlignment('left')"></i>
          <i class="fa fa-align-center fa-lg" @click.stop="handleAlignment('center')"></i>
          <i class="fa fa-align-right fa-lg" @click.stop="handleAlignment('right')"></i>
        </div>
      </div>
      <div class="editTxt-footer"></div>
      <button
        class="btn-done button is-primary"
        @click.stop="closeEdit"
      >done</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["currCmpPart"],
  data(){
    return{
        color:"red"
    }
  },
  created() {},
  methods: {
    connectToCmpPart(cmpPart) {
      this.currCmpPart = cmpPart;
    },
    closeEdit() {
      this.$emit('closeEditor');
    },
    handleAlignment(align) {
      this.$emit("styleTextUpdate", {
        field: "textAlign",
        css: { textAlign: align },
        kind: "text"
      });
    },
    handleFont(event) {
      const fontSelected = event.target.value;
      this.$emit("styleTextUpdate", {
        field: "fontFamily",
        css: { fontFamily: fontSelected },
        kind: "text"
      });
    },
    handleSize(sizeChange) {
      const currCmpObj = this.cmps.find(cmp => {
        return cmp.id === this.currCmpPart;
      });
      let numb = +currCmpObj.data.css.fontSize.substring(
        0,
        currCmpObj.data.css.fontSize.length - 2
      );
      const newFontSize = numb + sizeChange;
      this.$emit("styleTextUpdate", {
        field: "fontSize",
        css: { fontSize: newFontSize + "px" },
        kind: "text"
      });
    },
    handleColor(event) {
      this.color = event.target.value;
      this.$emit("styleTextUpdate", {
        field: "color",
        css: { color: this.color },
        kind: "text"
      });
    },
    handleBold() {
      this.isBold = !this.isBold;
      let weight;
      if (this.isBold === true) weight = "bold";
      else weight = "normal";
      this.$emit("styleTextUpdate", {
        field: "fontWeight",
        css: { fontWeight: weight },
        kind: "text"
      });
    }
  },
  computed: {
    cmps() {
      return this.$store.getters.dynamicCmps;
    }
  }
};
</script>

<style>
.editTxt-container {
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 200px;
  border-color: #b9b9b9;
  border-width: 0;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  background: #fff;
}
.editTxt-hedear {
  padding: 15px 15px 7px 8px;
  font-family: "Museo-700";
  font-size: 22px;
}
.select-font {
  text-align: center;
  background: #f9f9fb;
  color: #000;
  border: 1px solid #e7e8ee;
  border-radius: 4px;
  padding: 5px 10px;
  height: 38px;
  max-width: 100%;
  width: 100%;
  font-size: 1em;
  margin-bottom: 15px;
}
.editTxt-btns {
  padding: 5px 15px;
}
.edit-aling {
  padding: 5px 0 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  border-bottom: 1px solid #e8e8e8;
}
.edit-color-bold {
  margin-top: 17px;
  padding-bottom: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #e8e8e8;
}
.textColor-icon {
  width: 30px;
  height: 25px;
}
.edit-size {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-evenly;
}
.edit-txt-section {
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 200px;
  height: 215px;
  overflow: auto;
  background-image: linear-gradient(to top, #f3f3f3, #ffffff, #f3f3f3);
  border-radius: 10px;
}
.btn-done {
  margin: 5% 25%;
  width: 100px;
}
</style>