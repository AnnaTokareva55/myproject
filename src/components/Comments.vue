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
    <div class="d-flex flex-direction-column align-items-end" v-if="isLogin">
      <md-field v-show="isShowTextfield">
        <label>Ваше сообщение</label>
        <md-textarea v-model="newComment"></md-textarea>
      </md-field>
      <md-button class="md-raised md-primary" @click="addComments">Добавить комментарий</md-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Comments",
  props: ["idArticle"],
  data: () => ({
    newComment: null,
    isShowTextfield: false
  }),
  computed: {
    ...mapGetters("comments", ["comments"]),
    ...mapGetters("user", ["isLogin"])
  },
  mounted() {
    this.getComments(this.idArticle);
  },
  methods: {
    ...mapActions("comments", ["getComments"]),
    addComments() {
      if (!this.isShowTextfield) {
        this.isShowTextfield = true;
        return;
      } else {
        console.log("add");
      }
    }
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

.md-button.md-theme-default {
  margin: 0;
}
</style>