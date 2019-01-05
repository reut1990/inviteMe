<template>
  <div class="m">
    <!-- <div>
       <h2>Search and add a pin</h2>
      <label >
        <gmap-autocomplete @place_changed="setPlace"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
      <br>
    </div>-->
    <gmap-map
      :center="center"
      :zoom="12"
      style="width:250px;  height: 250px;"
      @click.native.stop="connectToEditor"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in this.markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  props: {
    data: Object,
    id: String
  },
  created(){
    console.log(this.data);
  },
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: this.data.center
      // markers:this.data.markers,
      // places: this.data.places,
      // currentPlace:this.data.currentPlace
    };
  },
  computed: {
    markers() {
      return this.data.markers;
    },
    places() {
      return this.data.places;
    },
    currentPlace() {
      return this.data.currentPlace;
    }
  },
  watch: {
    markers() {
      const {position} = this.markers[this.markers.length - 1];
      console.log({position})
      this.setCenter(position)
    }
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    // setPlace(place) {
    //   this.currentPlace = place;
    // },
    // addMarker() {
    //   if (this.currentPlace) {
    //     const marker = {
    //       lat: this.currentPlace.geometry.location.lat(),
    //       lng: this.currentPlace.geometry.location.lng()
    //     };
    //     this.markers.push({ position: marker });
    //     this.places.push(this.currentPlace);
    //     this.center = marker;
    //     this.currentPlace = null;
    //   }
    // },
    setCenter({lat, lng}) {
      this.center = {
        lat,
        lng
      };
    },
    connectToEditor() {
      this.isSelected = true;
      // console.log("in connect to editor in mapCmp", this.data);
      this.$emit("connectToCmpPart", this.id);
      this.$emit("showEditor", { kind: "map" });
    },
    geolocate: function() {
      console.log("curr center:", this.center);
      navigator.geolocation.getCurrentPosition(position => {
        this.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
        console.log("curr center:", this.center);
      });
    }
  }
};
</script>
<style>
.m {
  display: flex;
  justify-content: center;
  margin-top:30px;
}
</style>
