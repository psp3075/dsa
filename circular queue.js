//fixed size

class CirQueue{
  constructor(size){
    this.items = new Array(size)
    this.size = size
    this.currentLength = 0
    this.rear = -1
    this.front = -1
  }

  isEmpty(){
    return this.currentLength === 0
  }

  isFull(){
    return this.currentLength === this.size
  }

  enqueue(item){
    if(!this.isFull()){
      this.rear = (this.rear + 1) % this.size
      this.items[this.rear] = item
      this.currentLength += 1
      if(this.front === -1){
        this.front = this.rear
      }    
    }else{
      console.log('queue is full')
    }
  }

  dequeue(){
    if(this.isEmpty()){
      return null
    }
    const item = this.items[this.front]
    this.items[this.front] = null
    this.front = (this.front + 1) % this.size
    this.currentLength -= 1

    if(this.isEmpty()){
      this.front = -1
      this.rear = -1
    }
    return item
  }

  peek(){
    if(!this.isEmpty()){
      return this.items[this.front]
    }
    return null
  }

  print(){
    if(this.isEmpty()){
      console.log('Queue is empty')
    }else{
      let i 
      let str = ""
      for(i=this.front;i !==this.rear; i =(i+1)% this.size){
        str += this.items[i] + ' '
      }
      str += this.items[i]
      console.log(str)
    }
  }
}

const queue = new CirQueue(5)
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())

queue.print()
