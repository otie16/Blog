import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import PostList from "@/components/PostList.vue";
import CreatePost from "@/components/CreatePost.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },

    { path: "/c", component: PostList },
    { path: "/add", component: CreatePost }
  ]
});
