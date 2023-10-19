let input = document.getElementById('text');
let buttons = document.querySelectorAll('button');

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerText == 'C') {
            string = "0";
            input.value = string;
        } else if (e.target.innerText == '0') {
            string += 0;
            input.value = string;
        } else if (e.target.innerText == '()') {
            if (string.includes('(')) {
                string += ')';
                input.value = string;
            } else {
                string += '(';
                input.value = string;
            }
        } else if (e.target.innerText == 'CE') {
            string = " ";
            input.value = string;
        } else if (e.target.innerText == "+/-") {
            if ('click') {
                string = (-string)
            }
            input.value = string;
        } else {
            string = string + e.target.innerText;
            input.value = string;
        }
    })
})