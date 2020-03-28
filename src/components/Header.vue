<template>
  <div>
    <md-toolbar class="d-flex justify-content-between">
      <div class="menu">
        <md-button to="/" :md-ripple="false">Главная</md-button>
        <md-button to="/article" :md-ripple="false">Статья</md-button>
      </div>
      <div class="login">
        <md-button class="md-primary" @click="showPopupLogin">Войти</md-button>
        <md-button class="md-raised md-primary" @click="showPopupSignup"
          >Регистрация</md-button
        >
      </div>
    </md-toolbar>
    <PopupLogin v-if="isPopupLoginVisible" @closePopupLogin="closePopupLogin" />
    <PopupSignup
      v-if="isPopupSignupVisible"
      @closePopupSignup="closePopupSignup"
    />
  </div>
</template>

<script>
import PopupLogin from "./PopupLogin.vue";
import PopupSignup from "./PopupSignup.vue";

export default {
  name: "Header",
  data: () => ({
    isPopupLoginVisible: false,
    isPopupSignupVisible: false
  }),
  components: {
    PopupLogin,
    PopupSignup
  },
  methods: {
    showPopupLogin() {
      this.isPopupLoginVisible = true;
    },
    closePopupLogin() {
      this.isPopupLoginVisible = false;
    },
    showPopupSignup() {
      this.isPopupSignupVisible = true;
    },
    closePopupSignup() {
      this.isPopupSignupVisible = false;
    }
  }
};
</script>
