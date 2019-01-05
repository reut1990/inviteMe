<template>
  <section @connectToCmpPart="connectToCmpPart">
    <h2>Search and add a pin</h2>
    <label>
      <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
      <button class="add" @click="addMarker">Add</button>
    </label>
    
    <button class="btn-done button is-primary" @click.stop="closeEdit">done</button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      markers: [],
      places: [],
      currentPlace: null
    };
  },

  props: ["currCmpPart"],
  created() {},
  methods: {
    connectToCmpPart(cmpPart) {
      this.currCmpPart = cmpPart;
    },
    closeEdit() {
      this.$emit("closeEditor");
    },
    handleMap() {
      this.$emit("mapUpdate", {
        field: "map",
        data: {
          markers: this.markers,
          places: this.places,
          currentPlace: this.currentPlace
        }
      });
    },
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.handleMap();
        this.currentPlace = null;
      }
    }
  }
};
</script>

<style>
.editMap {
  background-color: ghostwhite;
  padding: 10px;
}
</style>



    