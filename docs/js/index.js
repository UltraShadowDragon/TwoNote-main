const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answer3 = document.getElementById('answer3');
const answer4 = document.getElementById('answer4');
const answer5 = document.getElementById('answer5');
const answer6 = document.getElementById('answer6');
const answer7 = document.getElementById('answer7');
const answer8 = document.getElementById('answer8');
const answer9 = document.getElementById('answer9');
const answer10 = document.getElementById('answer10');
const d1 = document.getElementById('display1');
const d2 = document.getElementById('display2');
const d3 = document.getElementById('display3');
const d4 = document.getElementById('display4');
const d5 = document.getElementById('display5');
const d6 = document.getElementById('display6');
const d7 = document.getElementById('display7');
const d8 = document.getElementById('display8');
const d9 = document.getElementById('display9');
const d10 = document.getElementById('display10');
const submit = document.getElementById('submitbtn');

document.addEventListener("DOMContentLoaded", (event) => {
    submit.addEventListener("click", showAnswers);
});

function showAnswers() {
    // Retrieve values when the button is clicked
    const value1 = answer1.value.toLowerCase();
    const value2 = answer2.value.toLowerCase();
    const value3 = answer3.value.toLowerCase();
    const value4 = answer4.value.toLowerCase();
    const value5 = answer5.value.toLowerCase();
    const value6 = answer6.value.toLowerCase();
    const value7 = answer7.value.toLowerCase();
    const value8 = answer8.value.toLowerCase();
    const value9 = answer9.value.toLowerCase();
    const value10 = answer10.value.toLowerCase();

    if (value1 === 'tete') {
        console.log(value1 + " is correct");
        d1.innerHTML = "Correctement!";
    } else {
        console.log(value1 + " is wrong.")
        d1.innerHTML = "Faire un autre fois.";
    }
    if (value2 === 'jambes') {
        console.log(value2 + " is correct");
        d2.innerHTML = "Correctement!";
    } else {
        console.log(value2 + " is wrong.")
        d2.innerHTML = "Faire un autre fois.";
    }
    if (value3 === 'cou') {
        console.log(value3 + " is correct");
        d3.innerHTML = "Correctement!";
    } else {
        console.log(value3 + " is wrong.")
        d3.innerHTML = "Faire un autre fois.";
    }
    if (value4 === 'bicyclette' || value4 === 'velo') {
        console.log(value4 + " is correct");
        d4.innerHTML = "Correctement!";
    } else {
        console.log(value4 + " is wrong.")
        d4.innerHTML = "Faire un autre fois.";
    }
    if (value5 === 'auto') {
        console.log(value5 + " is correct");
        d5.innerHTML = "Correctement!";
    } else {
        console.log(value5 + " is wrong.")
        d5.innerHTML = "Faire un autre fois.";
    }
    if (value6 === 'train') {
        console.log(value6 + " is correct");
        d6.innerHTML = "Correctement!";
    } else {
        console.log(value6 + " is wrong.")
        d6.innerHTML = "Faire un autre fois.";
    }
    if (value7 === 'autobus') {
        console.log(value7 + " is correct");
        d7.innerHTML = "Correctement!";
    } else {
        console.log(value7 + " is wrong.")
        d7.innerHTML = "Faire un autre fois.";
    }
    if (value8 === 'supermarche') {
        console.log(value8 + " is correct");
        d8.innerHTML = "Correctement!";
    } else {
        console.log(value8 + " is wrong.")
        d8.innerHTML = "Faire un autre fois.";
    }
    if (value9 === 'hotel') {
        console.log(value9 + " is correct");
        d9.innerHTML = "Correctement!";
    } else {
        console.log(value9 + " is wrong.")
        d9.innerHTML = "Faire un autre fois.";
    }
    if (value10 === 'resturant') {
        console.log(value10 + " is correct");
        d10.innerHTML = "Correctement!";
    } else {
        console.log(value10 + " is wrong.")
        d10.innerHTML = "Faire un autre fois.";
    }
}