<template>
  <div id="app">
    <Header />
    <md-content>
      <h1 class="md-title">Добро пожаловать!</h1>
    </md-content>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
.d-flex {
  display: flex;
}

.justify-content-between {
  justify-content: space-between;
}

.md-content {
  padding: 20px;
}
</style>