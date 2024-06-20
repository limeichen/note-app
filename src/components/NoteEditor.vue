<template>
  <div class="note-editor">
    <!-- <h2>笔记编辑</h2>-->
    <input v-model="note.title" placeholder="标题" />
    <textarea class="content" v-model="note.content" placeholder="内容"></textarea>
    <button @click="saveNote" style="margin-right: 30px">保存</button>
    <button @click="deleteNote">删除</button>
  </div>
</template>

<script>
import store from '../stores/note.ts';

export default {
  props: ['noteIndex'],
  computed: {
    note() {
      return store.state.notes[this.noteIndex] || { title: '', content: '' };
    }
  },
  methods: {
    saveNote() {
      if (this.noteIndex === -1) {
        store.addNote({ ...this.note });
      } else {
        store.updateNote(this.noteIndex, { ...this.note });
      }
      this.$emit('save-note');
    },
    deleteNote() {
      if (this.noteIndex !== -1) {
        store.deleteNote(this.noteIndex);
        this.$emit('delete-note');
      }
    }
  }
};
</script>

<style scoped>
.note-editor{
  width: 100%;
}
input, textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  /*max-width: 600px;*/
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.content{
  width: 100%;
  height: calc(100vh - 250px); /* 正确的 calc() 语法 */
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #369771;
}
</style>
