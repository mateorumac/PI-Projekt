<template>

  <div class="container5">
    <h2 class="title">Prijava</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" />
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
  padding: 40px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  
}
.title {
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  color: #000000;
}
.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  max-width: 500px;
}
label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}
input {
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
}
button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Add code to submit the form data to your server here
      console.log(this.form);
    },
  },
};
</script>