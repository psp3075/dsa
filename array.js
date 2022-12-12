const arr = [1, 2, 3, 'hello']
console.log(arr)

//access - O(1)
//search - O(n)

arr.push(5) //O(1)
console.log(arr)

arr.pop() //O(1)
console.log(arr)

arr.unshift('undefined') //O(n)
console.log(arr)

arr.shift() //O(n)
console.log(arr)

for (const item of arr) {
  console.log(item)
}

//forEach,map,filter,reduce - O(n)
//concat,slice,splice - O(n)