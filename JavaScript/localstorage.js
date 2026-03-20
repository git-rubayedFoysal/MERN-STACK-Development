class Task {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
    this.isComplete = false;
  }

  markComplete(status) {
    this.isComplete = status;
  }
}
const todos = [];
// const t1 = new Task(`Hello World1`);
// const t2 = new Task(`Hello World2`);
// const t3 = new Task(`Hello World3`);
// const t4 = new Task(`Hello World4`);

todos.push(new Task("Hello"));

// t1.markComplete(true);
// todos.push(t1);
// todos.push(t2);
// todos.push(t3);
// todos.push(t4);
// console.log(todos);

localStorage.setItem("todoArr", JSON.stringify(todos));

const list = localStorage.getItem("todoArr");

JSON.parse(list).forEach((todo) => {
  if (!todo.isComplete) {
    console.log(todo);
  }
});
