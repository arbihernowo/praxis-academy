function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

Student.prototype.sayHi = function () {
    console.log("Hi");
};

var studObj1 = new Student();
var proto = Object.getPrototypeOf(studObj1); // returns Student's prototype object

console.log(proto.constructor); // returns Student function