
import "./style.css";

function createTaskElement(task, project) {



   


        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordionItem");

        const closeBox = document.createElement("div");
        closeBox.classList.add("closeBox");
        const dateBox = document.createElement("div");
        dateBox.classList.add("dateBox");
        const taskDate = document.createElement("input");
        taskDate.type = "date";
        taskDate.classList.add("taskDate");
        taskDate.value = task.date;


        taskDate.onchange = function(){

            task.date = taskDate.value;
            console.log(project.taskList);

        }
        dateBox.appendChild(taskDate);



        closeBox.addEventListener("click",  function(){

            
            project.taskList.splice(project.taskList.indexOf(task), 1);
            console.log(project.getProjectTaskPane());
            console.log(project.getProjectAccordion());
         

            project.getProjectAccordion().removeChild(accordionItem); 
            console.log(project.taskList);
        })

        const accordionItemHeader = document.createElement("div"); 
        accordionItemHeader.classList.add("accordionItemHeader");

        

        const round = document.createElement("label");
        round.classList.add("container");

        
        const projectStatus = document.createElement("input");
        projectStatus.type = "checkbox"
        // projectStatus.setAttribute("id", "projectStatus");

        projectStatus.addEventListener("click", function(){
            if(projectStatus.checked === true){
                task.status = "Complete";
            }else{
                task.status = "Incomplete";
            }

            console.log(project.taskList);
        });

        const roundLabel = document.createElement("span");
        roundLabel.classList.add("checkmark");
        // roundLabel.setAttribute("for", "projectStatus");
       round.appendChild(projectStatus);
       round.appendChild(roundLabel);
        
        // round.appendChild(projectStatus);
        
        accordionItemHeader.appendChild(round);



        
        const accordionItemHeaderTitle = document.createElement("div");
        accordionItemHeaderTitle.classList.add("accordionItemHeaderTitle");
        accordionItemHeaderTitle.textContent = task.name;

        accordionItemHeader.appendChild(accordionItemHeaderTitle);
        accordionItemHeader.appendChild(dateBox);
        accordionItemHeader.appendChild(closeBox);
        

        const accordionItemBody = document.createElement("div");
        accordionItemBody.classList.add("accordionItemBody");

        accordionItemHeader.addEventListener("click", event => {

            if(event.target.classList.contains("taskDate")){
               
                 return;
            }
            accordionItemHeader.classList.toggle("active");
            if (accordionItemHeader.classList.contains("active")) {
               
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            } else {
                accordionItemBody.style.maxHeight = 0;
            }

        });

        const accordionItemBodyContent = document.createElement("div");
        accordionItemBodyContent.classList.add("accordionItemBodyContent");

        accordionItemBody.appendChild(accordionItemBodyContent);
        accordionItemBodyContent.appendChild(task.getNote());


        accordionItem.appendChild(accordionItemHeader);
        accordionItem.appendChild(accordionItemBody);
     


    











    return accordionItem


}


export { createTaskElement }