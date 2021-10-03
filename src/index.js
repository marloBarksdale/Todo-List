import { Project } from "./project";
import { ProjectElement } from "./projectElement";
import "./style.css"
import { createTaskElement } from "./taskCard";
import "boxicons";
import { BoxIconElement } from "boxicons";

function mainPage() {

    const exitContainer = document.createElement("div");
    exitContainer.classList.add("exitContainer");

    


    const content = document.createElement("div");
    content.classList.add("content");

    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");

   

    const menuIcon = document.createElement("box-icon");
    menuIcon.setAttribute("name", "menu");
    menuIcon.setAttribute("size", "large");
    menuIcon.classList.add("menuIcon");
    menuIcon.onclick = function () {

        sideNav.style.width = "300px";
        content.style.marginLeft = "300px";
        menuIcon.style.display = "none";
        document.querySelector(".addTaskButton").style.marginRight = "0"

    }

    

    navbar.appendChild(menuIcon);

    const sideNav = document.createElement("div");
    sideNav.classList.add("sidenav");
    document.body.appendChild(navbar);
    document.body.appendChild(sideNav);

    sideNav.appendChild(exitContainer);
   
    
  
    exitContainer.onclick = function () {
        sideNav.style.width = 0;
        content.style.marginLeft = "0";
        menuIcon.style.display = "inline-block";
        document.querySelector(".addTaskButton").style.marginRight = "144px"
    }


    document.body.appendChild(content);



    const main = document.createElement("div");
    main.classList.add("main");




    var i = 1;
    var addProjectcontainer = document.createElement("div");
    addProjectcontainer.classList.add("addProjectContainer");
    const addProject = document.createElement("button");
    addProject.classList.add("addProject");
    addProjectcontainer.appendChild(addProject);

    const btnSpan = document.createElement("span");
    addProject.classList.add("button");
    btnSpan.textContent = "Add Project";
    addProject.appendChild(btnSpan);
    sideNav.appendChild(addProjectcontainer);



    content.appendChild(main);

    var projectList = new Array();

    function show() {

        projectList.forEach(element => {
            element.showTask();
        });



    }


    const projectListContainer = document.createElement("div");
    projectListContainer.classList.add("projectListContainer");

    sideNav.appendChild(projectListContainer);


    addProject.onclick = function () {

        addProject.disabled = "true";

        const p1 = new Project("");

        
           
          
      

        

        
        

       
        projectList.push(p1);
        
        i++;

        projectListContainer.appendChild(p1.getProjectButton());

        // var task = p1.addTask("Task");

        // p1.getProjectTaskPane().appendChild(createTaskElement(task,p1));
  
        if(content.firstChild!==null){
            content.firstChild.remove();
        }
        
        content.appendChild(p1.getProjectTaskPane());
        p1.getExactButton().addEventListener("click", function () {


            switchPane(p1);

        })
    }


    function switchPane(pane) {
        console.log("switchpane");
        if(content.firstChild!==null){
            content.firstChild.remove();
        }
        content.appendChild(pane.getProjectTaskPane());
        show();



    }



   


}



mainPage();



