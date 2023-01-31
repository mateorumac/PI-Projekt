<template>
  <nav>
    <div class="image1">
      <img class="image2" src="naslov.png" alt="tittle" align="left">
    </div>
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
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  
  padding: 29px;
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
  padding: 30px;
  background-color: #FFB6C1;
  // position: fixed;
  left: 0;
  bottom: 0;
  color: #000000;
  text-align: center;}

  .image1{
    // background-color: yellow;
    margin-top: -1.7%;
    max-width: 100%;
    float: left;
  }
  .image2 {
  padding-top: 10px;

}
</style>
