<template>
  <nav>
    <router-link to="/">Početna</router-link> |
    <router-link to="/onama">O nama</router-link> |
    <router-link to="/cjenik">Cjenik</router-link> |
    <router-link to="/kontakt">Kontakt</router-link> |
    <router-link to="/login">Prijava</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 25px;
  background-color: #FFB6C1;

  a {
    font-weight: bold;
    color: #000000;
    

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
