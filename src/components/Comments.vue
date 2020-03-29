<template>
  <div>
    <h2>Комментарии</h2>
    <md-card class="commentcard" v-for="item in comments" :key="item.id">
      <md-card-header>
        <span class="username">{{item.user}}</span>
        <div class="datetime">
          <span>{{item.date}}</span>
          <span>{{item.time}}</span>
        </div>
      </md-card-header>
      <md-card-content>{{item.text}}</md-card-content>
    </md-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Comments",
  props: ["idArticle"],
  computed: {
    ...mapGetters("comments", ["comments"])
  },
  mounted() {
    this.getComments(this.idArticle);
  },
  methods: {
    ...mapActions("comments", ["getComments"])
  }
};
</script>

<style scoped>
.commentcard {
  margin: 0 0 15px 0;
}

.username {
  font-size: 16px;
  font-weight: bold;
}

.datetime {
  font-size: 12px;
  color: gray;
}
</style>