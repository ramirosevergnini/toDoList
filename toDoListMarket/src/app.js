const app = new Vue({
    el: '#app',
    data: {
        tasks: [],
        newTask: '',
    },
    methods: {
        changeImage(task) {
            task.trocar = !task.trocar;
        },
        addNewTask() {
            if (this.newTask !== '') {
                this.tasks.push({ name: this.newTask, trocar: false, done: false });
                this.newTask = ''; 
            }
        },
        addNewTaskWrapper() {
            this.addNewTask();
        },
        toggleTaskDone(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
});
