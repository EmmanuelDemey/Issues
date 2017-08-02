<template>
  <div id="app" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
      <div class="mdl-layout--large-screen-only mdl-layout__header-row">
      </div>
      <div class="mdl-layout--large-screen-only mdl-layout__header-row">
        <h3>Name &amp; Title</h3>
      </div>
      <div class="mdl-layout--large-screen-only mdl-layout__header-row">
      </div>
      <div class="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
        <a href="#overview" class="mdl-layout__tab is-active">Overview</a>
        <a href="#features" class="mdl-layout__tab">Features</a>
        <a href="#features" class="mdl-layout__tab">Details</a>
        <a href="#features" class="mdl-layout__tab">Technology</a>
        <a href="#features" class="mdl-layout__tab">FAQ</a>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
          <i class="material-icons" role="presentation">add</i>
          <span class="visuallyhidden">Add</span>
        </button>
      </div>
    </header>
    <main class="mdl-layout__content">
      <router-view></router-view>
    </main>
    <issue-footer></issue-footer>
  </div>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'issue-footer': Footer
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
}
</style>
