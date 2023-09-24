const DATA_SIZE = 100000;

const arr = [];

for (let index = 0; index < 100000; index++) {
  arr.push( {
    index,
    show: () => console.log("show!" + index),
    hide: () => console.log("hide!" + index)
  });
}

window.arr = arr;