const nestedObject = {
  name: "Vishal Kukreja",
  age: 32,
  address: {
    street: "123 Mumbai fashion St",
    city: "Midtown",
    state: "MH",
    num: [1, 2, 3],
  },
  hobbies: ["reading", "drawing", "gardening", { abc: "teaching" }],
};

console.log(nestedObject.name);
console.log(nestedObject.age);
console.log(nestedObject.address.street);
console.log(nestedObject.address.city);
console.log(nestedObject.address.state);
console.log(nestedObject.address.num[0]);
console.log(nestedObject.address.num[1]);
console.log(nestedObject.address.num[2]);
console.log(nestedObject.hobbies[0]);
console.log(nestedObject.hobbies[1]);
console.log(nestedObject.hobbies[2]);
console.log(nestedObject.hobbies[3].abc);

function checkAllItemsInAnotherArray(n, m) {
  return m.every((item) => n.includes(item));
}
console.log(checkAllItemsInAnotherArray([1, 2, 3, 4, 5, 6], [2, 4]));
console.log(checkAllItemsInAnotherArray([1, 2, 3, 4, 5, 6], [2, 4, 9]));
console.log(checkAllItemsInAnotherArray([1, 2, [4, 1], [1, 2]], [1, 2]));
console.log(checkAllItemsInAnotherArray([1, 2, [4, 1], [1, 2]], [2, 1]));
console.log(checkAllItemsInAnotherArray([1, 2, [4, 1], [1, 2]], [1, 3]));

function arrayToObject(array) {
  const result = {};
  for (const [key, value] of array) {
    result[key] = value;
  }
  return result;
}

const demoPairArr = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["a", 4],
];
const output = arrayToObject(demoPairArr);
console.log(output); // {a: 4, b: 2, c: 3}

const demoPairArr1 = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
  ["a", 4],
];

function createObjectFromArray(arr) {
  const result1 = {};
  arr.forEach((pair) => {
    const [key, value] = pair;
    if (!result1.hasOwnProperty(key)) {
      result1[key] = value;
    }
  });
  return result1;
}

const output1= createObjectFromArray(demoPairArr1);
console.log(output1); // { a: 1, b: 2, c: 3 }

const input =  [
    {
        id:1,
        slots:[ {dosage:"", title:"Hii"}, {dosage: "H!", title:"Hii"}, ]
    }, 
   {
        id: 2,
        slots: [ { dosage: "abc", title: "Hii" }, { dosage: "H!", title: "Hii" }, ]
    }
]
const input1 =  [
    {
        id:1,
        slots:[ {dosage:"abc", title:"Hii"}, {dosage: "H!", title:"Hii"}, ]
    }, 
   {
        id: 2,
        slots: [ { dosage: "abc", title: "Hii" }, { dosage: "H!", title: "Hii" }, ]
    }
]


function isAnyDosageEmpty(data) {
    for (let item of data) 
        {
        for (let slot of item.slots) 
           {
            if (slot.dosage === "") {
                return true;
            }
        }
    }
    return false;
}
console.log(isAnyDosageEmpty(input));
console.log(isAnyDosageEmpty(input1));