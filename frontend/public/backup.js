export default {
    state: {
        currentIdx: null,
        templateCmps: [{
            id: 0,
            type: 'titleCmp',
            isEdit: true,
            data: {
                invaitorName: 'R.M.R invaits you',
                eventName: 'Get your dance on',
                shortDescription: 'learn how to dance in three simple steps'
            },
        },
        {
            id: 1,
            type: 'eventDetailsCmp',
            isEdit: true,
            data: {
                date: 'oct 30 2018',
                time: '20:30',
                address: '23 magal street, rishon-lezion'
            },
        },
        ],
    },
    getters: {
        // getCurrCmp: (state) => state.currentCmp,
        // getData(state) {
        //     return state.templateCmps[0].data;
        // },
        dynamicCmps: state => state.templateCmps,
    },
    mutations: {
        getCurrCmp(state, { idx }) {
            const cmpIdx = state.templateCmps.findIndex(cmp => cmp.id === templateCmps.id);
            state.currentIdx = idx;
        }
    },
    actions: {
    }
}
//////////////////////////////
<template>
  <section class="event-description-container">
    <input class="invaitor-name" v-model="data.invaitorName">
    <textarea class="event-name" v-model="data.eventName"/>
    <input class="short-description" v-model="data.shortDescription">
  </section>
</template>
<script>
export default {
 props:{
    data: Object
  },
  created() {
    //  @blur="updateInvaitorName"
    //  @blur="updateEventName"
    //  @blur="updateShortDescription"
  },
  // computed: {
  //   titleData() {
  //     return this.$store.getters.getData;
  //   }
  // }
};
</script>

<style>
.event-description-container {
  padding: 10px;
  /* color: rgb(153, 49, 54); */
}
.event-description-container:hover {
  cursor: all-scroll;
}
.invaitor-name {
  text-align: center;
  font-size: 14px;
  /* font-family: "Satisfy", cursive; */
  text-transform: uppercase;
  margin-bottom: 7px;
  color: rgb(153, 49, 54);
}
.event-name {
  /* padding: 18px; */
  font-size: 34px;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: rgb(153, 49, 54);
  max-width: 300px;
}
.short-description {
  background-color: rgb(153, 49, 54);
  font-size: 12px;
  color: white;
  max-width: 300px;
  width: 100%;
  text-align: center;
}
</style>

