const Stack = (() => {

  const items = new WeakMap();
  //push, pop, peek, isEmpty, clear, size
  class Stack {
    constructor() { 
      items.set(this, []);
    }

    push(element) {
      let newList = items.get(this);
      newList.push(...arguments);
    }

    pop() {
      let newList = items.get(this);
      let popedElement = newList.pop();
      return popedElement;
    }

    peek() {
      let newList = items.get(this);
      return newList[newList.length - 1];
    }
    
    isEmpty() {
      let newList = items.get(this);
      return newList.length === 0;
    }

    clear() {
      let newList = items.get(this);
      newList = [];
    }

    size() {
      let newList = items.get(this);
      return newList.length;
    }
  }
  return Stack
})()


const s = new Stack()
s.push(9,2,3,0)