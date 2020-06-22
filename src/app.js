import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      todos: [
        {
          name:"Do the shopping",
          priority: "high"
        }, 
        {
          name: "Car's MOT",
          priority: "high"
        }, 
        {
          name: "Water plants",
          priority: "medium"
        }
      ],
      newToDo: ""
    },
    methods: {
      addNewToDo: function(){
        this.todos.push({
          name: this.newToDo,
          priority: "high"
          });
        this.newToDo = "";
      }
      
    }
  })
})