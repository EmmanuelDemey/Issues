<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
        <i class="material-icons">play_circle_filled</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>{{issue.label}}</h4>
          {{issue.description}}
          <h6>
            {{issue.applicationUrl}}
          </h6>
          </div>

        <!--div class="mdl-card__actions">
          <a href="#" class="mdl-button">Read our features</a>
        </div-->
      </div>
      <!--button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
        <i class="material-icons">more_vert</i>
      </button>
      <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1">
        <li class="mdl-menu__item">Lorem</li>
        <li class="mdl-menu__item" disabled>Ipsum</li>
        <li class="mdl-menu__item">Dolor</li>
      </ul-->
    </section>
</template>

<script>
export default {
  name: 'presentation',
  props: { 'issue': {
    applicationUrl: String,
    label: String,
    description: String,
    publishedDate: Date }
  },
  data () {
    return {
    }
  }
}
</script>
