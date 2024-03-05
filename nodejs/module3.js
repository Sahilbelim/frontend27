class Person {

     constructor(name, age, gender) {
          this.name = name;
          this.age = age;
          this.gender = gender;
     }

     getData() {
          console.log(`my name is ${this.name} age is ${this.age} and gender is ${this.gender}`);
     }

}

module.exports.Person = Person;