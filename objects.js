//not iterable, unordered
//data-type of the key-field is restricted to integer, strings, and symbols
// has prototype as key
const obj = {
  name: 'Adam',
  age: 25,
  'test-3': true,
  printMyName: function() {
    console.log(this.name)
  }
}

obj.hobby = 'football'
delete obj.hobby

console.log(obj.name)
console.log(obj['age'])
console.log(obj['test-3']) //not possible with .notation
console.log(obj)
obj.printMyName()

console.log(Object.entries(obj)) // - O(n)
//Object.values() - O(n)
//Object.entries() - O(n)

//Insert - O(1)
//Remove - O(1)
//Access - O(1)
//Search - O(n)