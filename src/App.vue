<template>
  <v-app style="background-color: #eee">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flex-center {
  justify-content: center;
  align-items: center;
}
</style>
