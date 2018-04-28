<template>
  <div class="episodes">
    <h1>Episodes</h1>
      <div class="row">
        <div class="col-md-4">
          <div v-for="episode in episodes" :key="episode.id" class="card mb4 box-shadow" v-on:click="getEpisode(episode.id)">
            <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185/' + episode.image_path" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{episode.title}} {{episode.id}}</h5>
              <p class="card-text">{{episode.overview}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'episodes',
  props: {
    season_id: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      newUser: {},
      episodes: [
      ]
    }
  },
  methods: {
    getEpisode: function (episodeId) {
      console.log(episodeId)
      this.$router.push('/watch/' + episodeId)
    }
  },
  created: function () {
    this.$http.get('https://nuve-memo3301791.c9users.io:8081/media_api/episodes/' + this.season_id, {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('token')
      }
    })
      .then(function (response) {
        this.episodes = response.data
      }, response => {
        if (response.status === 401) {
          this.unauthorized = true
        }
      })
  }
}
</script>

<style scoped>

</style>
