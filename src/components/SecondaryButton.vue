<script setup lang="ts">
  import IconArrow from './icons/IconArrow.vue'
  defineProps<{
    text: string
  }>()
  </script>
  
  <template>
    <button>{{ text }} <IconArrow/></button>
  </template>
  
  <style scoped lang="scss">
    button {
      display:flex;
      align-items: center;
      cursor: pointer;
      font-style:bold;
      font-size: 0.9rem;
      color: #F5D90A;
      background-color: #151718;
      border: 1px solid #3A3F42;
      border-radius: 99px;

      &:hover{
        background-color:blue;
      }
    }

  </style>
  