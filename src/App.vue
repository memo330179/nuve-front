<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Seasons from './components/Seasons'
import Media from './components/Media'
import Episodes from './components/Episodes'
import Watch from './components/Watch'
import Login from './components/Login'
import Upload from './components/Upload'

export default {
  name: 'App',
  components: {
    Seasons, Media, Episodes, Watch, Login, Upload
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
