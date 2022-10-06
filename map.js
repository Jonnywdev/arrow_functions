// using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
    results.push(num * 2);
}

console.log(results);

// using map()
const multiplyByTwo = function (num) {
    return num * 2;
}
const mapResults = nums.map(multiplyByTwo);
console.log(mapResults);


// simplified w/ map()
const simplified = nums.map(function (num) {return num * 2});

console.log(simplified)

// simplified w/ map() + arrow function
const arrowFunc = nums.map(num => num * 2);
console.log(arrowFunc);


// with objects

const students = [
    {   id: 1,
        name: 'Mark',
        profession: 'Developer',
        Skill: 'Javascript'
    },
    {   id: 2,
        name: 'Ariel',
        profession: 'Developer',
        Skill: 'HTML'
    },
    {   id: 3,
        name: 'Jason',
        profession: 'Designer',
        Skill: 'CSS'
    }
];

const studentsWithIds = students.map(student => [student.name, student.id]);

console.log(studentsWithIds);

const studentObject = students.map(studentObject => ["id:", studentObject.id, "name:", studentObject.name ]);
console.log(studentObject);
