<template>
  <v-layout column>
    <v-text-field label="Search something..." prepend-icon="search" v-on:input.native="debounceSearch"></v-text-field>
    <div row align-center justify-center><h6>Albums ({{albums.length}})</h6><v-progress-circular :if="loader" indeterminate></v-progress-circular>
    </div>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 lg2 class="pa-1" v-for="(album, index) in albums" :key="index">
        <v-card column>
          <img :src="album.images[0].url" alt="Cover" style="width: 100%">
          <v-card-title primary-title>
            <div>
              <span class="headline mb-0 album-card-name">{{album.name}}</span>
              <div>{{album.artists.map(a => a.name).join(', ')}}</div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <h6 class="mt-4 mb-3">Songs ({{songs.length}})</h6>
    <v-layout wrap>
      <v-flex xs8 offset-xs2>
        <v-list two-line class="elevation-3">
          <template v-for="(track, index) in songs">
            <v-list-tile avatar :key="index">
              <v-list-tile-content>
                <v-list-tile-title v-html="track.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="track.artists.map(a => a.name).join(', ')"></v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon><v-icon>star</v-icon></v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>
import back from '../back.service'
import _ from 'lodash'

export default {
  data: () => ({
    albums: [],
    songs: [],
    loader: false
  }),
  methods: {
    debounceSearch: _.debounce(async function(e) {
      if(e.target.value.length <= 0) return
      this.loader = true
      try {
        const res = await back.post('usuarios/searchAlbum', {query: e.target.value})
        this.albums = res.data.res.albums.items
      } catch (error) {
        console.log(error)
      }

      try {
        const res = await back.post('usuarios/searchSong', {query: e.target.value})
        this.songs = res.data.res.tracks.items
        console.log(res.data.res.tracks.items[0])
      } catch (error) {
        console.log(error)
      }

    }, 500)
  }
}
</script>

<style scoped>
.album-card-name {
  overflow: hidden !important;
  text-overflow: ellipsis;
  word-wrap: none;
}
</style>
