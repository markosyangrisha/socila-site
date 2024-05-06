<template>
  <nav class="nav_bar">
    <div class="nav-bar_inner">
      <div class="nav-bar__svg-block activity">
        <Friends_IconVue />
      </div>
      <div class="nav-bar__svg-block">
        <Message_IconVue />
      </div>
      <div class="nav-bar__svg-block">
        <User_IconVue />
      </div>
    </div>
  </nav>
</template>

<script setup>
import Friends_IconVue from '@/assets/svg/Friends_Icon.vue'
import Message_IconVue from '@/assets/svg/Message_Icon.vue'
import User_IconVue from '@/assets/svg/User_Icon.vue'
</script>

<style scoped src="./Nav_Bar.css"></style>
