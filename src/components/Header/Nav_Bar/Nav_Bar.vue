<template>
  <nav class="nav_bar">
    <ul class="nav-bar_inner">
      <li class="nav-bar__svg-block">
        <RouterLink to="/friends" class="nav-bar_link">
          <Friends_IconVue />
        </RouterLink>
      </li>
      <li class="nav-bar__svg-block">
        <RouterLink to="/message" class="nav-bar_link">
          <Message_IconVue />
        </RouterLink>
      </li>
      <li class="nav-bar__svg-block">
        <RouterLink to="/user" class="nav-bar_link">
          <User_IconVue />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import Friends_IconVue from '@/assets/svg/Friends_Icon.vue'
import Message_IconVue from '@/assets/svg/Message_Icon.vue'
import User_IconVue from '@/assets/svg/User_Icon.vue'
import { RouterLink } from 'vue-router'

</script>

<style scoped src="./Nav_Bar.css"></style>
