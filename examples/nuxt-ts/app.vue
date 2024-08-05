<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <p class="msg">{{ msg }}</p>
  </div>
</template>

<script lang="ts" setup>
const msg = "Hello, ESLint!";
</script>

<style scoped>
.msg {
  font-family: "Noto Sans CJK", sans-serif;
}
</style>
