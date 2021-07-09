<template>
  <div id="app">
<!-- <Register /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Register from "./components/Register.vue"
import PostList from "./components/PostList.vue";
// import CreatePost from "./components/CreatePost.vue";
import ListBlog from "./components/ListBlog.vue";

export default {
  components: {
    ListBlog,
     PostList,
    // CreatePost,
     Register,
  },
};
</script>

<style scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>