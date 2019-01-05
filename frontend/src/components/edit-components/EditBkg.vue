<template>
  <section>
    <div class="edit-bkg-section">
      <h4 class="bkg-title">Background Color:</h4>
      <input class="bkg-picker" type="color" v-model="bgc" @change="handleChange">

      <hr class="hr-box">
      <div class="edit-upload-section">
        <input
          type="file"
          style="display:none"
          ref="fileInput"
          accept="image/*"
          @input="onFilePicked "
        >
        
        <button class="uploadImg-btn" @click="onPickFile">Upload Background Image</button>
      </div>
      <button class="btn-done button is-primary" @click.stop="closeEdit">done</button>
    </div>
  </section>
</template>

<script>
import cloudinaryService,{uploadImg} from '../../services/cloudinaryService.js'
export default {
  data() {
    return {
      bgc: "#ff9a90",
      image: "",
      imageUrl: "",
      name: "",
      bgcImage: ""
    };
  },

  methods: {
    handleChange() {
      this.$emit("styleUpdate", {
        field: "backgroundColor",
        css: { backgroundColor: this.bgc }
      });
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      uploadImg(this.$refs.fileInput)
        .then(url=>{
          this.$emit("styleUpdate", {
          field: "backgroundImage",
          css: { backgroundImage: "url('" + url + "')" }
        }); 
    });
    },
   
        closeEdit() {
      this.$emit('closeEditor');
    }
  }
};
</script>

<style>
.edit-bkg-section {
  display: flex;
  flex-direction: column;
  height: 310px;
  width: 200px;
  border-color: #b9b9b9;
  border-width: 0;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  background: #fff;

  /* display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: column;
  width: 200px;
  height: 215px;
  overflow: auto;
  background-image: linear-gradient(to top, #f3f3f3, #ffffff, #f3f3f3);
  border-radius: 10px; */
}

.bkg-picker {
  border-radius: 3px;
  cursor: pointer;
  margin: 10px auto;
  height: 50px;
  width: 50px;
}

.close-edit-bkg-section {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 15px;
  font-weight: bold;
}

.uploadImg-btn {
  padding: 10px;
  margin: 20px;
  width: 80%;
  border-radius: 10px;
  background: #504f4f;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
  font-family: "Quicksand", sans-serif;
  font-weight: 400;
}

.uploadImg-btn:hover {
  background: rgb(190, 183, 183);
  color: white;
}

.bkg-title {
  margin-top: 10px;
  font-family: "Quicksand";
}

.hr-box {
  margin: 0;
}

.btn-done {
  margin: 5% 25%;
  width: 100px;
}
</style>

