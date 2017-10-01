<template>
  <v-layout wrap>
    <v-flex xs12 class="flex-title pa-1">
      <h6>Most popular</h6>
    </v-flex>
    <v-flex xs12 sm4 md3 lg2 class="pa-1">
      <v-card column>
        <img src="/static/cover.jpg" alt="Cover" style="width: 100%">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Malina</h3>
            <div>Leprous</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 md3 lg2 class="pa-1">
      <v-card column>
        <img src="/static/cover.jpg" alt="Cover" style="width: 100%">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Malina</h3>
            <div>Leprous</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 md3 lg2 class="pa-1">
      <v-card column>
        <img src="/static/cover.jpg" alt="Cover" style="width: 100%">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Malina</h3>
            <div>Leprous</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm4 md3 lg2 class="pa-1">
      <v-card column>
        <img src="/static/cover.jpg" alt="Cover" style="width: 100%">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Malina</h3>
            <div>Leprous</div>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 class="mt-4">
      <h5>Some of your lists</h5>
    </v-flex>
    <v-flex xs12 sm4 md3 lg2 class="pa-1">
      <v-card column>
        <div class="list-image-container">
          <img src="/static/coverl.jpg" alt="Cover" style="width: 100%">
          <span>Sample List</span>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import back from '../back.service'

export default {
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.flex-title {
  z-index: 1;
}
.list-image-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img { width: 200%; filter: blur(1px) saturate(0.4) brightness(0.4) }
  span {
    position: absolute;
    color: white;
    font-size: 3rem;
    text-align: center;
  }
}
</style>
