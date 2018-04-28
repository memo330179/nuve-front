<template>
  <div class="upload">
    <div class = "col-sm-8 col-sm-offset-2">
      <vue-dropzone id="drop1" :options="dropOptions"></vue-dropzone>
  </div>
  </div>
</template>

<script>
import vueDropzone from 'vue2-dropzone'

export default {
  data: () => ({
    dropOptions: {
      url: 'https://nuve-memo3301791.c9users.io:8081/media_api/upload/media'
    }
  }),
  components: {
    vueDropzone
  }
}
</script>

<style scoped>

</style>
