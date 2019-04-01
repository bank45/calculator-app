document.addEventListener('DOMContentLoaded', function() {
    /** Все кнопки */
    let batton = document.getElementsByClassName("button");






    /** Первый операнд */
    let variable = 0;
    /** Второй операнд */
    /*let operand = 0;*/
    /** Итоговое значение */
    let result = 0;
    /* Арифметическое действие */
    let action = "";
    /** Объект с перечнем кнопок */
    let keyboard = {1: '+', 2: '-', 3: '*', 4: '/',
        5: '7', 6: '8', 7: '9', 8: '=',
        9: '4', 10: '5', 11: '6', 12: '1',
        13: '2', 14: '3', 15: '0', 16: '.', 17: 'C'
    };
    for (let i = 0; i < batton.length; i++) {
        batton[i].addEventListener('click', function () {

            /** Ввод цифр*/
            if (i >= 5 && i != 17 && i != 8 && batton[0].innerHTML.length <= 20) {

                if(action === '=') {
                    batton[0].innerHTML = '0'
                    action = ''
                };
                console.log(action)
                if (batton[0].innerHTML === '0') {
                    batton[0].innerHTML = keyboard[i];
                } else {
                    batton[0].innerHTML += keyboard[i];
                }
                console.log(variable);
            }
            /**Применение арифметических действий */
            if (i >= 1 && i <= 4) {
                if(keyboard[i] != action) {
                    variable = Number(batton[0].innerHTML);
                    console.log(variable);
                    action = keyboard[i];
                    batton[0].innerHTML = 0;
                    console.log(action)
                } else {
                    batton[0].innerHTML = 0;
                    
                }
                console.log(variable)
                console.log(action)
            };
            /**Подсчет результата */
            if (i === 8) {
                if (action === '+') {
                    result = variable + Number(batton[0].innerHTML);
                    batton[0].innerHTML = result;
                    action = '=';
                    result = 0;
                }
                if (action === '-') {
                    result = variable - Number(batton[0].innerHTML);
                    batton[0].innerHTML = result;
                    action = '=';
                    result = 0;
                }
                if (action === '*') {
                    result = variable * Number(batton[0].innerHTML);
                    batton[0].innerHTML = result;
                    action = '=';
                    result = 0;
                }
                if (action === '/') {
                    result = variable / Number(batton[0].innerHTML);
                    batton[0].innerHTML = result;
                    action = '=';
                    result = 0;
                }
            }
            if(i === 17) {
                batton[0].innerHTML = 0;   

            }
        })
    }
})


