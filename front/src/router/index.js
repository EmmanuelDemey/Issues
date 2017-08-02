import Vue from 'vue'
import Router from 'vue-router'
import IssueManager from '@/components/IssueManager'
import NewIssue from '@/components/NewIssue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IssueManager',
      component: IssueManager
    },
    {
      path: '/newIssue',
      name: 'NewIssue',
      component: NewIssue
    }

  ]
})
