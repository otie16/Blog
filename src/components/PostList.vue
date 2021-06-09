<template>
  <div id="show-blogs">
    <h1 class="heading">Blog posts</h1>
    <input
      class="input"
      type="text"
      v-model="search"
      placeholder="Search blogs"
    />
    <div v-for="post in filterPosts" :key="post.id">
      <div id="single-blogs">
        <h3>{{ post.id }}. {{ post.title | to-uppercase }}</h3>
        <p>{{ post.body | snippet }}</p>
      </div>
    </div>
    <!-- <button @click="getPosts">Load Posts</button> -->
    <h1 v-if="errorMsg">{{ errorMsg }}</h1>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

import axios from "axios";
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
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          // console.log(response.data);
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
};
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.input {
  width: 80%;
  padding: 15px;
}

#single-blogs {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>