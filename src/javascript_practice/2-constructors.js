class User {
  //name the class
  constructor(first, last, e) {
    //call constructor function & create params
    this.f = first; //left side stores incoming value from right side as property for "this" specific object being created
    this.l = last;
    this.email = e;
  }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //O'Connor
console.log(userOne); //User
