<template>
  <section>
    <div id="id01" class="modal-signIn">
      <form class="modal-signIn-content animate" @submit.prevent="login"> 
        <!-- action="/" -->
        <div class="imgcontainer">
          <span @click="$emit('close')" class="close-signIn" title="Close Modal">&times;</span>
          <img class="avatar" src="../assets/login.png">
        </div>

        <div class="container-signIn">
          <label for="nickName">
            <b>Username</b>
          </label>
          <input type="text" v-model="typedNickname" placeholder="Enter Username" name="nickName" required>
          
          <label for="password">
            <b>Password</b>
          </label>
          <input type="password" v-model="typedPassword" placeholder="Enter Password" name="password" required>
          
          <button class="loginBtn" type="submit">Login</button>
          <!-- <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>-->
          <div class="notUser">
            <label>Not a user?</label>
            <a id="signupA" @click="$emit('signup')">Sign-up</a>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  profs:['locationOfLogin:'],
  data() {
    return {
      typedNickname: "",
      typedPassword: "",
      isWorng: false
    };
  },

  methods: {
    login() {
      this.$store
        .dispatch({
          type: "login",
          userDetails: {
            nickname: this.typedNickname,
            password:this.typedPassword,
              isUserLogged:true
          }
        })
        .then(user => {
          if (!user) {
            this.isWorng = true;
          } else {
            this.isWorng = false;
            this.$emit("userLogged", user);
          }
        });
        if(this.locationOfLogin==='header') this.$router.push('/');
    }

  }
};
</script>


<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.loginBtn {
  background-color: rgb(48, 173, 161);
  border-radius: 5px;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  margin-right: 45px;
  border: none;
  cursor: pointer;
  width: 30%;
}

.loginBtn:hover {
  opacity: 0.8;
}

#signupA {
  display: inline-block;
  cursor: pointer;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container-signIn {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

.modal-signIn {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  padding-top: 60px;
}

.modal-signIn-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto;
  border: 1px solid #888;
  width: 40%;
  /* height: 80%;; */
}

.close-signIn {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close-signIn:hover,
.close-signIn:focus {
  color: red;
  cursor: pointer;
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 800px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
  .modal-signIn-content {
    width: 70%;
  }
}
</style>
