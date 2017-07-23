<template>
  <div class="hello">
  <div class="mdl-layout__tab-panel is-active" id="overview">
    
    <issue-presentation></issue-presentation>
    <issue-presentation></issue-presentation>
    <issue-presentation></issue-presentation>
    <issue-presentation></issue-presentation>
  
  </div>
  </div>
</template>

<script>
import presentation from './Presentation.vue'
export default {
  name: 'hello',
  components: {
    'issue-presentation': presentation
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
