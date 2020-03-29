<template>
  <md-content>
    <h1>{{article.header}}</h1>
    <div v-html="article.text"></div>
    <Comments :idArticle="idArticle" />
  </md-content>
</template>

<script>
import Comments from "./Comments.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Article",
  components: {
    Comments
  },
  data: () => ({
    idArticle: 0
  }),
  computed: {
    ...mapGetters("article", ["article"])
  },
  mounted() {
    this.getArticle(this.idArticle);
  },
  methods: {
    ...mapActions("article", ["getArticle"])
  }
};
</script>
