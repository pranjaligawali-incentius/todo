<script setup>
import { ref } from 'vue'

const name = ref('');
const nameList = ref([]); // array to store names

function add(){
  if(name.value.trim() !==''){
    nameList.value.push(name.value);
    name.value='';
  }
}

// Function to delete an item by its index
function deleteItem(index) {
  nameList.value.splice(index, 1);
}

function editItem(index) {
  name.value = nameList.value[index]; // Populate input with current name
  editingIndex.value = index; // Set the index of the item being edited
}
</script>

<<template>
  <div>
    <h2>Add/Edit Student</h2>
    <input v-model="name" placeholder="Enter a name" @keyup.enter="add">
    <!-- Change button text based on editing mode -->
    <button @click="add">
      {{ editingIndex !== null ? 'Save Changes' : 'Add Name' }}
    </button>

    <ul>
      <li v-for="(item, index) in nameList" :key="index">
        {{ item }}
        <!-- Add edit button -->
        <button @click="editItem(index)">Edit</button>
        <!-- Add delete button -->
        <button @click="deleteItem(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>


