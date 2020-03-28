<template>
  <div class="popup" ref="popup">
    <form class="popup-form" @submit="login">
      <md-card>
        <md-card-header
          class="d-flex justify-content-between align-items-center"
        >
          <div class="md-title popup-title">Введите email и пароль</div>
          <close-icon @click="closePopup" />
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Email</label>
            <md-input v-model="email"></md-input>
          </md-field>
          <md-field>
            <label>Пароль</label>
            <md-input v-model="password"></md-input>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-raised md-primary" @click="login"
            >Войти</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  name: "PopupLogin",
  data: () => ({
    email: null,
    password: null
  }),
  mounted() {
    const popup = this;
    document.addEventListener("click", event => {
      if (event.target === popup.$refs["popup"]) popup.closePopup();
    });
  },
  methods: {
    closePopup() {
      this.$emit("closePopupLogin");
    },
    login() {
      this.$emit("login");
    }
  }
};
</script>

<style scoped>
.popup {
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(24, 49, 49, 0.5);
}

.popup-form {
  position: fixed;
  top: 150px;
  left: calc(50% - 200px);
  width: 400px;
  -webkit-box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 1);
  -moz-box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 1);
  box-shadow: 7px 7px 10px 0px rgba(50, 50, 50, 1);
  background-color: grey;
}

.md-card-header:first-child > .md-title:first-child {
  margin-top: 0;
  font-size: 22px;
}

.material-design-icon {
  width: 1.7em;
  height: 1.7em;
}

.material-design-icon > .material-design-icon__svg {
  width: 1.7em;
  height: 1.7em;
  bottom: 0;
}
</style>
