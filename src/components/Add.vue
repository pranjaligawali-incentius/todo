<script setup>
import { ref } from 'vue'
const name = ref('');
const nameList=ref([]); //array to store names
function add(){
    if(name.value.trim() !==''){
        nameList.value.push(name.value);
        name.value='';
    }
}

</script>
<template>
    <div>
        <h2>Add Student</h2>
        <input v-model="name" placeholder="Enter a name">
        <button @click="add">Add Name</button>
        <ul>
        <li v-for="(item, index) in nameList" :key="index">
        {{ item }}
        </li>
        </ul>
    </div>
</template>