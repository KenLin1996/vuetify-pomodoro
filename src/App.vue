<template>
  <v-app>
    <v-app-bar :style="{ backgroundColor: $vuetify.theme.themes.light.primary }">
      <v-container class="d-flex align-center" :style="{color: $vuetify.theme.themes.light.secondary}">
        <v-app-bar-title class="d-flex align-center">
          <router-link to="/">
            <v-img src='../public/mstile-150x150.png' width="64"></v-img>
          </router-link>
        </v-app-bar-title>
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
          prepend-icon="mdi-home"
          to="/"
          :class="{ 'on-hover': isHovering }"
          v-bind="props">首頁</v-btn>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
          prepend-icon="mdi-format-list-bulleted"
          to="/list"
          :class="{ 'on-hover': isHovering }"
          v-bind="props">事項</v-btn>
        </v-hover>
        <v-hover v-slot="{ isHovering, props }">
          <v-btn
          prepend-icon="mdi-cog"
          to="/settings"
          :class="{ 'on-hover': isHovering }"
          v-bind="props">設定</v-btn>
        </v-hover>
      </v-container>
    </v-app-bar>

    <v-main :style="{ backgroundColor: $vuetify.theme.themes.light.background }">
      <router-view v-slot='{ Component }'>
        <keep-alive include='index'>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>

</script>
<style lang="scss" scoped>
.v-btn.on-hover {
  background-color: #E25662;
  color: #fff;
}
</style>
