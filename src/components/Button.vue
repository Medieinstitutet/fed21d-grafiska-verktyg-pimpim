<script setup lang="ts">
  defineProps<{
    text: string
  }>()
  </script>
  
  <template>
    <button>{{ text }} <img src="./icons/IconArrow.svg" class="iconArrow" alt="arrow icon" /></button>
  </template>
  
  <style scoped lang="scss">
    button {
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
  