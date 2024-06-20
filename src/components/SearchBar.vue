<template>
  <div class="seach-bar">
    <input v-model="searchQuery" placeholder="搜索笔记" />
  </div>
</template>

<script>
import store from '../stores/note.ts';

export default {
  computed: {
    searchQuery: {
      get() {
        return store.state.searchQuery;
      },
      set(value) {
        store.state.searchQuery = value;
      }
    }
  }
};
</script>

<style scoped>
.seach-bar{
  width: 100%;
}
input {
  display: block;
  margin: 10px 0;
  width: 100%;
  max-width: 600px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
