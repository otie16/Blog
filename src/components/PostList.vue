<template>
  <div id="show-blogs">
    <h1 class="heading">Menu</h1>
    <input
      class="input"
      type="text"
      v-model="search"
      placeholder="Search blogs"
    />
    <ul>
    <li v-for="(post, i) in posts" :key="i" >
        <h3>{{ post.name | to-uppercase }}</h3>
        <h5>{{ post.description | snippet }}</h5>
    </li>
    </ul>
    <!-- <button @click="getPosts">Load Posts</button> -->
    <h1 v-if="errorMsg">{{ errorMsg }}</h1>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
// import {HTTP} from '../axios'

// import axios from "axios";
export default {
  name: "PostList",
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      errorMsg: "",
      search: "",
    };
  },
  methods: {
    getPosts() {
      // return console.log(HTTP)
      this.$http
        .get("user/item")
        .then((res) => {
          console.log(res.data);
          this.posts = res.data;
        })
        .catch((err) => {
          //   console.log(error);
          this.errorMsg = "Error retrieving data";
        });
    },
  },
  //finding the searched term
  computed: {},
  mixins: [searchMixin],
  mounted() {
    this.getPosts()
  }
};
</script>

<style scoped>
/* #show-blogs {
  max-width: 800px;
  margin: 0 auto;
} */
/* 
.input {
  width: 80%;
  padding: 15px;
} */
/* 
.list{
   grid-template-columns: 1fr 1fr 1fr;
} */

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  box-shadow: 2px 2px 5px rgb(152, 154, 243);
  /* border: 1px solid #222; */
  margin: 10px;
}

</style>