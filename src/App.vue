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

.flex-direction-column {
  flex-direction: column;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center;
}

.align-items-end {
  align-items: flex-end;
}

.md-content {
  padding: 20px;
}

@media screen and (max-width: 650px) {
  h1 {
    font-size: 22px;
  }
}
</style>
