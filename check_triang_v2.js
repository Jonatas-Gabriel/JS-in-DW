function check_triang(num_1, num_2, num_3) {
    // Check if the numbers are positive
    if (num_1 <= 0 || num_2 <= 0 || num_3 <= 0) {
        return "Números devem ser positivos.";
    }

    // Check if the numbers can form a triangle
    if (num_1 >= num_2 + num_3 || num_2 >= num_1 + num_3 || num_3 >= num_1 + num_2) {
        return "Números não formam um triângulo.";
    }
    else if (num_1 === num_2 && num_2 === num_3) {
        return "Triângulo equilátero.";
    }
    else if (num_1 === num_2 || num_2 === num_3 || num_1 === num_3) {
        return "Triângulo isósceles.";
    }
    else {
        return "Triângulo escaleno.";
    }
}

// Test cases
console.log(check_triang(3, 4, 5)); // Triângulo escaleno.
console.log(check_triang(2, 2, 2)); // Triângulo equilátero.
console.log(check_triang(2, 2, 3)); // Triângulo isósceles.
console.log(check_triang(1, 2, 3)); // Números não formam um triângulo.
console.log(check_triang(0, 2, 3)); // Números devem ser positivos.