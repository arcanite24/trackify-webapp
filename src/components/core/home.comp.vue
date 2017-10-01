<template>
  <v-layout column style="background-color: #eee">
    <v-navigation-drawer
      v-model="menu"
      enable-resize-watcher
      absolute>
      <h1>hola</h1>
      <v-btn @click.native="logout">logout</v-btn>
    </v-navigation-drawer>
    <v-toolbar class="orange" extended>
      <v-toolbar-side-icon @click.stop="menu = !menu"></v-toolbar-side-icon>
      <v-toolbar-title class="toolbar-title">trackify</v-toolbar-title>
      <span class="expander"></span>
      <v-btn icon style="margin-left:auto">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <router-view class="home-view"></router-view>
    </v-container>
  </v-layout>
</template>

<script>
import back from '../back.service'

export default {
  data() {
    return {
      menu: true
    }
  },
  methods: {
    async logout() {
      try {
        const res = await back.post('usuarios/logout')
        console.log(res)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
}
</script>

<style scoped>
.toolbar-title {
  letter-spacing: 5px;
  font-weight: 300;
  margin-right: 1rem;
}
.home-view {
  margin-top: -80px;
}
</style>
