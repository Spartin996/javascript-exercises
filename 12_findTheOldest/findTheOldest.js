function compareAge(a, b) {
    if (a.age > b.age) return -1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return 1;
  }

  const date = new Date();

const findTheOldest = function(people) {
    
    //add a index to the sub array called age

    people.forEach((person, index, array) => {
        //add if yearOfDeath undifined use today
        if(typeof person.yearOfDeath == "undefined"){
            people[index]['age'] = date.getFullYear() - person.yearOfBirth;
        } else {
            people[index]['age'] = person.yearOfDeath - person.yearOfBirth;
        }
    });
    
    
    //sort on age
    //find the age index and apply a sort based on the age.
    people.sort(compareAge);

    //return index 0

    return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
