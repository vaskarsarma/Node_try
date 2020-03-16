class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        console.log(name)
        const nameListHook = document.querySelector('#names');
        console.log(nameListHook);
        nameListHook.appendChild(field);
        console.log(nameListHook);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names= ["abc" , "xyz", "ijk"];
        this.currentIndex=0;
        console.log(this);
        btn.addEventListener('click', this.addName.bind(this));
    }

    addName() {
        console.log(this);
        const name = new NameField(this.names[this.currentIndex]);
        this.currentIndex++;
        if(this.currentIndex >= this.names.length)
            this.currentIndex=0;
    }
}

const gen = new NameGenerator();