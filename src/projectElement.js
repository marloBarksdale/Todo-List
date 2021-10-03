import { Project } from "./project";
import { Task } from "./task";


import moment from "moment";
import { createTaskElement } from "./taskCard";

class ProjectElement {



    constructor(project) {


        this.project = project;
        this.name = project.name


        this.accordion = document.createElement("div");
        this.accordion.classList.add("accordion");

        this.projectForm = document.createElement("form");
        this.projectForm.classList.add("projectForm");

        this.projectForm.setAttribute("onsubmit", "return false");

        this.projectFormDelete = document.createElement("span");
        this.projectForm.append(this.projectFormDelete);



        this.projectButton = document.createElement("input");
        this.projectButton.type = "text";
        this.projectButton.placeholder = "Project Name";
        this.projectButton.classList.add("projectButton");
        this.projectButton.required = "true";


        this.formButtonContainer = document.createElement("div");

        this.formButtonContainer.classList.add("formButtonContainer");



        this.submitButton = document.createElement("button");
        //   this.submitButton.type = "button";
        this.submitButton.textContent = "OK";




        this.cancelButton = document.createElement("button");
        this.cancelButton.textContent = "Cancel";

        this.projectForm.appendChild(this.projectButton);
        this.formButtonContainer.appendChild(this.submitButton);
        this.formButtonContainer.appendChild(this.cancelButton);
        this.projectForm.appendChild(this.formButtonContainer);




        this.newCancel = document.createElement("button");
        this.newCancel.textContent = "Cancel"
        this.newCancel.addEventListener("click", this.cancel.bind(this));


        this.projectButton.textContent = this.name;

      

        this.card = document.createElement("div");
        this.card.classList.add("projectContent", "card");

        this.titleContainer = document.createElement("div");
        this.title = document.createElement("h2");
        this.title.textContent = this.name;

        this.deleteButton = document.createElement("span");
        this.deleteButton.classList.add("deleteProject");

        this.addTaskButton = document.createElement("span");
        this.addTaskButton.classList.add("addTaskButton");
        this.addTaskButton.addEventListener("click", this.addTask.bind(this));

        this.deleteButton.addEventListener("click", this.deleteProject.bind(this.project));

        this.cancelButton.addEventListener("click", this.deleteProject.bind(this.project));

        this.titleContainer.append(this.title);
        this.titleContainer.append(this.deleteButton);
        this.accordion.appendChild(this.addTaskButton);
        this.titleContainer.classList.add("titleContainer");
        this.deleteButton.textContent = "+";

        this.submitButton.addEventListener("click", this.update.bind(this));

        this.card.appendChild(this.titleContainer);
        this.card.appendChild(this.accordion);

        this.projectFormDelete.addEventListener("click", this.deleteProject.bind(this.project))
        this.projectButton.addEventListener("click", this.reverseStuff.bind(this));

    }


    addbutton() {
        this.projectButton.classList.add("button");
        document.querySelector(".sidenav").appendChild(this.projectButton);



    }


    cancel() {

        console.log("cancel");
        // this.projectButton.readOnly = true;

       
        const addproject = document.querySelector(".addProject");
        addproject.removeAttribute("disabled");

        this.projectForm.removeChild(this.formButtonContainer);

    }

    update() {
        
        if (this.projectButton.value === "") {



            return;
        }
        
       
        this.cancelButton.replaceWith(this.newCancel);

        this.project.setName(this.projectButton.value);
        // this.projectButton = document.createElement("a");
        this.projectButton.readOnly = "true";
        this.titleContainer.querySelector("h2").textContent = this.project.name;
        this.formButtonContainer.style.height = "0";
        this.formButtonContainer.style.opacity = "0";
        const addproject = document.querySelector(".addProject");
        addproject.removeAttribute("disabled");

        this.projectForm.removeChild(this.formButtonContainer);
     
        



    }

    addTask(){


               var task = this.project.addTask("Task");

         this.accordion.appendChild(createTaskElement(task,this.project));
            this.project.addTask("Task");
            


    }

    reverseStuff(){

        
        this.projectButton.removeAttribute("readOnly")
    
        this.formButtonContainer.style.height ="59px";
        this.formButtonContainer.style.opacity = "1";
        const addproject = document.querySelector(".addProject");
        addproject.setAttribute("disabled", "true");

        this.projectForm.appendChild(this.formButtonContainer);


    }


    cardContent() {


    }

    deleteProject() {
      console.log(this);
    //   this.element.card.remove();
        document.querySelector(".projectListContainer").removeChild(this.element.projectForm);
        document.querySelector(".content").firstChild.remove();
        const addproject = document.querySelector(".addProject");
        addproject.removeAttribute("disabled");
      

        console.log("removed");


    }



}


function createProjectElement(project) {

    new ProjectElement(project);

}




export { ProjectElement, createProjectElement };
