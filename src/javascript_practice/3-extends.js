//ES6 JS Classes
class User {
  constructor(name) {
    this.name = name;
    this.type = "Trial User";
  }
  //Method 1
  greet() {
    console.log("Welcome back, " + this.name);
  }
  //Method 2
  status() {
    console.log("Current status: " + this.type);
  }
}

//Extends
class TrialUser extends User {
  trialEnding() {
    console.log(
      "Your trial will be ending soon, " +
        this.name +
        "." +
        "Would you like to join our program?"
    );
  }
}

//we use extendes to indicate that we're creating a new class that will inherit the properties and functions of another class and take on properties of its own.
