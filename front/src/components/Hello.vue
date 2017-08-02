<template>
  <div class="hello">
  <div class="mdl-layout__tab-panel is-active" id="overview">
    <div v-for="issue in issues">
        <issue-presentation :issue="issue"></issue-presentation>
      </br>
    </div>
    <paginate
    :page-count="numberPages"
    :margin-pages="4"
    :page-range="4"
    :initial-page="0"
    :container-class="'ui pagination menu'"
    :prev-text="'Précédant'"
    :next-text="'Suivant'"
    :page-link-class="'item'"
    :prev-link-class="'item'"
    :next-link-class="'item'"
    :click-handler="goToPage"
    :no-li-surround="true">
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
    issues: [],
    numberPages: 1
  }),
  created () {
    this.loadData()
  },
  methods: {
    loadData () {
      axios.get('http://localhost:8088/api/issues')
      .then(response => {
        this.numberPages = parseInt(response.data.length / 4)
      })
      this.getPagingList(1)
    },
    goToPage (pageNum) {
      console.log(pageNum)
      this.getPagingList(pageNum)
    },
    getPagingList (pageNum) {
      axios.get('http://localhost:8088/api/issues',
        {
          params: {
            page: pageNum,
            size: 4
          }
        })
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

.item {
}

</style>
