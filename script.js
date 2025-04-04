const display = document.querySelector('#display');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    } else {
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                display.value += value;
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            case 'all-clear':
                display.value = '';
                break;
            default:
                display.value += value;
                break;
        }
    }
});
