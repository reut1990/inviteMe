
<template>
  <section class= "userArea-section">
    <div class="title-container">
      <h4 class="head-line">Hello  {{user.nickname}}</h4>
      <h4 class="head-line">Invitations You Created</h4>
    </div>
    <div class="inv-container">
      <div v-for="inv in userInivtes" :key="inv.id"   v-if="inv.inviteName !== ''" :style="inv.generalStyle" class="templateUserArea">
          <p><span class="inviteName">Invite Name: </span><br>{{inv.inviteName}}</p>
          <p><span class="description">Description: </span><br>{{inv.shortDescription}}</p>
          <p><span class="timeCreated">Time created:</span><br>{{inv.modifiedAt}}</p>
          <br>
          <div v-if="inv.attends.fullName" class="rsvp-container">
              <h4>-- RSVP --</h4>
              <span class="rsvp-details">{{inv.attends.fullName}} |</span> 
              <span class="rsvp-details"> {{inv.attends.phoneNumber}} |</span>
              <span class="rsvp-details"> {{inv.attends.numOfArriving}} </span>
          </div>    
          <div v-else>
            <h4>No RSVP's yet</h4>
          </div>   
                  <!-- <p v-for="{cmp, index} in inv.data.cmps" :key="index">{{cmp}}</p> -->
      </div>
    </div>
  </section>
</template>

<script>
import inviteService from "../services/inviteService.js";
// import EventBus from '../events.js'

export default {
  data() {
    return {
      userInivtes: {}
    };
  },
  created() {
    inviteService.query().then(result => {
      this.userInivtes = result.filter(
        invite =>
          invite.creatorId === this.user.id  
    
      );
      console.log(this.userInivtes);
    });
    // EventBus.$on('attendingDetails',data=>{
    //   console.count('userArea')
    //   console.log('in user area details from attending', data);
    // });
  },
  computed: {
    user() {
      console.log(this.$store.getters.user);
      return this.$store.getters.user;
    }
  },
  methods: {}
};
</script>


<style>

.templateUserArea{
    background-blend-mode: color;
    background-color: rgba(255, 255, 255, 0.4); 
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.templateUserArea p{
  width: 80%;
font-family:  cursive;
color: aliceblue;
  margin-bottom: 10px;

}


.userArea-section{
  background: rgb(189, 187, 187);
  height: 120vh;
}

.title-container{
  width: 100%;
  background-color: whitesmoke;
  padding: 5px 0 15px 0 ;
}

.head-line{
  font-family: "Quicksand", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
}

.inv-container{
  display: flex; 
  flex-wrap: wrap;
  flex-direction: row;
}

.inviteName , .description , .timeCreated{
  font-size: 18px;
  font-family: Oswald;
}

.templateUserArea{
  height: 330px;
  width:310px;
  border: 1px solid gray;
  border-radius: 6px;
  transition: all .15s;
}

.templateUserArea:hover{
  box-shadow: 0px 10px 10px #424141;
  transform: translateY(-2%);

}


.rsvp-details{
  font-weight: bold;
}
</style>