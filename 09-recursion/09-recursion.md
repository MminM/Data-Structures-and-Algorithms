## 本章重点

- 理解递归
- 计算一个数的阶乘
- 斐波那契数列
- JavaScript 调用栈

### 1.理解递归

递归：是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。
核心：① 函数调用自身；② 函数需有基线条件（停止点）

递归函数会不断地调用自身，直到基线条件为真时停止

### 2.计算一个数的阶乘

#### 迭代法

```javascript
function factorial(n) {
  if (n < 0) return undefined;
  let total = 1;
  for (let i = n; i > 0; i--) {
    total = total * i;
  }
  return total;
}
```

#### 递归法

```javascript
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
```

### 3.斐波那契数列

斐波那契数列：是一个由 0、1、1、2、3、5、8、13···组成的序列
特点：
① 位置 0 的斐波那契数是零
②1 和 2 的斐波那契数是 1
③n（n>2）的斐波那契数是（n-1）的斐波那契数加上（n-2）的斐波那契数

#### 迭代法

```javascript
function fibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  let F1 = 1;
  let F2 = 1;
  let Fn = n;
  for (let i = 2; i < n; i++) {
    Fn = F1 + F2;
    F1 = F2;
    F2 = Fn;
  }
  return Fn;
}
```

#### 递归法

```javascript
function fibonacci(n) {
  if (n < 1) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

#### 记忆法

### 4.其它

- 为什么要用递归？它更快么？
  并不是的，常用递归是因为用递归来解决问题会更简单，容易理解，需要的代码一般也很少，但是它并不会一定比迭代要快。
