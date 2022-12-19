//ordered
//keys and values - any data type
//iterables
// no prototype, no functionaity available as in objects
// size property available

const map = new Map([['a',1],['b',3]])

map.set('c',5)
console.log(map.has('a'))

map.delete('c')
console.log(map.size)

map.clear()
for (const [key,value] of map){
  console.log(`${key}: ${value}`)
}