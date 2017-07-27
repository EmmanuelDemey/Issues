<template>
  <div class="hello">
  <div class="mdl-layout__tab-panel is-active" id="overview">
    <div v-for="issue in issues">
        <issue-presentation :issue="issue"></issue-presentation>
      </br>
    </div>
  <pagination :pagination="pagination" :callback="loadData" :options="paginationOptions"></pagination>
  </div>
  </div>
</template>

<script>
import presentation from './Presentation.vue'
import axios from 'axios'
import pagination from 'vue-bootstrap-pagination'
export default {
  name: 'hello',
  components: {
    'issue-presentation': presentation,
    pagination
  },
  data: () => ({
    issues: [],
    pagination: {
      total: 0,
      per_page: 4,
      current_page: 1,
      last_page: 0,
      from: 0,
      to: 4
    },
    paginationOptions: {
      offset: 4,
      previousText: 'précédent',
      nextText: 'Suivant',
      alwaysShowPrevNext: true
    }
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      const options = {
        params: {
          paginate: this.pagination.per_page,
          page: this.pagination.current_page
          /* additional parameters */
        }
      }
      axios.get('http://localhost:8088/api/issues', options)
      .then(response => {
        this.issues = response.data
        this.pagination = response.data.pagination
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
