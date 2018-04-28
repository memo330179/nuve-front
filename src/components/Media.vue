<template>
  <div class="media">
    <h1>Shows</h1>
    <div class="row">
      <div class="col-md-4">
        <div v-for="show in shows" :key="show.id" class="card mb4 box-shadow" v-on:click="getSeasons(show.id)">
          <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185/'+show.series_art" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{show.title}}</h5>
            <p class="card-text">{{show.overview}}</p>
          </div>
        </div>
      </div>
    </div>
    <h1>Movies</h1>
    <div class="row">
      <div class="col-md-4">
        <div v-for="movie in movies" :key="movie.id" class="card mb4 box-shadow" v-on:click="getMovie(movie.id)">
          <img class="card-img-top" :src="'http://image.tmdb.org/t/p/w185/'+movie.image_path" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <p class="card-text">{{movie.overview}}</p>
          </div>
        </div>
        <div v-if="unauthorized" class="alert alert-warning" role="alert">
          <strong>Oops!</strong> It looks like you are not logged in.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'media',
  data () {
    return {
      newUser: {},
      shows: [
      ],
      movies: [
      ],
      unauthorized: false
    }
  },
  methods: {
    getSeasons: function (showId) {
      this.$router.push('/seasons/' + showId)
    },
    getMovie: function (movieId) {
      this.$router.push('/watch/' + movieId)
    }
  },
  created: function () {
    // if (localStorage.getItem('loggedUser') == null) {
    //   this.$router.push('/login')
    // }
    this.$http.get('https://nuve-memo3301791.c9users.io:8081/media_api/shows', {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('token')
      }
    })
      .then(function (response) {
        this.shows = response.data
      }, response => {
        if (response.status === 401) {
          console.log('asds')
          this.unauthorized = true
        }
      })

    this.$http.get('https://nuve-memo3301791.c9users.io:8081/media_api/movies', {
      headers: {
        Authorization: 'Basic ' + localStorage.getItem('token')
      }
    })
      .then(function (response) {
        this.movies = response.data
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
  .contacted{
    text-decoration: line-through;
  }
</style>
