<template>
  <div class="note-list">
    <ul>
      <li
          v-for="(note, index) in filteredNotes"
          :key="index"
          :class="{ selected: index === selectedNoteIndex }"
          @click="selectNote(index)"
      >
        <span class="note-title">
          {{ note.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import store from '../stores/note.ts';

export default {
  props: {
    selectedNoteIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    filteredNotes() {
      return store.state.notes.filter(note =>
          note.title.includes(store.state.searchQuery) || note.content.includes(store.state.searchQuery)
      );
    }
  },
  methods: {
    selectNote(index) {
      this.$emit('select-note', index);
    }
  }
};
</script>

<style scoped>
.note-list{
  width: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  margin: 0; /* 移除默认的 margin */
}

li {
  cursor: pointer;
  padding: 1px;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 0px;
  width: 100%;
  text-align: left;
  display: flex; /* 使用 flex 布局 */
  align-items: center; /* 保证内容垂直居中对齐 */
  overflow: hidden; /* 确保内容溢出隐藏 */
}

li.selected {
  background-color: #f0f0f0;
}

li:hover {
  background-color: #f0f0f0;
}

.note-title {
  flex-grow: 1; /* 让 note-title 填满剩余空间 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
