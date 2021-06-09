<template>
  <div id="app">
    <!-- <create-post></create-post>
    <post-list></post-list>
    <list-blog></list-blog> -->
    <router-view></router-view>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import CreatePost from "./components/CreatePost.vue";
import ListBlog from "./components/ListBlog.vue";

export default {
  components: {
    "list-blog": ListBlog,
    "post-list": PostList,
    "create-post": CreatePost,
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