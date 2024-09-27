'use strict';

// 1 ---------------

const numberSetOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function modifyNumbers(numbers) {
    const modifyNumberSet = [];

    for (let i = 0; i < numbers.length; i++) {
        // if (numbers[i] % 2 === 0) {
        //     modifyNumberSet.push(numbers[i] += 1);
        // } else {
        //     modifyNumberSet.push(numbers[i] -= 1);
        // }
        let currentNumber = numbers[i];
        modifyNumberSet.push(currentNumber % 2 === 0 ? currentNumber += 1 : currentNumber -= 1);

    }
    return modifyNumberSet;
}

console.log(modifyNumbers(numberSetOne));


// 2 ---------------

function capitalizeWords(words) {
    return words.map(word => {

        let firstLetter = word.charAt(0);
        firstLetter = firstLetter.toUpperCase();

        let remainingLetters = word.slice(1);
        remainingLetters = remainingLetters.toLowerCase();

        let capitalizedWord = firstLetter + remainingLetters;

        return capitalizedWord;
    });
}

const wordSetOne = ['HeLLo', 'woRld', 'whAt', 'THe', 'fuCK'];
const rightWordSet = capitalizeWords(wordSetOne);
console.log(rightWordSet);


// 3 ---------------

const users = [
    {
        id: 1,
        name: "One",
    },
    {
        id: 2,
        name: "Two"
    },
    {
        id: 3,
        name: "Three",
    },
    {
        id: 4,
        name: "Four",
    }
];

function removeUsers(usersArray, idToRemove) {
    const filteredUsers = usersArray.filter(user => !idToRemove.includes(user.id));
    return filteredUsers; 
}

const idToRemove = [1, 3];
console.log(removeUsers(users, idToRemove));


// 4 ---------------

function isPalindrome(word) {
    const wordReverse = word.split('').reverse().join('');
    return wordReverse === word;
};

console.log(isPalindrome('asdfgfdsa'));
console.log(isPalindrome('aaasdfgfdsa'));