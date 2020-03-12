// 堆
class Heap {
  constructor(compare) {
    this.data = [null];
    this.count = 0;
    this.compare = compare || this.defaultCompare;
  }

  // 返回堆中元素个数
  size() {
    return this.count;
  }

  // 返回布尔值，表示堆是否为空
  isEmpty() {
    return this.count === 0;
  }

  // 插入元素
  push(element) {
    let i = this.count + 1;
    this.data[i] = element;
    this.count++;
    this.float(i);
  }

  // 弹出堆顶元素
  pop() {
    console.assert(this.count > 0, "heap is empty");
    let element = this.data[1];
    this.swap(1, this.count);
    this.data.pop();
    this.count--;
    this.sink(1);
    return element;
  }

  // 返回堆顶元素
  peak() {
    console.assert(this.count > 0, "heap is empty");
    return this.data[1];
  }

  // 比较函数 默认最小堆
  defaultCompare(a, b) {
    return a - b;
  }

  // 交换元素
  swap(a, b) {
    // console.log(a, b, this.data[a], this.data[b])
    let temp = this.data[a];
    this.data[a] = this.data[b];
    this.data[b] = temp;
  }

  // 元素上浮
  float(i) {
    while (
      i > 1 &&
      this.compare(this.data[i], this.data[parseInt(i / 2)]) < 0
    ) {
      this.swap(i, parseInt(i / 2));
      i = parseInt(i / 2);
    }
  }

  // 元素下沉
  sink(i) {
    while (2 * i <= this.count) {
      let c = 2 * i;
      if (
        c + 1 <= this.count &&
        this.compare(this.data[c], this.data[c + 1]) > 0
      ) {
        c++;
      }
      if (this.compare(this.data[i], this.data[c]) > 0) {
        this.swap(i, c);
        i = c;
      } else {
        break;
      }
    }
  }

  // 打印堆
  print(log = console.log) {
    let res = "";
    for (let i = 1; i <= this.count; i++) {
      res += this.data[i] + " -> ";
    }
    res = res.substring(0, res.length - 4);
    log(res);
  }
}

module.exports = Heap;
