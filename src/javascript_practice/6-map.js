//map function requires a return value

const instructors = [
  { name: "Ali", specialty: "reading", medals: 4 },
  { name: "Andrew", specialty: "Jedi Master", medals: 5 },
  { name: "Storm", specialty: "meowing", medals: 4 },
  { name: "Treasa", specialty: "cooking", medals: 10 },
  { name: "Peter", specialty: "fixing cars", medals: 4 },
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
  instructor_names.push(instructors[i].name);
}

console.log(instructor_names);

const instructorNames = instructors.map((instructor) => instructor.name);
console.log(instructorNames);

// fix the error: const instructorInfo = `${instructors.map(instructor => ${instructors}.name: ${instructors}.specialty)}`

//the rObj is correctly formatted
var kvArray = [
  { key: 1, value: 10 },
  { key: 1, value: 10 },
  { key: 1, value: 10 },
];
console.log(kvArray);

var reformattedArray = kvArray.map((obj) => {
  var rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
});
