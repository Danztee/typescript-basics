let age: number = 6;
age = 2;

let username: string | string[];
username = "Daniel";

// username = [
//     firstName: 'Daniel',
//     lastname: 'Olowoniyi'
// ]

let programmer: boolean;
programmer = true;

type person = {
  name: string;
  age: number;
};

let person: person;

person = {
  name: "Daniel",
  age: 20,
};

let people: person[];

let course: string | number = "react";
course = 23456;

// functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
