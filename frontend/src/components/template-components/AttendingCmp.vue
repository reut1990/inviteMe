<template>
  <section class="attending-container">
    <h3 class="attending-title">Attending</h3>
    <p class="attending-sub-title">How many peoples are comeing?</p>
    <div class="incomingPepole">
      <!-- <div class="field has-addons has-addons-right"> -->
      <p class="control">
        <a class="button is-primary pepole-counter" @click="lessPepole">
          <i class="fas fa-minus fa-xs"></i>
        </a>
      </p>
      <p class="control pepole-counter">{{pepoleCount}}</p>
      <p class="control">
        <a class="button pepole-counter is-primary" @click="addMorePepole">
          <i class="fas fa-plus fa-xs"></i>
        </a>
      </p>
      <!-- </div> -->
    </div>

    <div class="attending-details">
      <input
        class="input is-small guests-name"
        type="text"
        v-model="fullName"
        placeholder="full name"
        required
      >
      <input
        class="input is-small guests-mobile"
        type="text"
        v-model="phoneNumber"
        placeholder="mobile number"
        required
      >
    </div>

    <br>
    <button class="button is-primary" @click="attendingDetails">Submit</button>
  </section>
</template>

<script>
// import EventBus from '../../events.js'
import inviteService from "../../services/inviteService.js";

export default {
  props: {
    data: Object
  },
  data() {
    return {
      pepoleCount: 0,
      fullName: "",
      phoneNumber: ""
    };
  },
  methods: {
    addMorePepole() {
      this.pepoleCount++;
    },
    lessPepole() {
      this.pepoleCount--;
      if (this.pepoleCount < 0) return (this.pepoleCount = 0);
    },
    attendingDetails() {
      console.log(
        "Deatails entered in attending",
        this.pepoleCount,
        this.fullName,
        this.phoneNumber
      );
      const id = this.$route.params.id;
      inviteService.getById(id).then(res => {
        console.log(res);
        if (res != null)
          res.attends = {
            numOfArriving: this.pepoleCount,
            fullName: this.fullName,
            phoneNumber: this.phoneNumber
          };
        console.log(res);
        inviteService.saveinvite(res);
      });
      //  EventBus.$emit('attendingDetails', {
      //     inviteId:id,
      //     numOfArriving:this.pepoleCount,
      //     fullName:this.fullName,
      //     phoneNumber:this.phoneNumber
      //   })
    }
  }
};
</script>


<style>
.attending-title {
  /* margin: 16px 1px 0 -100px; */
  font-size: 22px;
  letter-spacing: 1px;
  color: black;
  font-family: "Asap Condensed";
}
.attending-sub-title {
  letter-spacing: 1px;
  /* margin: 3px 128px 12px 3px; */
  font-size: 16px;
  color: black;
  font-family: "Asap Condensed";
}
.counter-view {
  width: 30px;
}

.incomingPepole {
  display: flex;
  justify-content: center;
  margin: 5px 0 10px;
}

.attending-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input.guests-name {
  width: 45%;
  margin: 5px 10px 5px 10px;
  /* margin-bottom: 5px; */
  /* margin:0; */
}
input.guests-mobile {
  width: 45%;
  margin: 5px 10px 5px 10px;
  /* margin-bottom: 5px; */
}

.control > input {
  margin: 0px 0 22px 0;
  width: 38px;
}
.pepole-counter {
  background-color: white;
  width: 30px;
  color: black;
  text-align: center;
  padding: 4px 0;
  height: 30px;
}

.button {
  background-color: darksalmon;
}
</style>
