class TodoList {
  tasks: string[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: string): void {
    this.tasks.push(task);
    console.log("");
    console.log(`${task} ADDED! KEEP ON GRINDIN!!!`);
  }

  taskMarking(taskIndex: number): void {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      console.log("---------------------------------------------------------");
      console.log(`TASK ${this.tasks[taskIndex]} COMPLETED <3`);
      this.tasks.splice(taskIndex, 1);
      console.log("---------------------------------------------------------");
    } else {
      console.log(`Invalid task index`);
    }
  }

  displayTasks(): void {
    console.log("");

    console.log("NAOE TODO LIST<3");
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}.${task}`);
    });
    console.log("---------------------------------------------------------");
  }
}
console.log("---------------------------------------------------------");

//Assign Task here Naoe :)
let todoList = new TodoList();
todoList.addTask("Practice the fundamentals of TS");
todoList.addTask("Watch Video related on Org Management");
todoList.addTask("Watch Fliptop");
todoList.addTask("Eat spaghetti on my birthday");
//For task marking
todoList.taskMarking(1);
//For displaying of task
todoList.displayTasks();
