<template>
  <div class="hello">
  <div class="mdl-layout__tab-panel is-active" id="overview">
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
        <i class="material-icons">play_circle_filled</i>
      </header>
      <presentation></presentation>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1">
        <li class="mdl-menu__item">Lorem</li>
        <li class="mdl-menu__item" disabled>Ipsum</li>
        <li class="mdl-menu__item">Dolor</li>
      </ul>
    </section>

    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
        <i class="material-icons">play_circle_filled</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>Features</h4>
          Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
        </div>
        <div class="mdl-card__actions">
          <a href="#" class="mdl-button">Read our features</a>
        </div>
      </div>
      <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1">
        <li class="mdl-menu__item">Lorem</li>
        <li class="mdl-menu__item" disabled>Ipsum</li>
        <li class="mdl-menu__item">Dolor</li>
      </ul>
    </section>
    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">

      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn2">
        <li class="mdl-menu__item">Lorem</li>
        <li class="mdl-menu__item" disabled>Ipsum</li>
        <li class="mdl-menu__item">Dolor</li>
      </ul>
    </section>

  </div>

  </div>
</template>

<script>
/* import presentation from './Presentation.vue' */
export default {
  name: 'hello',
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
