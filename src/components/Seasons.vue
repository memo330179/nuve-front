<template>
  <div class="seasons">
    <h1>Seasons</h1>
      <div class="row">
        <div class="col-md-4">
          <div v-for="season in seasons" :key="season.id" class="card mb4 box-shadow" v-on:click="getEpisodes(season.id)">
            <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185/'+season.art" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">{{season.number}}</h5>
              <p class="card-text">{{season.overview}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default{
  name: 'seasons',
  props: {
    show_id: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      newUser: {},
      seasons: [
      ]
    }
  },
  methods: {
    getEpisodes: function (seasonId) {
      this.$router.push('/episodes/' + seasonId)
    }
  },
  created: function () {
    this.$http.get('https://nuve-memo3301791.c9users.io:8081/media_api/seasons/' + this.show_id, {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('token')
      }
    })
      .then(function (response) {
        this.seasons = response.data
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
