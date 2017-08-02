<template>
  <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
        <i class="material-icons">play_circle_filled</i>
      </header>
      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">

          <form>
            <input placeholder="Label" v-model="issue.label" type="text">
            <input placeholder="application url" v-model="issue.applicationUrl" type="text">
            <textarea placeholder="Description" v-model="issue.description"></textarea>
          </form>
        </div>
        <div class="mdl-card__actions">
          <a v-on:click="saveIssue(issue)" class="mdl-button">Ajouter une issue</a>
        </div>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name: 'newIssue',
  data () {
    return {
      issue: {
        applicationUrl: '',
        label: '',
        description: ''
      }
    }
  },
  methods: {
    saveIssue (issue) {
      axios.post('/api/issues',
        this.issue)
      .then(response => {
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
      console.log(issue.description)
    }
  }
}
</script>

<style scoped>
form {
	text-align: center;
	width: 50%;
	margin: 0 auto;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 0;
	padding: 10px 5px;
  background: white no-repeat;

	/*
	* IMPORTANT PART HERE
	*/

  /* 2 imgs : 1px gray line (normal state) AND 2px green line (focus state) */
	background-image: linear-gradient(to bottom, #1abc9c, #1abc9c), linear-gradient(to bottom, silver, silver);
	/* sizes for the 2 images (default state) */
	background-size: 0 2px, 100% 1px;
	/* positions for the 2 images. Change both "50%" to "0%" or "100%" and tri again */
	background-position: 50% 100%, 50% 100%;

	/* animation solely on background-size */
  transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);

}

input:focus,
textarea:focus{
  /* sizes for the 2 images (focus state) */
	background-size: 100% 2px, 100% 1px;
	outline: none;
}
</style>
