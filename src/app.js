import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      todos: ["Do the shopping", "Car's MOT", "Water plants"],
      newToDo: ""
    },
    methods: {
      addNewToDo: function(){
        this.todos.push(this.newToDog)
        this.newToDo = ""
      }
      
    }
  })
})