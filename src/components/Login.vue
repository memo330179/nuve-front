<template>
  <div class="login">
    <form v-on:submit.prevent="getToken">
    <label>
      Email:
      <input type="email" v-model="user.email"/>
    </label>
    <label>
      Password:
      <input type="password" v-model="user.password"/>
    </label>
    <button type="submit">Submit</button>
  </form>
  </div>
</template>

<script>
export default{
  name: 'login',
  data () {
    return {
      token: {
        token: ''
      },
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    getToken: function (e) {
      this.$http.post('https://nuve-memo3301791.c9users.io:8081/api/login', this.user)
        .then(function (response) {
          this.token = response.data
          localStorage.setItem('token', this.token.token)
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>

</style>
