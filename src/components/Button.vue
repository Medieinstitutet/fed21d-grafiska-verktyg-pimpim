<script setup lang="ts">
import IconArrow from "./icons/IconArrow.vue";
  </script>
  
  <template>
    <a href="#" class="link-button">
      <slot></slot> 
      <icon-arrow class="iconArrow"/>
    </a>
  </template>
  
  <style scoped lang="scss">
    .link-button {
      display:flex;
      align-items: center;
      font-size: 1.1rem;
      font-weight: 600;
      color: #F5D90A;
      background-color: #151718;
      border: 1px solid #3A3F42;
      border-radius: 99px;
      width:fit-content;
      padding: 10px 24px;

      .iconArrow{
        margin-left: 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  </style>
  