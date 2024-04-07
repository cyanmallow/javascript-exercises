const findTheOldest = function(people) {
    if (people.length === 0) {
        return null; // or throw an error, depending on requirements
    }

    let maxAge = 0;
    let oldestPerson = null;

    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let currentAge;

        if (person.yearOfDeath) {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        } else {
            currentAge = 2024 - person.yearOfBirth;
        }

        if (currentAge > maxAge) {
            maxAge = currentAge;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};


// Do not edit below this line
module.exports = findTheOldest;
