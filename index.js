buttons = document.querySelectorAll('button');
let division = document.getElementById('divison')
let screenValue = '';
let historyValue = '';
let screen = document.getElementById('output-value');
let history = document.getElementById('history-value');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
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
        
        else {
            history.innerText += buttonText
            screenValue += buttonText;
            screen.innerText = screenValue;
        }
    })
}

