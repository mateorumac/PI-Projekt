<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <nav>
    <div class="logo">
      <a href="/">
      <img src="logo.png" alt="Logo"> </a>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">POČETNA</router-link></li>
      <li><router-link to="/onama">O NAMA</router-link></li>
      <li><router-link to="/cjenik">CJENIK</router-link></li>
      <li><router-link to="/kontakt">KONTAKT</router-link></li>
      <li v-if="!isUserLoggedIn"><router-link to="/login">PRIJAVA</router-link></li>
      <li v-if="isUserLoggedIn">
      <button class="logout" @click="logout"><i class="fa fa-sign-out"></i>&nbsp;IZLAZ</button>  
      </li>
    </ul>
    
      <div class="burger" @click="toggleNav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
        <ul v-if="navOpen">
          <li @click="toggleNav"><router-link to="/">POČETNA</router-link></li>
          <li @click="toggleNav"><router-link to="/onama">O NAMA</router-link></li>
          <li @click="toggleNav"><router-link to="/cjenik">CJENIK</router-link></li>
          <li @click="toggleNav"><router-link to="/kontakt">KONTAKT</router-link></li>
          <li v-if="!isUserLoggedIn" @click="toggleNav"><router-link to="/login">PRIJAVA</router-link></li>
          <li v-if="isUserLoggedIn">
            <button class="logout" @click="logout"><i class="fa fa-sign-out"></i>IZLAZ</button>  
          </li>
        </ul>
  </nav>
  <router-view/>
  <footer v-if="$route.path !== '/login'">
    <p style="font-size:18px"> Copyright © Beauty by Ana 2023 </p>
    <div style="display: flex; align-items: center;">
    <p style="font-size:18px; margin-right: 20px;"> Za novosti i informacije zapratite nas putem društvenih mreža </p>
    <div class="social-media">
        <a href="https://www.facebook.com/anaminyme.manev" target="_blank">
          <i class="fa fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/__beauty_by_ana_?igshid=YmMyMTA2M2Y=" target="_blank">
          <i class="fa fa-instagram"></i>
        </a>
      </div>
      </div>      
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

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

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
  font-family: 'Open Sans', sans-serif;
}

.logout {
  font-family: 'Open Sans', sans-serif;
  background-color: #FFF5EE;
  color: black;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 19px;
  padding-left: 20px;
  padding-right: 20px;
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
  font-family: 'Open Sans', sans-serif;
}

.social-media a {
  padding-right: 20px;
  
  color: #000000;
  font-size: 30px;
}

@media (max-width: 600px) {
  .nav-links {
    display: none;
  }

  .burger {
    display: block;
  }

  footer .social-media + p {
      text-align: center;
      
    }

  footer .social-media {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 10px;
    
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
import firebase from '@/firebase';
export default {
  data() {
    return {
      isUserLoggedIn: false,
      navOpen: false
    };
  },

  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  },

  methods: {
    logout() {
      firebase.auth().signOut();
    },
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
};
</script>