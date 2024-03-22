var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("");
        console.log("".concat(task, " ADDED! KEEP ON GRINDIN!!!"));
    };
    TodoList.prototype.taskMarking = function (taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            console.log("---------------------------------------------------------");
            console.log("TASK ".concat(this.tasks[taskIndex], " COMPLETED <3"));
            this.tasks.splice(taskIndex, 1);
            console.log("---------------------------------------------------------");
        }
        else {
            console.log("Invalid task index");
        }
    };
    TodoList.prototype.displayTasks = function () {
        console.log("");
        console.log("NAOE TODO LIST<3");
        this.tasks.forEach(function (task, index) {
            console.log("".concat(index + 1, ".").concat(task));
        });
        console.log("---------------------------------------------------------");
    };
    return TodoList;
}());
console.log("---------------------------------------------------------");
//Assign Task here Naoe :)
var todoList = new TodoList();
todoList.addTask("Practice the fundamentals of TS");
todoList.addTask("Watch Video related on Org Management");
todoList.addTask("Watch Fliptop");
todoList.addTask("Eat spaghetti on my birthday");
//For task marking
todoList.taskMarking(1);
//For displaying of task
todoList.displayTasks();
