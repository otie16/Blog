<template>
  <div>
    <section class="home">
      <div class="image-container">
        <!-- <img src="../assets/unsplash.jpg" alt="" /> -->
      </div>
      <div class="login-text">
        <h3>Create An Account</h3>

        <form action="" @submit.prevent="handleSubmit">
          <label for="uname"></label>
          <input
            type="text"
            required
            v-model="formData.name"
            id="uname"
            name="name"
            placeholder="Joe Jimmy"
          /><br />
          <label for="email"></label>
          <input
            type="email"
            required
            v-model="formData.email"
            id="email"
            name="email"
            placeholder="joejimmy@gmail.com |"
          /><br />
          <label for="password"></label>
          <input
            type="password"
            required
            v-model="formData.password"
            id="password"
            name="password"
            placeholder="password"
          />
          <!-- <div v-if="passwordError" class="error">{{ passwordError }}</div> -->
          <br />
          <label for="role"></label>
          <select v-model="formData.role">
            <option value="vendor">Vendor</option>
            <option value="customer">Customer</option>
          </select>
          <!-- <div v-if="roleError" class="error">{{ roleError }}</div> -->

          <br />
          <button>
            <a href="#">Sign up</a>
          </button>
        </form>

        <div class="google-sign-up">
          <img src="/img/notification.png" alt="" />
          <a href="#">Sign up with Google</a>
        </div>
        <div class="Alternative">
          <p>Already have an account?</p>
          <a href="#" style="transform: scale(1) translateY(-5px)">Sign in</a>
        </div>
      </div>
      <div class="social-background">
        <p>Follow us</p>
        <ul class="social">
          <li>
            <a href="#"><img src="/img/home.jpg" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="/img/notification.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="/img/twitter.png" alt="" /></a>
          </li>
        </ul>
      </div>
    </section>
    <p>Email: {{ formData.email }}</p>
    <p>password: {{ formData.password }}</p>
    <p>role: {{ formData.role }}</p>
    <p>name: {{ formData.name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        role: "",
        name: "",
        email: "",
        password: "",
      },
      // roleError: "",
      // emailError: "",
      // passwordError: "",
    };
  },
  methods: {
    handleSubmit() {

      //validate password
      // this.passwordError =
      //   this.password.length > 5
      //     ? ""
      //     : "*Password must be at least 6 chars long";
      console.log(this.formData);
      this.$http
        .post("auth/register", this.formData)
        .then((res) => {
          console.log("success");
        })
        .catch((err) => {
          console.log("error");
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
  letter-spacing: normal;
}
.login-text {
  font-size: 1.4em;
  font-weight: 900;
  margin-left: 190px;
  padding-top: 50px;
  letter-spacing: 1px;
}
.social {
  position: absolute;
  bottom: 13px;
  right: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.social li {
  /* display: inline-block;   */
  margin-left: 40px;
  list-style-type: none;
}
.social li a {
  /* align-items: center; */
  display: inline-block;
  /* filter: invert(1); */
  margin-left: 50%;
  transform: scale(0.6);
  transition: 0.5s;
}
.social a:hover {
  transform: scale(0.5) translateY(-15px);
}
.social-background {
  background-color: rgb(255, 174, 0);
  margin-top: 5px;
  margin-left: 650px;
  height: 95px;
}
.social-background p {
  margin-left: 45px;
  margin-top: 58px;
  position: absolute;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0px;
  align-items: center;
  display: inline-block;
}
.home .image-container img {
  height: 90%;
  right: 0;
  width: 45%;
  position: absolute;
  /* z-index: -1; */
}
input[type="text"] {
  outline: none;
  border: none;
  border-bottom: 2px solid #ccc;
  border-right: 2px solid rgb(55, 177, 55);
  padding: 6px;
  margin-left: 7px;
  width: 250px;
  margin-top: 55px;
  display: inline;
}
select,
input[type="email"] {
  /* border: 3px solid red; */
  border: none;
  border-bottom: 2px solid #ccc;
  outline: none;
  padding: 6px;
  margin-left: 7px;
  width: 250px;
  margin-top: 55px;
  display: inline;
  background-color: #f6f7ff;
}
#email::placeholder {
  color: rgb(110, 110, 110);
}
input[type="password"] {
  /* border: 3px solid red; */
  border: none;
  border-bottom: 2px solid rgb(230, 226, 226);
  outline: none;
  padding: 6px;
  margin-left: 7px;
  width: 250px;
  margin-top: 55px;
  display: inline;
  background-color: #f6f7ff;
}
::placeholder {
  color: rgb(179, 179, 179);
}
#email:active {
  border-bottom: red;
}
button {
  background-color: rgb(255, 174, 0);
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 20px;
  width: 150px;
  color: white;
  margin-top: 55px;
  margin-left: 52px;
  cursor: pointer;
  box-shadow: 1px 6px 6px 1px rgb(235, 179, 58);
}
button a {
  text-decoration: none;
  /* transform: scale(1.1);
    transition: 0.5s; */
}
/* button:hover { */
  /* box-shadow:2px 2px 5px r */
  /* transform: scale(1) translateY(-8px); */
/* } */
/* input[type="text"]:focus {
} */
.google-sign-up img {
  transform: scale(0.6);
  margin-left: 55px;
  margin-top: 55px;
  /* position: absolute; */
}
.google-sign-up a:hover {
  transform: scale(1) translateY(-8px);
}
.google-sign-up a {
  margin-top: 65px;
  margin-right: 882px;
  font-size: 12px;
  font-weight: 600;
  float: right;
  cursor: pointer;
  letter-spacing: 0;
  text-decoration: none;
  transform: scale(1.1);
  transition: 0.5s;
}
.Alternative {
  font-size: 10px;
  margin-top: 55px;
  /* margin-left: 45px; */
}
.Alternative a {
  text-decoration: none;
  margin-left: 8px;
  font-size: 11px;
  transform: scale(1.1);
  transition: 0.5s;
}
/* .Alternative a:hover { */
  /* transform: scale(1) translateY(-5px); */
/* } */
.Alternative p {
  float: left;
  margin-left: 50px;
  font-size: 11px;
}
.error {
  margin-left: 5px;
  color: red;
  margin-top: 10px;
  font-size: 0.6em;
  font-weight: bold;
}
</style>
