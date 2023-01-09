// OBJECTS
// key: value pair
const person = {
    name: 'Leonardo',
    shirt: 'white'
}

//access object: dot notation vs bracket notation

// console.log(person.name)
// console.log(person.shirt)

//bracket notation
// console.log(person['name'])

// assign object
person.phone = '1-222-333-4444'
// console.log(person.phone)

// console.log(person)

//create object person2

const person2 = {
    name: 'Qazi',
    shirt: 'black'
}

// console.log(person2)


// using es6 arrow function (2 arguments)
// using object
// using template literals
const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 5000,
        netWorth: function () {
            return this.assets - this.liabilities
        }
    }
   const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD.`

   return intro
}

// console.log(introducer('Enrica', 'pink'))


// const letterFrequency = (phrase) => {
//     //letterFrequency('haha') 👉 {'h': 2, 'a': 2}
//     console.log(phrase)
//     // make a `freq` object {}
//     let freq = {}
//     for (const letter of phrase) {
//         //check if letter exists in freq
//         if(letter in freq){
//             //increment the value by +1
//             freq[letter] += 1;
//         }else {
//             // otherwise, set the value to 1
//             freq[letter] = 1
//         }  
//     }
//     return freq
// }

// console.log(letterFrequency('haha'))


const wordFrequency = (phrase) => {
    let freq = {}
    const words = phrase.split(' ')
    for (const word of words) {
        console.log(word)
        if (word in freq) {
            freq[word] ++
        }else {
            freq[word] = 1
        }
    }
    return freq
}

console.log(wordFrequency('lol what lol'))