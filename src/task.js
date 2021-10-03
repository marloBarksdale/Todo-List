import moment from "moment";



class Task {

    constructor(name) {

        this.name = name;
        this.date = moment().format("yyyy-MM-DD");
        this.note = document.createElement("p");
        this.priority = null;
        this.status = "Incomplete";
    }


    addNote(s) {

        this.note = s

    }


    addDate(r) {

        this.date = r;
    }

    getName() {
        return this.name
    }


    getNote() {
        // this.note = `Hello from ${this.name}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        this.note.textContent = (`Hello from ${this.name}. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`);
        return this.note;
    }




}



export { Task }