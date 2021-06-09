<template>
  <div>
    <form  class="form" @submit.prevent="CreatePost">
      <div>
        <label for="userId">Post User Id</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>

      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>

      <div>
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>
      <button>Create Post</button>
    </form>
   
  </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      formData: {
        userId: "", 
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.formData)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.form{
  background:grey;
margin: 0 auto;
width: 50%;
}


</style>