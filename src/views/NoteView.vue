<template>
  <div id="app">
    <div class="left-panel">
      <search-bar/>
      <note-list @select-note="selectNote" :selectedNoteIndex="selectedNoteIndex"/>
      <button @click="addNewNote">添加新笔记</button>
    </div>
    <div class="right-panel">
      <note-editor :noteIndex="selectedNoteIndex" @save-note="resetNoteIndex" @delete-note="resetNoteIndex"/>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import NoteList from "../components/NoteList.vue";
import NoteEditor from "../components/NoteEditor.vue";
import store from '../stores/note.ts'
export default {
  components: {
    SearchBar,
    NoteList,
    NoteEditor
  },
  data() {
    return {
      selectedNoteIndex: -1
    };
  },
  methods: {
    selectNote(index) {
      this.selectedNoteIndex = index;
    },
    resetNoteIndex() {
      this.selectedNoteIndex = -1;
    },
    addNewNote() {
      store.addNote({ title: '无标题笔记', content: '' });
      // this.selectedNoteIndex = -1;
      this.selectedNoteIndex = store.state.notes.length - 1;
    }
  }
};
</script>

<style>
#app {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* 防止滚动条 */
}

.left-panel {
  width: 25%; /* 调整宽度百分比，使其总和不超过 100% */
  padding: 20px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box; /* 确保 padding 不会导致宽度溢出 */
}

.right-panel {
  width: 75%; /* 调整宽度百分比，使其总和不超过 100% */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box; /* 确保 padding 不会导致宽度溢出 */
}

input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* 确保 padding 不会导致宽度溢出 */
}

button {
  width: 80px;
  margin-top: 20px;
  padding: 10px 5px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #369771;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

li {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 4px;
  width: 100%;
  text-align: left;
  box-sizing: border-box; /* 确保 padding 不会导致宽度溢出 */
}

li:hover {
  background-color: #f0f0f0;
}
</style>
