document.addEventListener('DOMContentLoaded', function () {
    const keyboard = document.getElementsByClassName("keyboard");
    const monitor = document.getElementsByClassName('monitor')
    console.log(keyboard[0].children)
    let memory = 0,
        act = '',
        res = 0
    keyboard[0].addEventListener('click', function (e) {
        console.log(e.target)
        if (monitor[0].textContent.length == 1 && monitor[0].textContent == '0' && + e.target.textContent <= 9) {
            monitor[0].textContent = ''
        }
        if (+ e.target.textContent <= 9 && res > 0) {
            res = 0
            monitor[0].textContent = ''
        }
        if (+ e.target.textContent <= 9) {
            monitor[0].textContent += e.target.textContent
        }
        if (e.target.textContent == '.' && ((+monitor[0].textContent) % 2) == 0 && monitor[0].textContent.indexOf(".") == -1) {
            monitor[0].textContent += e.target.textContent
        }
        if (e.target.textContent == 'C') {
            monitor[0].textContent = 0
            memory = 0
            act = ''
            res = 0
        }

        if (e.target.textContent == '=') {
            console.log(memory, act)
            switch (act) {
                case '+': res = memory + (+monitor[0].textContent)
                    break;
                case '-': res = memory - (+monitor[0].textContent)
                    break;
                case '/': res = memory / (+monitor[0].textContent)
                    break;
                case '*': res = memory * (+monitor[0].textContent)
                    break;
                default:
                    break;
            }

            monitor[0].textContent = res

        }

        if (e.target.textContent == '+' || e.target.textContent == '-' || e.target.textContent == '/' || e.target.textContent == '*') {
            memory = +monitor[0].textContent
            act = e.target.textContent
            monitor[0].textContent = 0
            console.log(memory, act)
        }

    })
})