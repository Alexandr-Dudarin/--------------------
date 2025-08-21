function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomExponent(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomNumber(5, 10);

const randomExponent = getRandomExponent(2, 4);


function square(randomNumber){
    return randomNumber * randomNumber
}

console.log(randomNumber);

console.log(randomExponent);

console.log(square(randomNumber));

function NumberInExponent(randomNumber, randomExponent) {
    return randomNumber ** randomExponent
}

console.log(NumberInExponent(randomNumber, randomExponent))

