function check_triang(num_1, num_2, num_3){
    result = num_1 + num_2
    if ((num_1 == num_2) && (num_1 == num_3)){
        console.log('Triangulo equilatero')
    }
    else if((num_1 == num_2) || (num_1 == num_3)){
        console.log('Triangulo Isósceles')
    }
    else if((num_1 != num_2) && (num_1 != num_3)){
        console.log('Triangulo Escaleno')
    } 
    else if ((result < num_3)){
        console.log('Triangulo inválido')
    }
}

console.log(check_triang(1,2,7))