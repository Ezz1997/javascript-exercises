const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(people) {    
    return people.reduce((oldestPerson, person) => {
        const currentAge = getAge(person.yearOfBirth, person.yearOfDeath);
        const oldestPersonAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);

            if(oldestPersonAge < currentAge){
                return person;
            }
        

        return oldestPerson;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
