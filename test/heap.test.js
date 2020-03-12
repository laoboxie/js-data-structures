const Heap = require("../src/heap");
const count = 991;

// 测试最小堆
function test1() {
  let heap = new Heap();
  let arr = [];
  for (let i = 0; i < count; i++) {
    let rand = parseInt(Math.random() * 100);
    arr.push(rand);
    heap.push(rand);
  }
  // heap.print();

  let res = [];
  while (!heap.isEmpty()) {
    res.push(heap.pop());
  }
  let sort = res.slice(0).sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== sort[i] || res.length !== sort.length) {
      console.error("result is false");
      break;
    }
  }
  // console.log(res);
  // console.log(sort);
}

// 测试最大堆
function test2() {
  let heap = new Heap((a, b) => {
    return b - a;
  });
  let arr = [];
  for (let i = 0; i < count; i++) {
    let rand = parseInt(Math.random() * 100);
    arr.push(rand);
    heap.push(rand);
  }
  // heap.print();

  let res = [];
  while (!heap.isEmpty()) {
    res.push(heap.pop());
  }
  let sort = res.slice(0).sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < res.length; i++) {
    if (res[i] !== sort[i] || res.length !== sort.length) {
      console.error("result is false");
      break;
    }
  }
  // console.log(res);
  // console.log(sort);
}

// 测试node节点
function test3() {
  let heap = new Heap((a, b) => {
    return a.val - b.val;
  });
  let arr = [];
  for (let i = 0; i < count; i++) {
    let rand = parseInt(Math.random() * 100);
    let ele = {
      val: rand,
      id: i
    };
    arr.push(ele);
    heap.push(ele);
  }
  // heap.print();

  let res = [];
  while (!heap.isEmpty()) {
    res.push(heap.pop());
  }
  let sort = res.slice(0).sort((a, b) => {
    return a.val - b.val;
  });
  // console.log(res);
  // console.log(sort)

  for (let i = 0; i < res.length; i++) {
    if (res[i].val !== sort[i].val || res.length !== sort.length) {
      console.error("result is false");
      break;
    }
  }
}

i = 789;
while (i) {
  test1();
  test2();
  test3();
  i--;
}
