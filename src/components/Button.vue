<script setup lang='ts'>
  import IconArrow from './icons/IconArrow.vue';
</script>
  
<template>
  <a href='#' class='link-button'>
    <slot></slot> 
    <icon-arrow class='iconArrow'/>
  </a>
</template>
  
<style scoped lang='scss'>
  .link-button {
    display:flex;
    align-items: center;
    color: #F5D90A;
    background-color: #151718;
    border: 1px solid #3A3F42;
    border-radius: 99px;
    width:fit-content;
    padding: 6px 20px;

    .iconArrow{
      margin-left: 0.5rem;
      width: 20px;
      height: 20px;
    }

    &:hover{
      background-color: #1A1D1E;
    }

    &:active{
      background-color: #202425;
    }
  }
</style>
  