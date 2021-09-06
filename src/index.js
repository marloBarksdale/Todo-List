import { createTask } from "./task";
import moment from "moment";



function showTask(){


const element = document.createElement("div");
const myDate= document.createElement("input");
myDate.type = "date"
// console.log(moment().add(10, 'days').calendar());
// console.log(moment()); 
// console.log(moment().format("YY-MM-DD"))
console.log(moment());

myDate.value =  moment().format("yyyy-MM-DD");
console.log(myDate.value);


myDate.onchange = function(){
    
    r.date = myDate.value;
    element.textContent = r.getName() + r.date;
    
    element.appendChild(myDate);
}

const r = createTask("Hello");
console.log(myDate.value);
element.textContent = r.getName() + r.date;
    element.appendChild(myDate);
    
    
    return element;
}


document.body.appendChild(showTask());