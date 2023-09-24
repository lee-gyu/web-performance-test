const DATA_SIZE = 100000;

const arr = [];

class Item {
  constructor(index) {
    this.index = index;
  }
  show() {
    console.log("show!" + this.index);
  }
  hide() {
    console.log("hide!" + this.index);
  }
}

for (let index = 0; index < 100000; index++) {
  arr.push( new Item(index) );
}

window.arr = arr;