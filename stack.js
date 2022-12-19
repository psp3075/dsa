class Stack{
  constructor(){
    this.items = []
  }

  push(item){ //O(1)
  this.items.push(item)  
  }

  pop(){ //O(1)
    return this.items.pop()
  }

  peak(){
    return this.items[this.items.length - 1]
  }

  isEmpty(){
    return this.items.length === 0
  }

  size(){
    return this.items.length
  }

  print(){
    console.log(this.items.toString())
  }
}

const stack = new Stack()
console.log(stack.isEmpty())

stack.push(10)
stack.push(20)

console.log(stack.size())
stack.print()

console.log(stack.peak())