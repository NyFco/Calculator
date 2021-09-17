let temporary;
let operator;
let RESULT;

// Result and input
const DISPLAYER = document.getElementById("displayScreen");

// Numbers
const NUM0 = document.getElementById("zero");
const NUM1 = document.getElementById("one");
const NUM2 = document.getElementById("two");
const NUM3 = document.getElementById("three");
const NUM4 = document.getElementById("four");
const NUM5 = document.getElementById("five");
const NUM6 = document.getElementById("six");
const NUM7 = document.getElementById("seven");
const NUM8 = document.getElementById("eight");
const NUM9 = document.getElementById("nine");

// Operators
const CLR = document.getElementById("clr");
const OPP = document.getElementById("opp");
const DIV = document.getElementById("div");
const MUL = document.getElementById("mul");
const SUB = document.getElementById("sub");
const SUM = document.getElementById("sum");
const EQL = document.getElementById("eql");

// Functions
const num0BtnHandler = () => {
    DISPLAYER.value *= 10;
}
const num1BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 1;
}
const num2BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 2;
}
const num3BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 3;
}
const num4BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 4;
}
const num5BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 5;
}
const num6BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 6;
}
const num7BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 7;
}
const num8BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 8;
}
const num9BtnHandler = () => {
    DISPLAYER.value = DISPLAYER.value * 10 + 9;
}

const clrBtnHandler = () => {
    DISPLAYER.value = 0;
}
const oppBtnHandler = () => {
    DISPLAYER.value *= -1;
}

// Event listeners for numbers
NUM0.addEventListener('click', num0BtnHandler);
NUM1.addEventListener('click', num1BtnHandler);
NUM2.addEventListener('click', num2BtnHandler);
NUM3.addEventListener('click', num3BtnHandler);
NUM4.addEventListener('click', num4BtnHandler);
NUM5.addEventListener('click', num5BtnHandler);
NUM6.addEventListener('click', num6BtnHandler);
NUM7.addEventListener('click', num7BtnHandler);
NUM8.addEventListener('click', num8BtnHandler);
NUM9.addEventListener('click', num9BtnHandler);

// Event listeners for operators
CLR.addEventListener('click', clrBtnHandler);
OPP.addEventListener('click', oppBtnHandler);
DIV.addEventListener('click', () => {
    temporary = DISPLAYER.value;
    operator = '/';
    DISPLAYER.value = 0;
    DIV.style.color = "#1DC19F";
});
SUM.addEventListener('click', () => {
    temporary = DISPLAYER.value;
    operator = '+';
    DISPLAYER.value = 0;
    SUM.style.color = "#1DC19F";
});
SUB.addEventListener('click', () => {
    temporary = DISPLAYER.value;
    operator = '-';
    DISPLAYER.value = 0;
    SUB.style.color = "#1DC19F";
});
MUL.addEventListener('click', () => {
    temporary = DISPLAYER.value;
    operator = '*';
    DISPLAYER.value = 0;
    MUL.style.color = "#1DC19F";
});
EQL.addEventListener('click', () => {
    if (operator === '+') {
        RESULT = +temporary + +DISPLAYER.value;
        SUM.style.color = "#ccc";
    } else if (operator === '-') {
        RESULT = +temporary - +DISPLAYER.value;
        SUB.style.color = "#ccc";
    } else if (operator === '/') {
        RESULT = +temporary / +DISPLAYER.value;
        DIV.style.color = "#ccc";
    } else {
        RESULT = +temporary * +DISPLAYER.value;
        MUL.style.color = "#ccc";
    }
    DISPLAYER.value = RESULT;
});