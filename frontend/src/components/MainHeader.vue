<template>
  <header class="nav scrollme" :class="{'active': scrolled}">
    <router-link to="/" class="routers logo">
      Invite
      <span class="it">Me</span>
    </router-link>
    <div class="header-right">
      <router-link class="routers btn" :class="{'active-router': scrolled}" to="/contact">Contact</router-link>
      <router-link class="routers btn" :class="{'active-router': scrolled}" to="/about">About Us</router-link>
      <router-link class="routers btn" :class="{'active-router': scrolled}" to="/template">Create Templates</router-link>
      <!--user login/logout -->
      <a v-if="!isUserLogged" class="a-login-signup" :class="{'active-router': scrolled}" @click="showLogin=true">Login/Sign Up</a>

      <div class="dropdown">
        <div v-if="isUserLogged" id="hello-userLogged" class="dropbtn routers btn welcome-user">
          <span class="welcomeUserSpan">WELCOME</span>
          {{' - '+ userLogged[0].nickName}}
        </div>
        <div class="dropdown-content">
          <router-link to="/userArea" >Personal Area</router-link>
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
    <user-singup v-if="showSignup" @close="showSignup=false" ></user-singup>
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
      locationOfLogin:'header',
      showLogin: false,
      showSignup: false,
      scrolled: false,
      userLogged:[],
      isUserLogged: false,
      showUserMenu: false
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    var user=this.$store.getters.user;
    if(user.isUserLogged) {
      this.isUserLogged=true;
      this.userLogged=[user];
      console.log('after refresh', this.userLogged[0].nickname);

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
      console.log(
        "this.userLogged: ",
        this.userLogged
      );
    },
    logoutUser() {
      this.isUserLogged = false;
      this.showUserMenu = false;
      this.$store.dispatch({
        type: "login",
        userDetails: {
          nickname: "",
          password: "",
          isUserLogged:false
        }
      });
      console.log("bye bye");
    }
  }
};
</script>



<style>
.welcome-user {
  display: flex;
  flex-direction: row;
}

.welcome-user input {
  cursor: pointer;
}

.welcome-user input:hover {
  background-color: antiquewhite;
}

#hello-userLogged {
  background: none;
  border: none;
  padding: 0px;
  margin-top: 13px;
  padding-left: 10px;
  color: white;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

.welcomeUserSpan {
  color: black;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  margin-right:10px;
}

.nav {
  position: sticky;
  top: 0;
  width: 100%;
  height: 4em;
  z-index: 2;
  transition: all 0.7s;
}

.hello-userLogged {
  background: none;
}

.it {
  color: #db3131;
}
header {
  overflow: hidden;
  background-color: transparent;
  padding: 20px 40px;
}

.active {
  background-color: #3a3838;
  height: 55px;
  padding: 5px;
}

.routers.btn.active-router, .a-login-signup.active-router, .welcomeUserSpan{
  color:white;
}

header .routers {
  float: left;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 14px;
  line-height: 25px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
}

header .routers:hover {
  color: #232323;
}

header .routers.logo {
  font-family: "Satisfy", cursive;
  font-size: 2rem;
  /* text-shadow: 0px 0px 10px black; */
}

header .routers.btn:hover {
  /* color:#75be; */
  animation: text-shadow-pop-tr 0.5s both;
}

.header-right {
  float: right;
  /* text-shadow: 0px 0px 20px black; */
}


.login-btn {
  cursor: pointer;
  border: 2px solid lightblue;
  background: lightblue;
  border-radius: 15px;
}

.login-btn:hover {
  animation: heartbeat 1.5s ease-in-out infinite both;
}

@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.87);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}

.a-login-signup,
.a-logout {
  text-decoration: none;
  float: left;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 14px;
  line-height: 25px;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  color: black;
}

.dropdown {
  float: left;
  overflow: visible;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown:hover .dropbtn {
  background-color: red;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(230, 224, 173);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: inline-flex;
}
</style>
