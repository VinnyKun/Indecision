// es5 functions can be named and be anonymous
function square(x) {
  return x * x;
}

//console.log(square(8))

//arrow functions must be assigned to a variable

// const cube = (x) => {
//     return x * x * x;
// }

//we do not need to explicitly use return anywhere in arrow functions
const cube = x => x * x * x;


// console.log(square(8))
// console.log(cube(2));

// get first name function
const name = 'vineeth kunnath';

// verbose
const getFirstName = (fullname) => fullname.split(' ')[0];

// short version
const getFirst = fullname => fullname.split(' ')[0];
console.log(getFirst(name));
