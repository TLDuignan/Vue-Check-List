const SIMPLE_TODO_APP = {
  data () {
    return {
      appTitle: 'Simple To Do App',
      itemToAdd: '',
      listOfToDoItems: [],
      hasError: false
    };
  },
  methods: {
    addItem: function () {
      if (!this.itemToAdd) {
        this.hasError = true;
        return;
      } else {
        this.hasError = false;
      }

      this.listOfToDoItems.push({
        title: this.itemToAdd,
        isComplete: false
      });
      this.itemToAdd = '';
    },
    updateItem: function (e, theItem) {
      e.preventDefault();
      theItem.title = e.target.innerText;
      e.target.blur();
    },
    completeTask: function (theItem){
      theItem.isComplete = !theItem.isComplete;
    },
    removeTask: function(theItem) {
      var index = this.listOfToDoItems.indexOf(theItem);
      this.listOfToDoItems.splice(index, 1);
    }
  }
};

const APP = Vue.createApp(SIMPLE_TODO_APP).mount('#todo-app-container');