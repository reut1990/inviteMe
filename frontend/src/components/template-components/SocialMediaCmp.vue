<template>
  <section class="contact-container">
    <div class="social-media">
      <a href="#" class="facebook social-media-box" style="color: white;" @click="toggle = !toggle">
        <i class="fab fa-facebook-f"></i>
      </a>
      <input
        v-model="data.txtF"
        class="facebookLink input is-small"
        type="text"
        v-show="toggle"
        placeholder="Copy your profile link to here"
      >
      <!-- <input class="input"  placeholder="Text input"> -->
      <a href="#" class="twitter social-media-box" style="color: white;" @click="toggle = !toggle">
        <i class="fab fa-twitter"></i>
      </a>
      <input
        v-model="data.txtL"
        class="facebookLink input is-small"
        type="text"
        v-show="toggle"
        placeholder="Copy your profile link to here"
      >
      
      <a href="#" class="be social-media-box" style="color: white;" @click="toggle = !toggle">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <input
        v-model="data.txtT"
        class="facebookLink input is-small"
        type="text"
        v-show="toggle"
        placeholder="Copy your profile link to here"
      >
      
      <a href="#" class="orange social-media-box" style="color: white;" @click="toggle = !toggle">
        <i class="fab fa-instagram"></i>
      </a>
      <input
        v-model="data.txtI"
        class="facebookLink input is-small"
        type="text"
        v-show="toggle"
        placeholder="Copy your profile link to here"
      >
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {
      toggle: false
    };
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style>
.social-media-box {
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin: 20px 10px;
  background-color: rgb(187, 185, 185);
  transition: background-color 0.5s;
}
.social-media-box:hover {
  cursor: pointer;
  background-color: #516fad;
}
.social-media {
  position: relative;
}
.facebookLink {
  position: absolute;
  bottom: -35px;
  left: 57px;
  right: 0;
  /* background-color: rgba(240, 248, 255, 0.74); */
  /* padding: 6px; */
  /* border-radius: 5px; */
}
input.facebookLink {
  width: 63%;
}
</style>
