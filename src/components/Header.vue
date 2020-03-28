<template>
  <div>
    <md-toolbar class="d-flex justify-content-between">
      <div class="menu">
        <md-button to="/" :md-ripple="false">Главная</md-button>
        <md-button to="/article" :md-ripple="false">Статья</md-button>
      </div>
      <div class="login">
        <md-button class="md-primary" @click="showPopupLogin">Войти</md-button>
        <md-button class="md-raised md-primary">Регистрация</md-button>
      </div>
    </md-toolbar>
    <PopupLogin v-if="isPopupLoginVisible" @closePopupLogin="closePopupLogin" @login="login" />
  </div>
</template>

<script>
import PopupLogin from "./PopupLogin.vue";

export default {
  name: "Header",
  data: () => ({
    isPopupLoginVisible: false
  }),
  components: {
    PopupLogin
  },
  methods: {
    showPopupLogin() {
      this.isPopupLoginVisible = true;
    },
    closePopupLogin() {
      this.isPopupLoginVisible = false;
    },
    login() {
      console.log("login");
    }
  }
};
</script>
