'use strict';

// 1 ---------------

const numberSetOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function modifyNumbers(numbers) {
    return numbers.map(currentNumber => currentNumber % 2 === 0 ? currentNumber + 1 : currentNumber - 1);
}

console.log(modifyNumbers(numberSetOne));


// 2 ---------------

function capitalizeWords(words) {
    return words.map(word => {

        const firstLetter = word[0].toUpperCase();
        const restLetters = word.slice(1).toLowerCase()

        return `${firstLetter}${restLetters}`
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
    return filteredUsers = usersArray.filter(user => !idToRemove.includes(user.id));
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



// 5 ---------------

const usersTaks5 = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },
    {
        id: 3,
        first_name: 'JJ',
        last_name: 'Abrams',
        email: 'jabr@cyberdyne.com',
        gender: 'Male',
        ip_address: '198.51.100.42',
    }
];

function separateGenders(usersList) {
    usersList.forEach(element => {
        element.fullName = element.first_name + ' ' + element.last_name;
        delete element.first_name;
        delete element.last_name;
    });

    const onlyFemale = usersList.filter(user => user.gender === 'Female');
    const onlyMale = usersList.filter(user => user.gender === 'Male');

    return { onlyMale, onlyFemale }; 
}

console.log(separateGenders(usersTaks5));



// 6 ---------------

const newReleases = [
    {
        id: 70111470,
        title: "Die Hard",
        boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/70111470",
        rating: [4.0],
        bookmark: []
    },
    {
        id: 654356453,
        title: "Bad Boys",
        boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/654356453", 
        rating: [5.0], 
        bookmark: [{ id: 432534, time: 65876586 }]
    },
    {
        id: 65432445,
        title: "The Chamber",
        boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/65432445", 
        rating: [4.0],
        bookmark: []
    },
    {
        id: 675465,
        title: "Fracture",
        boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        uri: "http://api.netflix.com/catalog/titles/movies/675465",
        rating: [5.0],
        bookmark: [{ id: 432534, time: 65876586 }]
    }
];





// 7 ---------------

function findRightRating(moviesArray, rating) {
    return moviesArray.filter(movie => movie.rating[0] === rating).map(movie => movie.id);
}

const rightRating = 5;
console.log(findRightRating(newReleases, rightRating));