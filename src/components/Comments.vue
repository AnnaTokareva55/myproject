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
      <div class="errorcomments" v-if="error">{{error}}</div>
      <md-field v-show="isShowTextfield">
        <label>Ваше сообщение</label>
        <md-textarea v-model="newCommentText"></md-textarea>
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
    newCommentText: null,
    isShowTextfield: false,
    error: null
  }),
  computed: {
    ...mapGetters("comments", ["comments"]),
    ...mapGetters("user", ["username", "isLogin"])
  },
  created() {
    this.getComments(this.idArticle);
  },
  methods: {
    ...mapActions("comments", ["getComments", "addComment"]),
    clearForm() {
      this.newCommentText = null;
      this.isShowTextfield = null;
      this.error = null;
    },
    async addComments() {
      if (!this.isShowTextfield) {
        this.isShowTextfield = true;
        return;
      } else {
        let date = new Date();
        let newComment = {
          id: Math.random(),
          date: `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()}`,
          time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          user: this.username,
          text: this.newCommentText
        };
        try {
          await this.addComment(newComment);
        } catch (err) {
          this.error = err.message;
          return;
        }
        this.clearForm();
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

.errorcomments {
  color: red;
}
</style>