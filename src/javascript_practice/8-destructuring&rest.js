// const array = ["thing", 42, false, {key:"value"}, [1,2,3,4,undefined], NaN];

// let stringVar = array[0];
// let numVar = array[1];
// let objVar = array[3];
// let nanVar = array[array.length - 1];

// console.log(stringVar, numVar, objVar, nanVar);

// let [string, num,, obj,, nan] = array; //double commas allow us to skip certain values of the array we don't care about
// console.log(string, num, obj, nan);

// let newArr = ["a", 1, undefined, ...array];
// console.log(newArr);

const testObj = {
  string: "stringy string",
  num: 23,
  bool: true,
  obj: { key: "wall" },
  arr: [1, 2, 3, 4],
  nan: NaN,
};

let stringVar = testObj.string;
let numVar = testObj.num;
let objVar = testObj.obj;
let nanVar = testObj.nan;

console.log(stringVar, numVar, objVar, nanVar);

let { string, obj, num, nan } = testObj;

console.log(string, num, obj, nan);

// let newObj = {test: "blah", 22, ...testObj};
// console.log(newObj);
