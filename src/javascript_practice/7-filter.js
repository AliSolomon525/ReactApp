//filter returns a new array, doesn't modify original one

const instructors = [
  { name: "Ali", specialty: "reading", medals: 4 },
  { name: "Andrew", specialty: "Jedi Master", medals: 5 },
  { name: "Storm", specialty: "meowing", medals: 4 },
  { name: "Treasa", specialty: "cooking", medals: 10 },
  { name: "Peter", specialty: "fixing cars", medals: 4 },
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
  if (instructors[i].medals >= 5) {
    instructor_names.push(instructors[i].name);
  }
}

console.log(instructor_names);
