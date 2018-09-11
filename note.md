- [Javascript Note](#javascript-note)
- [基本语法](#%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95)
    - [数据类型和变量](#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%8F%98%E9%87%8F)
        - [比较运算符](#%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6)
        - [变量](#%E5%8F%98%E9%87%8F)
    - [字符串](#%E5%AD%97%E7%AC%A6%E4%B8%B2)
        - [单行字符串](#%E5%8D%95%E8%A1%8C%E5%AD%97%E7%AC%A6%E4%B8%B2)
        - [多行字符串](#%E5%A4%9A%E8%A1%8C%E5%AD%97%E7%AC%A6%E4%B8%B2)
        - [模板字符串](#%E6%A8%A1%E6%9D%BF%E5%AD%97%E7%AC%A6%E4%B8%B2)
        - [操作字符串](#%E6%93%8D%E4%BD%9C%E5%AD%97%E7%AC%A6%E4%B8%B2)
    - [数组](#%E6%95%B0%E7%BB%84)
        - [操作](#%E6%93%8D%E4%BD%9C)
    - [对象](#%E5%AF%B9%E8%B1%A1)
        - [访问对象](#%E8%AE%BF%E9%97%AE%E5%AF%B9%E8%B1%A1)
    - [条件判断](#%E6%9D%A1%E4%BB%B6%E5%88%A4%E6%96%AD)
    - [循环](#%E5%BE%AA%E7%8E%AF)
        - [`for()`](#for)
        - [`while()`](#while)
        - [`do ... while();`](#do--while)
    - [`Map`和`Set`](#map%E5%92%8Cset)
        - [`Map` 一组键值对的结构，具有极快的查找速度](#map-%E4%B8%80%E7%BB%84%E9%94%AE%E5%80%BC%E5%AF%B9%E7%9A%84%E7%BB%93%E6%9E%84%E5%85%B7%E6%9C%89%E6%9E%81%E5%BF%AB%E7%9A%84%E6%9F%A5%E6%89%BE%E9%80%9F%E5%BA%A6)
        - [`Set`和`Map`类似，也是一组key的集合，但不存储value](#set%E5%92%8Cmap%E7%B1%BB%E4%BC%BC%E4%B9%9F%E6%98%AF%E4%B8%80%E7%BB%84key%E7%9A%84%E9%9B%86%E5%90%88%E4%BD%86%E4%B8%8D%E5%AD%98%E5%82%A8value)
    - [Iterable](#iterable)
        - [`for ... of` 循环遍历集合](#for--of-%E5%BE%AA%E7%8E%AF%E9%81%8D%E5%8E%86%E9%9B%86%E5%90%88)
- [函数](#%E5%87%BD%E6%95%B0)
    - [函数定义](#%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89)
    - [`arguments`](#arguments)
    - [`rest` 参数](#rest-%E5%8F%82%E6%95%B0)
    - [变量作用域与解构赋值](#%E5%8F%98%E9%87%8F%E4%BD%9C%E7%94%A8%E5%9F%9F%E4%B8%8E%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)
        - [变量提升](#%E5%8F%98%E9%87%8F%E6%8F%90%E5%8D%87)
        - [全局作用域](#%E5%85%A8%E5%B1%80%E4%BD%9C%E7%94%A8%E5%9F%9F)
        - [**名字空间**](#%E5%90%8D%E5%AD%97%E7%A9%BA%E9%97%B4)
        - [局部作用域](#%E5%B1%80%E9%83%A8%E4%BD%9C%E7%94%A8%E5%9F%9F)
        - [常量](#%E5%B8%B8%E9%87%8F)
        - [解构赋值](#%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)
        - [使用场景](#%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF)
        - [方法 同C++的成员函数](#%E6%96%B9%E6%B3%95-%E5%90%8Cc%E7%9A%84%E6%88%90%E5%91%98%E5%87%BD%E6%95%B0)
        - [`apply()` 控制`this`的指向](#apply-%E6%8E%A7%E5%88%B6this%E7%9A%84%E6%8C%87%E5%90%91)
        - [`call()`](#call)
        - [装饰器](#%E8%A3%85%E9%A5%B0%E5%99%A8)
    - [高阶函数](#%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0)
        - [`map()` 定义在JavaScript的`Array`中](#map-%E5%AE%9A%E4%B9%89%E5%9C%A8javascript%E7%9A%84array%E4%B8%AD)
        - [`reduce()` 把一个函数作用在这个`Array`的`[x1, x2, x3...]`上，**这个函数必须接收两个参数**，把结果继续和序列的下一个元素做累积计算](#reduce-%E6%8A%8A%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E4%BD%9C%E7%94%A8%E5%9C%A8%E8%BF%99%E4%B8%AAarray%E7%9A%84x1-x2-x3%E4%B8%8A%E8%BF%99%E4%B8%AA%E5%87%BD%E6%95%B0%E5%BF%85%E9%A1%BB%E6%8E%A5%E6%94%B6%E4%B8%A4%E4%B8%AA%E5%8F%82%E6%95%B0%E6%8A%8A%E7%BB%93%E6%9E%9C%E7%BB%A7%E7%BB%AD%E5%92%8C%E5%BA%8F%E5%88%97%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E5%85%83%E7%B4%A0%E5%81%9A%E7%B4%AF%E7%A7%AF%E8%AE%A1%E7%AE%97)



# Javascript Note

# 基本语法
## 数据类型和变量
### 比较运算符  
    
- 第一种是`==`比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
    
    第二种是`===`比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。

    由于JavaScript这个设计缺陷，不要使用`==`比较，始终坚持使用`===`比较。
```javascript
    NaN === NaN; // false
```
-  唯一能判断`NaN`的方法是通过`isNaN()`函数：
```javascript   
    isNaN(NaN); // true
```
### 变量

- 变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，且不能用数字开头

- 注意只能用`var`申明一次
    
    这种变量本身类型不固定的语言称之为**动态语言**，与之对应的是**静态语言**。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。

## 字符串
### 单行字符串
- 用`''`或`""`括起来的字符表示
### 多行字符串 
- 用反引号 `...` 表示
### 模板字符串
- 用`+`号连接
```javascript
    var name = '小明';
    var age = 20;
    var message = '你好, ' + name + ', 你今年' + age + '岁了!';
    alert(message);
```
- 新
```javascript     
    var name = '小明';
    var age = 20;
    var message = `你好, ${name}, 你今年${age}岁了!`;
    // 注意是 ` 号
    alert(message);
```
### 操作字符串
- `length` 获取长度
```javascript
    var s = 'Hello, world!';
    s.length; // 13
```
- **字符串是不可变的**
```javascript
    var s = 'Test';
    s[0] = 'X';
    alert(s); // s仍然为'Test'
```
- `toUpperCase()` 变为大写
- `toLowerCase()` 变为小写
- `indexOf()` 搜索指定字符串出现的位置
```javascript
    var s = 'hello, world';
    s.indexOf('world'); // 返回7
    s.indexOf('World'); // 没有找到指定的子串，返回-1
```
- `substring()` 返回指定索引区间的子串
```javascript
    var s = 'hello, world'
    s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
    s.substring(7); // 从索引7开始到结束，返回'world'
```

## 数组
### 操作
- `length` 获取长度
```javascript
    var arr = [1, 2, 3.14, 'Hello', null, true];
    arr.length; // 6
```
- 直接给`Array`的length赋一个新的值会导致`Array`大小的变化
- 通过索引赋值时，索引超过了范围，同样会引起`Array`大小的变化
```javascript
    var arr = ['A', 'B', 'C'];
    arr[1] = 99;
    arr; // arr现在变为['A', 99, 'C']

    var arr = [1, 2, 3];
    arr[5] = 'x';
    arr; // arr变为[1, 2, 3, undefined, undefined, 'x']
```
- `indexOf()` 搜索一个指定的元素的位置
- `slice()` 对应String的substring()版本，它截取`Array`的部分元素，然后返回一个新的`Array`
```javascript
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    arr.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
    arr.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
```  
- 如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个`Array`
```javascript
    var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    var aCopy = arr.slice();
    aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    aCopy === arr; // false
```
- `pop()` 和 `push()`
```javascript
    var arr = [1, 2];
    arr.push('A', 'B'); // 返回`Array`新的长度: 4
    arr; // [1, 2, 'A', 'B']
    arr.pop(); // pop()返回'B'
    arr; // [1, 2, 'A']
    arr.pop(); arr.pop(); arr.pop(); // 连续pop 3次
    arr; // []
    arr.pop(); // 空数组继续pop不会报错，而是返回undefined
    arr; // []
```
- `unshift()`和`shift()` 如果要往`Array`的头部添加若干元素，使用`unshift()`方法，`shift()`方法则把`Array`的第一个元素删掉
```javascript
    var arr = [1, 2];
    arr.unshift('A', 'B'); // 返回`Array`新的长度: 4
    arr; // ['A', 'B', 1, 2]
    arr.shift(); // 'A'
    arr; // ['B', 1, 2]
    arr.shift(); arr.shift(); arr.shift(); // 连续shift 3次
    arr; // []
    arr.shift(); // 空数组继续shift不会报错，而是返回undefined
    arr; // []
```
- `sort()` 顺序排序
- `reverse()` 反转操作
- `splice()` 从指定的索引开始删除若干元素，然后再从该位置添加若干元素
```javascript
    var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
    // 从索引2开始删除3个元素,然后再添加两个元素:
    arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
    arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
    // 只删除,不添加:
    arr.splice(2, 2); // ['Google', 'Facebook']
    arr; // ['Microsoft', 'Apple', 'Oracle']
    // 只添加,不删除:
    arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
    arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```
- `concat()` **注意，concat()方法并没有修改当前`Array`，而是返回了一个新的`Array`**
```javascript
    var arr = ['A', 'B', 'C'];
    var added = arr.concat([1, 2, 3]);
    added; // ['A', 'B', 'C', 1, 2, 3]
    arr; // ['A', 'B', 'C']
    // 可以接收任意个元素和`Array`
    var arr = ['A', 'B', 'C'];
    arr.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]
```
- `join()` 每个元素都用指定的字符串连接
```javascript
    var arr = ['A', 'B', 'C', 1, 2, 3];
    arr.join('-'); // 'A-B-C-1-2-3'
```

## 对象
### 访问对象
- 可以用`xiaohong['name']`来访问xiaohong的`name`属性，不过xiaohong.name的写法更简洁
- 由于JavaScript的对象是动态类型，你可以自由地给一个对象添加或删除属性
```javascript
    var xiaoming = {
        name: '小明'
    };
    xiaoming.age; // undefined
    xiaoming.age = 18; // 新增一个age属性
    xiaoming.age; // 18
    delete xiaoming.age; // 删除age属性
    xiaoming.age; // undefined
    delete xiaoming['name']; // 删除name属性
    xiaoming.name; // undefined
    delete xiaoming.school; // 删除一个不存在的school属性也不会报错
```
- `in`判断一个属性存在，这个属性不一定是xiaoming的，它可能是xiaoming继承得到的
```javascript
  var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
    };
    'name' in xiaoming; // true
```
- `hasOwnProperty()` 判断一个属性是否是xiaoming自身拥有的，而不是继承得到的
```javascript
    var xiaoming = {
        name: '小明'
    };
    xiaoming.hasOwnProperty('name'); // true
```

## 条件判断
- JavaScript把`null`、`undefined`、`0`、`NaN`和空字符串`''`视为false，其他值一概视为true

## 循环

### `for()`
- 同C++
- `for ... in` 把一个对象的所有属性依次循环出来
```javascript
    var o = {
        name: 'Jack',
        age: 20,
        city: 'Beijing'
    };
    for (var key in o)
        console.log(key); // 'name', 'age', 'city'
```
- 要过滤掉对象继承的属性，用`hasOwnProperty()`来实现
```javascript
    var o = {
        name: 'Jack',
        age: 20,
        city: 'Beijing'
    };
    for (var key in o)
        if o.hasOwnProperty(key)
            console.log(key); // 'name', 'age', 'city'
```
- `for ... in`循环可以直接循环出`Array`的索引, 因为`Array`也是对象，而它的每个元素的索引被视为对象的属性。**注意，`for ... in`对`Array`的循环得到的是String而不是Number。**
```javascript
    var a = ['A', 'B', 'C']
    for (var i in a){
        console.log(i); // 'name', 'age', 'city'
        console.log(a[i])
    }
```
### `while()`
- 同C++
### `do ... while();`
- 同C++

## `Map`和`Set`
### `Map` 一组键值对的结构，具有极快的查找速度
- 初始化`Map`需要一个二维数组，或者直接初始化一个空`Map`。注意一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
```javascript
    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael');
```
- `set()`,`get()`,`delete()`
```javascript
    var m = new Map(); // 空Map
    m.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined
```
### `Set`和`Map`类似，也是一组key的集合，但不存储value
- 建表,重复元素在`Set`中自动被过滤
```javascript
    var s1 = new Set(); // 空Set
    var s2 = new Set([1, 2, 3]); // 含1, 2, 3
```
- `add(key)` 添加元素到`Set`中
```javascript
    s.add(4);
    s; // Set {1, 2, 3, 4}
    s.add(4);
    s; // 仍然是 Set {1, 2, 3, 4}
```
- delete(key)

## Iterable
### `for ... of` 循环遍历集合
```javascript
    var a = ['A', 'B', 'C'];
    var s = new Set(['A', 'B', 'C']);
    var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
    for (var x of a)  // 遍历`Array`
        console.log(x);
    for (var x of s)  // 遍历Set
        console.log(x);
    for (var x of m)  // 遍历Map
        console.log(x[0] + '=' + x[1]);
```
- 对比 `for ... in` :遍历的实际上是对象的属性名称
```javascript
    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x in a)
        console.log(x); // '0', '1', '2', 'name'

    var a = ['A', 'B', 'C'];
    a.name = 'Hello';
    for (var x of a)
        console.log(x); // 'A', 'B', 'C'
```
- 使用`iterable`内置的`forEach`回调函数方法
    - ``Array``
    ```javascript
        a.forEach(function (element, index, `Array`) {
            console.log(element + ', index = ' + index);
        });
        // element: 指向当前元素的值
        // index: 指向当前索引
        // `Array`: 指向`Array`对象本身
    ```
    - `Set`
    ```javascript
        var s = new Set(['A', 'B', 'C']);
        s.forEach(function (element, sameElement, set) {
            console.log(element);
        });
    ```
    - `Map`
    ```javascript
        var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
        m.forEach(function (value, key, map) {
            console.log(value);
        });
    ```
    - 可省略部分参数
    ```javascript
        var a = ['A', 'B', 'C'];
        a.forEach(function (element) {
            console.log(element);
        });
    ```

# 函数
## 函数定义
- `function f(x){...}` 同C++
- `var f = function(x){};` 注意末尾 **;** 号
- 传入的参数比定义的参数多也没有问题，传入的参数比定义的少也没有问题
```javascript
    function abs(x) {
        if (typeof x !== 'number') {
            throw 'Not a number';
        }
        if (x >= 0) {
            return x;
        } else {
            return -x;
        }
    }
```
## `arguments`
```javascript
    function abs() {
        if (arguments.length === 0) {
            return 0;
        }
        var x = arguments[0];
        return x >= 0 ? x : -x;
    }

    abs(); // 0
    abs(10); // 10
    abs(-9); // 9
```
- 注意`arguments.length` 没有`()`
## `rest` 参数 
- 由于JavaScript函数允许接收任意个参数，于是我们就不得不用arguments来获取所有参数
```javascript
    function foo(a, b) {
        var i, rest = [];
        if (arguments.length > 2) {
            for (i = 2; i<arguments.length; i++) {
                rest.push(arguments[i]);
            }
        }
        console.log('a = ' + a);
        console.log('b = ' + b);
        console.log(rest);
    }
```
- 引入了rest参数，上面的函数可以改写为：
```javascript
    function foo(a, b, ...rest) {
        console.log('a = ' + a);
        console.log('b = ' + b);
        console.log(rest);
    }

    foo(1, 2, 3, 4, 5);
    // 结果:
    // a = 1
    // b = 2
    // `Array` [ 3, 4, 5 ]

    foo(1);
    // 结果:
    // a = 1
    // b = undefined
    // `Array` []
```
- `rest`参数**只能写在最后**，前面用`...`标识
## 变量作用域与解构赋值
- 可嵌套定义函数
### 变量提升
- JavaScript的函数定义有个特点，它会先扫描整个函数体的语句，把所有申明的变量“提升”到函数顶部
```javascript
    'use strict'; //即使是strict模式，也米有什么卵用
    function foo() {
        var x = 'Hello, ' + y;
        console.log(x);
        var y = 'Bob';
    }
    foo();
```
- 因此需严格遵守“在函数内部首先申明所有变量”这一规则
```javascript
    function foo() {
        var
            x = 1, // x初始化为1
            y = x + 1, // y初始化为2
            z, i; // z和i为undefined
        // 其他语句:
        // xxxxxxxxxxxx
```
### 全局作用域 
- 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象`window`，全局作用域的变量实际上被绑定到`window`的一个属性
```javascript
    var course = 'Learn JavaScript';
    alert(course); // 'Learn JavaScript'
    alert(window.course); // 'Learn JavaScript'
```
- 顶层函数的定义也被视为一个全局变量，并绑定到`window`对象
```javascript
    function foo() {
        alert('foo');
    }
    foo(); // 直接调用foo()
    window.foo(); // 通过window.foo()调用
    window.alert(window.foo());
    window.alert('调用window.alert()');
    // 把alert保存到另一个变量:
    var old_alert = window.alert;
    // 给alert赋一个新函数:
    window.alert = function () {}
    alert('无法用alert()显示了!');
    window.alert = old_alert;
    alert('又可以用alert()了!');
```
### **名字空间**
- 全局变量会绑定到`window`上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。
- 减少冲突的一个方法是把自己的**所有变量和函数全部绑定到一个全局变量中**
```javascript
    var MYAPP = {};
    // 其他变量:
    MYAPP.name = 'myapp';
    MYAPP.version = 1.0;
    // 其他函数:
    MYAPP.foo = function () {
        return 'foo';
    };
```
- 许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等

### 局部作用域
- JavaScript的变量作用域实际上是函数内部,在for循环等语句块中是无法定义具有局部作用域的变量
```javascript
    function foo() {
        for (var i=0; i<100; i++)
            //
        i += 100; // 仍然可以引用变量i
    }
```
- `let` 申明一个块级作用域的变量
```javascript
    function foo() {
        var sum = 0;
        for (let i=0; i<100; i++) {
            sum += i;
        }
        // SyntaxError: !!!!
        i += 1;
    }
```
### 常量
- `const` `const`与`let`都具有块级作用域
```javascript
    const PI = 3.14;
    PI = 3; // 某些浏览器不报错，但是无效果！
    PI; // 3.14
```
### 解构赋值
```javascript
    var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
```
- 对数组元素进行解构赋值时，多个变量要用`[...]`括起来
```javascript
    let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
    x; // 'hello'
    y; // 'JavaScript'
    z; // 'ES6'
```
- 解构赋值还可以忽略某些元素
```javascript
    let [, , z] = ['hello', 'JavaScript', 'ES6']; // 忽略前两个元素，只对z赋值第三个元素
    z; // 'ES6'
```
- 从一个对象中取出若干属性，也可以使用解构赋值，便于快速获取对象的指定属性
```javascript
    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school'
    };
    var {name, age, passport} = person;
```
```javascript
    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school',
        address: {
            city: 'Beijing',
            street: 'No.1 Road',
            zipcode: '100001'
        }
    };
    var {name, address: {city, zip}} = person;
    name; // '小明'
    city; // 'Beijing'
    zip; // undefined, 因为属性名是zipcode而不是zip
    // 注意: address不是变量，而是为了让city和zip获得嵌套的address对象的属性:
    address; // Uncaught ReferenceError: address is not defined
```
- 使用解构赋值对对象属性进行赋值时，如果对应的属性**不存在**，变量将被赋值为`undefined`，这和引用一个不存在的属性获得undefined是一致的。如果要使用的变量名和属性名不一致，可以用`let`获取：
```javascript
    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678',
        school: 'No.4 middle school'
    };

    // 把passport属性赋值给变量id:
    let {name, passport:id} = person;
    name; // '小明'
    id; // 'G-12345678'
    // 注意: passport不是变量，而是为了让变量id获得passport属性:
    passport; // Uncaught ReferenceError: passport is not defined
```
- 解构赋值还可以使用**默认值**，这样就避免了不存在的属性返回`undefined`的问题
```javascript
    var person = {
        name: '小明',
        age: 20,
        gender: 'male',
        passport: 'G-12345678'
    };
    // 如果person对象没有single属性，默认赋值为true:
    var {name, single=true} = person;
    name; // '小明'
    single; // true
    ```
    - 如果变量已经被声明了，再次赋值的时候，正确的写法也会报语法错误
    ```javascript
        // 声明变量:
        var x, y;
        // 解构赋值:
        {x, y} = { name: '小明', x: 100, y: 200};
        // 语法错误: Uncaught SyntaxError: Unexpected token =
```
- 这是因为JavaScript引擎把`{`开头的语句当作了块处理，于是`=`不再合法。解决方法是用小括号括起来
```javascript
    ({x, y} = { name: '小明', x: 100, y: 200});
```
### 使用场景
- 交换两个变量
```javascript
    var x=1, y=2;
    [x, y] = [y, x]
```
- 快速创建对象 函数参数换成一个对象
```javascript
    function buildDate({year, month, day, hour=0, minute=0, second=0}) {
        return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
    }
    //传入的对象只需要year、month和day这三个属性：
    buildDate({ year: 2017, month: 1, day: 1 });
    // Sun Jan 01 2017 00:00:00 GMT+0800 (CST)
    buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 });
// Sun Jan 01 2017 20:15:00 GMT+0800 (CST)
```
### 方法 同C++的成员函数
```javascript
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: function () {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
    };

    xiaoming.age; // function xiaoming.age()
    xiaoming.age(); // 今年调用是25,明年调用就变成26了
```
- 与下面相同
```javascript
    function getDate(){
        vat y = new Date.getFullYear();
        return y - this.birth;
    }
    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: getAge
    };

    xiaoming.age(); // 25, 正常结果
    getAge(); // NaN
```
- `this` 指向问题！
- 在strict模式下让函数的`this`指向`undefined` ---> `'use strict';`
### `apply()` 控制`this`的指向
- 它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是`Array`，表示函数本身的参数
```javascript
    function getAge() { // 参数为空
        var y = new Date().getFullYear();
        return y - this.birth;
    }

    var xiaoming = {
        name: '小明',
        birth: 1990,
        age: getAge
    };

    xiaoming.age(); // 25
    getAge.apply(xiaoming, []); // 25, this指向xiaoming, 参数为空
```
### `call()`
- 与`apply()`区别  

    `apply()`把参数打包成`Array`再传入  
    `call()`把参数按顺序传入
```javascript
    Math.max.apply(null, [3, 5, 4]); // 5
    Math.max.call(null, 3, 5, 4); // 5
```
### 装饰器
- 利用`apply()`，我们还可以动态改变函数的行为
```javascript
    'use strict';
    var count = 0;
    var oldParseInt = parseInt; // 保存原函数

    window.parseInt = function () {
        count += 1;
        return oldParseInt.apply(null, arguments); // 调用原函数
    };
    parseInt('10');
    parseInt('20');
    parseInt('30');
    console.log('count = ' + count); // 3
```
## 高阶函数
### `map()` 定义在JavaScript的`Array`中
```javascript
    function pow(x) {
        return x * x;
    }
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
    console.log(results);

    var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr2.map(String); // ['1', '2', '3', '4', '5', '6', '7', '8', '9']
```
### `reduce()` 把一个函数作用在这个`Array`的`[x1, x2, x3...]`上，**这个函数必须接收两个参数**，把结果继续和序列的下一个元素做累积计算
- 效果：[x1, x2, x3, x4].reduce(f) = f(f(f(x1, x2), x3), x4)
```javascript
    var f = function(x, y){
        return x + y;
    }
    var arr = [1, 3, 5, 7, 9];
    arr.reduce(f); // 25
```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```

```javascript

```
