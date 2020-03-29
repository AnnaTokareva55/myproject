<template>
  <div>
    <md-toolbar class="d-flex justify-content-between">
      <div class="menu">
        <md-button to="/" :md-ripple="false">Главная</md-button>
        <md-button to="/article" :md-ripple="false">Статья</md-button>
      </div>
      <div class="user">
        <div class="userexit d-flex align-items-center" v-if="isLogin">
          <span class="username">{{ user.name }}</span>
          <md-button class="md-raised md-primary" @click="exit"
            >Выйти</md-button
          >
        </div>
        <div class="loginsignup" v-else>
          <md-button class="md-primary" @click="showPopupLogin"
            >Войти</md-button
          >
          <md-button class="md-raised md-primary" @click="showPopupSignup"
            >Регистрация</md-button
          >
        </div>
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
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Header",
  components: {
    PopupLogin,
    PopupSignup
  },
  data: () => ({
    isPopupLoginVisible: false,
    isPopupSignupVisible: false
  }),
  computed: {
    ...mapGetters("user", ["user", "isLogin"])
  },
  methods: {
    ...mapActions("user", ["exit"]),
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

<style scoped>
.username {
  padding: 0 15px;
  font-size: 16px;
  color: #448aff;
}
</style>
