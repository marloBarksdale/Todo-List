import moment from "moment";
import { Task } from "./task";
import { ProjectElement } from "./projectElement";



class Project {

    constructor(name) {
        this.name = name
        this.taskList = new Array();
        this.element = new ProjectElement(this);
    }



 setName(text){
     this.name= text;
 }


    addTask(name) {

        var task = new Task(name);
        this.taskList.push(task);
        console.log("Task Added");
        return task;

    }


    removeTask(task){

        this.taskList.splice(this.taskList.indexOf(task), 1);

    }

    showTask() {

        // console.log(this.name + ":");

        // this.taskList.forEach(element => {

        //     console.log(element.getName() + ":" + element.note);

        // });



    }


    getProjectButton() {

        return this.element.projectForm;
    }

    getExactButton(){
        return this.element.projectButton;
    }

    getProjectTaskPane() {
        return this.element.card;
    }

    getProjectAccordion(){
        return this.element.accordion;
    }

}







export { Project };