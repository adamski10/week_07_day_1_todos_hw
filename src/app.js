import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data:{
      todos: [
        {
          name:"Do the shopping",
          priority: "High"
        }, 
        {
          name: "Car's MOT",
          priority: "High"
        }, 
        {
          name: "Water plants",
          priority: "Low"
        }
      ],
      newToDo: ""
    },
    methods: {
      addNewToDo: function(){
        this.todos.push({
          name: this.newToDo,
          priority: ""
          });
        this.newToDo = "";
      }
      
    }
  })
})