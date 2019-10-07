let findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearofDeath)
        let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearofDeath)
        return oldestAge < currentAge ? currentPerson : oldest

    })
}

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();

    }
    return death - birth;

}

module.exports = findTheOldest
