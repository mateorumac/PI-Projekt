<template>

  <div class="container5">
    <h2 class="title">Prijava</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Korisničko ime</label>
        <input type="text" id="username" v-model="form.username" />
      </div>
      <div class="form-group">
        <label for="password">Lozinka</label>
        <input type="password" id="password" v-model="form.password" />
      </div>
      <button type="submit">Prijavi se</button>
    </form>
  </div>
</template>

<style>
.container5 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  padding-bottom: 70px;
  margin: 40px auto;
}
.title {
  margin-bottom: 45px;
  font-size: 38px;
  font-weight: bold;
  color: #000000;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
label {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
}
input {
  padding: 15px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
button[type="submit"] {
  background-color: #FFB6C1;
  color: white;
  padding: 15px 23px;
  font-size: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 30px;
}
button[type="submit"]:hover {
  background-color: #ff99a8;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Username:', this.form.username);
      console.log('Password:', this.form.password);
    },
  },
};
</script>