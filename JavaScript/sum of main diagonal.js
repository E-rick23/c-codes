//This code simply makes the sum the main diagonal of a matrix.
//First we declare the variables we need.
var tam, soma;
soma = 0;
//After that, we ask the user the size of the matrix.
tam = parseInt(prompt("Type the matrix size (Example: if the value is 3, the program will consider it a 3x3 matrix):"));
var m = [];
//The following two for loops now adquire the matrix.
for(i = 0; i < tam; i++){
    m[i] = []
    for(j = 0; j < tam; j++){
        m[i][j] = parseInt(prompt(""));
    }
}
//Now, those two for loops sums the values of the main diagonal.
for(i = 0; i < tam; i++){
    for(j = 0; j < tam; j++){
        if (i == j){
            soma = soma + m[i][j];
        }
    }
}
//After that, the sum of the values is printed.
alert(`The sum of the main diagonal is: ${soma}`);
    