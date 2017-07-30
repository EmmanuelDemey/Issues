<template>
  <div class="hello">
  <div class="mdl-layout__tab-panel is-active" id="overview">
    <div v-for="issue in issues">
        <issue-presentation :issue="issue"></issue-presentation>
      </br>
    </div>
    <paginate
      :page-count="4"
      :prev-text="'Précédent'"
      :next-text="'Suivant'"
      :containerClass="'ui pagination menu'">
    </paginate>
  </div>
  </div>
</template>

<script>
import presentation from './Presentation.vue'
import axios from 'axios'
import VuejsPaginate from 'vuejs-paginate'

export default {
  name: 'hello',
  components: {
    'issue-presentation': presentation,
    'paginate': VuejsPaginate
  },
  data: () => ({
    issues: []
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get('http://localhost:8088/api/issues')
      .then(response => {
        this.issues = response.data
      }).catch(e => {
        console.log(e)
      })
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
