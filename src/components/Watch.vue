<template>
  <div class="watch">
    <h1>{{episode.title}}</h1>
    <video width="320" height="240" controls>
      <source :src="'http://nuve-memo3301791.c9users.io:8081/media_api/stream/' + episode_id" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default{
  name: 'watch',
  data () {
    return {
      episode: {},
      unauthorized: false
    }
  },
  created: function () {
    if (localStorage.getItem('loggedUser') !== null) {
      this.$router.push('/login')
    }
    this.episode_id = this.$route.params.media_id
    this.$http.get('https://nuve-memo3301791.c9users.io:8081/media_api/serve/' + this.$route.params.media_id, {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('token')
      }
    })
      .then(function (response) {
        this.episode = response.data
      }, response => {
        if (response.status === 401) {
          console.log('asds')
          this.unauthorized = true
        }
      })
  }
}
</script>

<style scoped>

</style>
