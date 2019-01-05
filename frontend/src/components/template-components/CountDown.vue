<template>
  <section class="count-down-container">
    <h2>COUNTDOWN:</h2>
    <p class="time-text" v-bind:class="changeColorNum">{{ timeForDisplay }}</p>
  </section>
</template>,
<script>
export default {
     props: {
    data: Object
    },
  data() {
    return {
        nowDate: Date.now(),
        }
    },
    created() {
        this.timeRunner()
    },
    methods: {
        timeRunner() {
            const interval = setInterval(() => {
                this.nowDate = Date.now()
                if (this.timeRemaining < 1000) {
                    // console.log(this.timeRemaining)
                    this.playSound('sounds/A-Tone-His_Self-1266414414.mp3')
                    clearInterval(interval);
                }
            }, 1000)
        },
        checkTimeForDis(i) {
            if (i < 10) { i = "0" + i };
            return i;
        },
    },
    computed: {
        changeColorNum() {
            return {
                red: this.timeRemaining <= 6000,
            }
        },
        timeRemaining() {
            return this.time - this.nowDate
        },
        timeForDisplay() {
            var m = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
            var s = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
            m = this.checkTimeForDis(m)
            s = this.checkTimeForDis(s)
            return `${m}:${s}`
        },
    }
}
</script>
    