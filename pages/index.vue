<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex xs12 sm8 md6>
      <p>
        <v-text-field
          :counter="10"
          label="Content"
          v-model="content">
          </v-text-field>
      </p>
      <div>
        <v-btn @click="insert">save</v-btn>
      </div>
      <ul>
        <li v-for="(list, index) in content_list" :key="index">
          <span>{{ list.user }}: </span><span>{{ list.content }}</span><span>({{ list.created }})</span><span>×</span>
        </li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      content: ''
    }
  },
  computed: mapState({
    content_list: 'list'
  }),
  methods: {
    insert () {
      this.$store.commit('insert', { user: 'mogumannto', content: this.content })
      this.content = ''
    }
  }
}
</script>
