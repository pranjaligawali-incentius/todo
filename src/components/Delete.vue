<template>
  <div>
    <ul>
      <li v-for="(item, index) in nameList" :key="index">
        {{ item }}
       
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script setup>

import { ref } from 'vue'
const props = defineProps({
  namelist: Array
})
function deleteItem(index){
    props.nameList.splice(index,1)
}
</script>