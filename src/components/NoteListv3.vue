<template>
  <div class="note-list">
    <ul>
      <li
          v-for="(note, index) in filteredNotes"
          :key="index"
          :class="{ selected: index === selectedNoteIndex.value }"
          @click="selectNote(index)"
      >
        <span class="note-title">
          {{ note.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import store from '../stores/note.ts'
import { toRefs, defineProps, defineEmits } from 'vue';

const props = defineProps({
  selectedNoteIndex: {
    type: Number,
    required: true
  }
});

const emits = defineEmits(['select-note']);

const { selectedNoteIndex } = toRefs(props);

const filteredNotes = computed(() => {
  return store.state.notes.filter(note =>
      note.title.includes(store.state.searchQuery) || note.content.includes(store.state.searchQuery)
  );
});

const selectNote = (index) => {
  emits('select-note', index);
};
</script>

<style scoped>
.note-list {
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
  background-color: #e0e0e0; /* 浅灰色背景 */
}

li:hover {
  background-color: #f0f0f0;
}

.note-title {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1; /* 使得 span 占据剩余空间 */
  min-width: 0; /* 防止 flex 项目溢出 */
}
</style>
