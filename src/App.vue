<template>
  <nav>
    <div class="logo">
      <img src="logo.png" alt="Logo">
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Početna</router-link></li>
      <li><router-link to="/onama">O nama</router-link></li>
      <li><router-link to="/cjenik">Cjenik</router-link></li>
      <li><router-link to="/kontakt">Kontakt</router-link></li>
      <li><router-link to="/login">Prijava</router-link></li>
    </ul>
    <div class="burger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 29px;
  background-color: #FFB6C1;
    }



.logo img {
  height: 50px;
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links a {
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  color: #000000;

    &.router-link-exact-active {
      color: white;
    }
}

.burger {
  display: none;
  cursor: pointer;
}

.line1, .line2, .line3 {
  width: 35px;
  height: 3px;
  background-color: black;
  margin: 6px 0;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
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

</style>
