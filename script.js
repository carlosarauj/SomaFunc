let n = prompt('Escolha');
let n1 = parseFloat(n);

let soma = 0;
let expressao = '';

for (let cont = 1; cont <= n1; cont++) {
    soma += cont;
    if (cont === 1) {
        expressao += cont;
    } else {
        expressao += ' + ' + cont;
    }
}

expressao += ' = ' + soma;
alert(expressao);
