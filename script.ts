let diceArray: Die[] = [];

//constructor
class Die {
    value: number;
    div: HTMLDivElement;

    constructor() {
        this.value = this.roll();
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.innerHTML = String(this.value);
        document.body.appendChild(this.div);
        this.div.addEventListener('click', () => {
            this.value = this.roll()
            this.div.innerHTML = String(this.value);
        });
        //removes double clicked div
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            diceArray.splice(diceArray.indexOf(<any>this), 1);
        })
    }
    //random assigns 1-6 to value and updates the div
    roll() : number {
        return Math.ceil(Math.random() * 6);
    }


}

//die create on click
document.getElementById('create').addEventListener('click', () => {
    diceArray.push(new Die());
});

//reroll the dice values;
document.getElementById('roll').addEventListener('click', () => {
    for (let i = 0; i < diceArray.length; i++){
        diceArray[i].value = diceArray[i].roll();
        diceArray[i].div.innerHTML = String(diceArray[i].value);
    }
});

//getting the sum of dice
document.getElementById('sum').addEventListener('click', () => {
    let sum = 0;
    for (let i = 0; i < diceArray.length; i++){
        sum += diceArray[i].value;
    }
    alert(`This die total is: ${sum}`);
});