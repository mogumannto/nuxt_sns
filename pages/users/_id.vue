<template>
  <section class="container">
    <img :src="`https://github.com/${user.login}.png`" :alt="user.name">
    <h1>{{ user.name }}</h1>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data: user } = await axios.get(`https://api.github.com/users/${params.id}`)
    return {
      user
    }
  }
}
</script>

<style>

</style>
