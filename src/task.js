import moment from "moment";
function createTask(name, date){

    

    class Task{

            constructor(name){

                this.name = name;
                this.date = moment().format("yyyy-MM-DD");
                this.note = note;
                this.priority = priority;
            }


            addNote(){



            }


            addDate(r){
                
                this.date = r;
            }

            getName(){
                return this.name
            }
    }

    return new Task(name)
   
}

export{createTask}