<template>
  <header class="nav scrollme" :class="{'active': scrolled}">
    <router-link to="/" class="routers logo">
      Invite
      <span class="it">Me</span>
    </router-link>

    <div class="header-right">
      <router-link class="routers btn" :class="{'active-router': scrolled}" to="/contact">Contact</router-link>
      <router-link class="routers btn" :class="{'active-router': scrolled}" to="/about">About Us</router-link>
      <router-link
        class="routers btn"
        :class="{'active-router': scrolled}"
        to="/template"
      >Create Templates</router-link>
      <!--user login/logout -->
      <a
        v-if="!isUserLogged"
        class="a-login-signup"
        :class="{'active-router': scrolled}"
        @click="showLogin=true"
      >Login/Sign Up</a>

      <div class="dropdown">
        <div v-if="isUserLogged" id="hello-userLogged" class="dropbtn routers btn welcome-user">
          <span class="welcomeUserSpan">WELCOME</span>
          {{' - '+ userLogged[0].nickName}}
        </div>
        <div class="dropdown-content">
          <router-link to="/userArea">Personal Area</router-link>
          <a href="#" @click="logoutUser">Logout</a>
        </div>
      </div>
    </div>
    <user-login
      v-if="showLogin"
      @userLogged="logged"
      @signup="showLogin=false;showSignup=true"
      @close="showLogin=false"
      :locationOfLogin="locationOfLogin"
    ></user-login>
    <user-singup v-if="showSignup" @close="showSignup=false"></user-singup>

    <button class="menu-icon" @click="toggleMenu">☰</button>
  </header>
</template>

<script>
import userLogin from "@/components/UserLogin.vue";
import userSingup from "@/components/UserSignUp.vue";
export default {
  components: {
    userLogin,
    userSingup
  },

  data() {
    return {
      locationOfLogin: "header",
      showLogin: false,
      showSignup: false,
      scrolled: false,
      userLogged: [],
      isUserLogged: false,
      showUserMenu: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    var user = this.$store.getters.user;
    if (user.isUserLogged) {
      this.isUserLogged = true;
      this.userLogged = [user];
      console.log("after refresh", this.userLogged[0].nickname);
    }
    console.log(this.isUserLogged);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    logged(user) {
      this.userLogged = user;
      this.isUserLogged = true;
      this.showLogin = false;
      console.log("this.userLogged: ", this.userLogged);
    },
    logoutUser() {
      this.isUserLogged = false;
      this.showUserMenu = false;
      this.$store.dispatch({
        type: "login",
        userDetails: {
          nickname: "",
          password: "",
          isUserLogged: false
        }
      });
      console.log("bye bye");
    },
    toggleMenu() {
      document.body.classList.toggle("open");
      if (document.body.classList.contains("open"))
        document.querySelector(".menu-icon").innerText = "✖";
      else document.querySelector(".menu-icon").innerText = "☰";
    }
  }
};
</script>



<style>
</style>
