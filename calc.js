function calc(num_1, num_2, operator){
    if (operator == '+'){
        return num_1 + num_2
    }
    if (operator == '-'){
        return num_1 - num_2
    }
    if (operator == '*'){
        return num_1 * num_2
    }
    if (operator == '/'){
        return num_1 / num_2
    }
    else
    console.log('Operador inválido')
}

console.log(calc(2,6,'*'))