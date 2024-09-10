'use strict';

// 1

let numberSetOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function modifyNumbers(numbers) {
    let modifyNumberSet = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            modifyNumberSet.push(numbers[i] += 1);
        } else {
            modifyNumberSet.push(numbers[i] -= 1);
        }
    }
    return modifyNumberSet;
}

console.log(modifyNumbers(numberSetOne));


// 2

function splitWordsIntoLetters(words) {
    let wordIntoLetterSet = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let letters = word.split('');
        wordIntoLetterSet.push(letters);
    }
    return wordIntoLetterSet;
}

let wordSetOne = ['HeLLo', 'woRld', 'whAt', 'THe', 'fuCK'];
console.log(splitWordsIntoLetters(wordSetOne));

let test = splitWordsIntoLetters(wordSetOne);
console.log(test);