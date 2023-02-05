<template>
  <nav>
    <div class="logo">
      <a href="/">
      <img src="logo.png" alt="Logo"> </a>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Početna</router-link></li>
      <li><router-link to="/onama">O nama</router-link></li>
      <li><router-link to="/cjenik">Cjenik</router-link></li>
      <li><router-link to="/kontakt">Kontakt</router-link></li>
      <li><router-link to="/login">Prijava</router-link></li>
    </ul>
    <div class="burger" @click="toggleNav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <ul v-if="navOpen">
          <li @click="toggleNav"><router-link to="/">Početna</router-link></li>
          <li @click="toggleNav"><router-link to="/onama">O nama</router-link></li>
          <li @click="toggleNav"><router-link to="/cjenik">Cjenik</router-link></li>
          <li @click="toggleNav"><router-link to="/kontakt">Kontakt</router-link></li>
          <li @click="toggleNav"><router-link to="/login">Prijava</router-link></li>
        </ul>
  </nav>
  <router-view/>
  <footer>
    <div class="social-media">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p>Copyright &copy; {{ currentYear }} Beauty by Ana</p>
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
  padding: 25px;
  background-color: #FFB6C1;
    }

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
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

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  background-color: #FFB6C1;
  color: #000000;
}

.social-media {
  display: flex;
}

.social-media a {
  margin-right: 10px;
  color: #fff;
  font-size: 18px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  footer {
    flex-direction: column;
    text-align: center;
  }

  .social-media {
    margin-bottom: 20px;
  }

  nav ul {
    flex-direction: column;
    position: absolute;
    top: 45px;
    left:50%;
    background-color:#FFB6C1;
    width: 25%;
    
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transform: translateX(50%);
    transition: all 0.3s ease-in-out;
  }

  nav ul a {
    text-decoration: none;
    color:#000000;
    font-weight: bold;
    
  }
}

</style>

<script>
export default {
  data() {
    return {
      navOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
};
</script>