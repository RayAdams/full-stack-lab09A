let diceArray: number[] = [];

//constructor
class Die {
    value: number;
    div: HTMLDivElement;

    constructor() {
    this.value = this.roll();
    this.div = document.createElement('div');
    this.div.className = 'die';
    this.div.innerHTML = String(this.value);
    this.div.addEventListener('click', this.roll);
    this.div.addEventListener('dblclick', this.removeDie);
    document.body.appendChild(this.div);
    }
    //random assigns 1-6 to value and updates the div
    roll() : number {
        return Math.ceil(Math.random() * 6);
    }

    //removes double clicked div
    removeDie():  {
        this.div.remove();
        var index = diceArray.indexOf(this);
        diceArray.splice(index, 1);
    }

}

document.getElementById('create').addEventListener('click', () => {
    //longer way to write:  var d = new Die();
    diceArray.push(new Die());
});

//reroll the dice values
let rollBtn = document.getElementById('roll');
rollBtn.addEventListener('click', () => {
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