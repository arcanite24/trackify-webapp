<template>
  <form @submit.prevent="login(username, password)">
    <v-layout class="login-container" row justify-center align-center>
      <v-layout column align-center>
        <v-card column align-center class="login-card animated fadeIn">
          <v-layout class="card-header flex-row flex-center">
            <v-icon class="mr-1">album</v-icon>
            <span>trackify</span>
          </v-layout>
          <v-layout class="pa-3" column>
            <v-text-field v-model="username" label="Email"></v-text-field>
            <v-text-field v-model="password" label="Password" type="password"></v-text-field>
            <v-btn type="submit" :loading="loader" :disabled="loader" primary>login</v-btn>
          </v-layout>
          <v-snackbar :timeout="2000" v-model="showToast">{{toast}}</v-snackbar>
        </v-card>
        <v-btn outline class="mt-3 animated fadeInUp delay-200" @click.native="$router.push({name: 'register'})">register</v-btn>
      </v-layout>
    </v-layout>
  </form>
</template>

<script>
import back from '../back.service'

export default {
  data() {
    return {
      loader: false,
      toast: '',
      showToast: false,
      username: '',
      password: ''
    }
  },
  methods: {
    async login(email, password) {
      this.loader = true
      try {
        const res = await back.post('usuarios/login', {email, password})
        console.log(res.data)
        this.loader = false
        if (res.data.id) {
          localStorage.setItem('userId', res.data.userId)
          localStorage.setItem('token', res.data.id)
          this.$router.replace({name: 'dashboard', params: {x: 1}})
        } else {
          this.toast = 'Something happened with the server... Sorry :('
          this.showToast = true
        }
      } catch (error) {
        this.toast = error.message
        this.showToast = true
        this.loader = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.card-header {

  font-family: 'Roboto';
  background-color: orange;
  padding: 1rem;

  span, .icon {
    letter-spacing: 5px;
    color: white;
  }

  span {
    font-size: 2rem;
    font-weight: lighter;
  }

}

.login-card {
  background-color: white;
}
</style>
