<template>
  <nav>
    <router-link to="/">Početna</router-link> |
    <router-link to="/onama">O nama</router-link> |
    <router-link to="/cjenik">Cjenik</router-link> |
    <router-link to="/kontakt">Kontakt</router-link> |
    <router-link to="/login">Prijava</router-link>
  </nav>
  <router-view/>
  <footer>
    <span>Potražite nas na društvenim mrežama</span>
  </footer>
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
    text-decoration:none;
    font-weight: bold;
    color: #000000;
    

    &.router-link-exact-active {
      color: white;
    }
  }
}

footer {
  padding: 25px;
  background-color: #FFB6C1;
  // position: fixed;
  left: 0;
  bottom: 0;
  // width: 100%;
  text-align: center;}
</style>
