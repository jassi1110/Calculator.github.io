buttons = document.querySelectorAll('button');
let screenValue = '';
let historyValue = '';
let back = document.getElementById('back').className
console.log(back)
let screen = document.getElementById('output-value');
let history = document.getElementById('history-value');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        backSpace = e.target.className
        // console.log('Button text is ', buttonText);
        // console.log('Button text is ', backSpace);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            history.innerText += buttonText
            screen.innerText = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            history.innerText = ''
            screen.innerText = screenValue;
        }
        else if (buttonText == '=') {
            history.innerText = ''
            screen.innerText = eval(screenValue);
            screenValue = screen.innerText
        }

        else if(backSpace==back || backSpace=='bi bi-backspace-fill'){
            let n = screenValue.length
            console.log(n)
            screenValue = screenValue.slice(0,n-1)
            screen.innerText = screenValue
            history.innerText = screenValue
            // console.log(str)
        }
        
        else {
            history.innerText += buttonText
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    // console.log(back)
    })
}

