<template>
  <div id="app">
    <Header />
    <md-content>
      <router-view />
    </md-content>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Article from "./components/Article.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Article
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
