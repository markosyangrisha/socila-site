<template>
  <div class="header">
    <Logo />
    <Nav_Bar />
    <User_Profile />
  </div>
</template>

<script setup>
import Logo from './Logo/Logo.vue'
import Nav_Bar from './Nav_Bar/Nav_Bar.vue'
import User_Profile from './User_Profile/User_Profile.vue'
</script>

<style scoped src='./Header.css'></style>