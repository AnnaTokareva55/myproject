<template>
  <md-toolbar class="d-flex justify-content-between">
    <div class="menu">
      <md-button to="/" :md-ripple="false">Главная</md-button>
      <md-button to="/article" :md-ripple="false">Статья</md-button>
    </div>
    <div class="login">
      <md-button class="md-primary">Войти</md-button>
      <md-button class="md-raised md-primary">Регистрация</md-button>
    </div>
  </md-toolbar>
</template>

<script>
export default {
  name: "Header"
};
</script>
