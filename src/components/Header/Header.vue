<template>
  <header class="header">
    <div class="header_inner container">
      <Logo />
      <Nav_Bar />
      <Search />
      <User_Profile />
    </div>
  </header>
</template>

<script setup>
import Logo from './Logo/Logo.vue'
import Nav_Bar from './Nav_Bar/Nav_Bar.vue'
import Search from './Search_Block/Search.vue'
import User_Profile from './User_Profile/User_Profile.vue'
</script>

<style scoped src="./Header.css"></style>
