export default{
    computed:{
        filterPosts () {
            return this.posts.filter((post) => {
              return post.title.match(this.search)
            })
          }
    }
}