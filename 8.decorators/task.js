// Напишите усовершенствованный кэширующий декоратор `cachingDecoratorNew`, 
// аналогичный рассмотренному на лекции, таким образом, чтобы он 
// кэшировал только последние 5 **различных** вызовов функции. 
// То есть чтобы кэш мог хранить только 5 значений.
// const cache = [];

function cachingDecoratorNew(func) {
//   // Ваш код

    const cache = {};
    let cachearry = [];

    return function (...args) {
    const hash = args.join(',');
  

     let result = cache[hash];
    if (result === undefined) {
      cache[hash] = result = func.call(this, ...args);
      result = ('Вычисляем: ' + result);
      if(cachearry.length < 5) {
        cachearry.push(args)
        }
       else {
        let deletStr = cachearry.shift().join(',')
        delete cache[deletStr]
        cachearry.push(args)
       } 
    } else {
      result = ('Из кэша: ' + result);
    }
      console.log (cache)
      return String(result);  
    };
   };



  //  const calculation = (a, b, c, d) => a ** 2 + b ** 2 + c ** 2 + d ** 2;

  //  const calculationCached = cachingDecoratorNew(calculation);
  //  calculationCached(3, 2, 3, 4); // Вычисляем: 38
  //  calculationCached(3, 2, 3, 4); // Из кеша: 38;



// let cachearry = [];
// console.log (sum(1, 5)); // из кеша 6
// console.log (sum(10, 200)); // вычисляем 210
// console.log (sum(1, 5)); // из кеша 6
// console.log (sum(10, 200)); // вычисляем 210
// console.log (sum(1, 300)); // из кеша 6
// console.log (sum(10, 400));
// console.log (sum(1, 5)); // из кеша 6
// console.log (sum(10, 200));
// console.log (sum(1, 300)); // из кеша 6
// console.log (sum(10, 400));

function debounceDecoratorNew(f, ms) {

  let timerId;
    return function (...args) {
      if (ms == 0 ||typeof ms == "undefined" ) {
        f.apply(this, args)
        // console.timeEnd("time")
      }
    clearTimeout(timerId);
    timerId = setTimeout(() => {
    f.apply(this, args);
    // console.timeEnd("time"); // (2)
    }, ms);
  }
 };


 const showCoords = (x, y) => console.log(`Клик:(${x},${y})`);
 const showCoordsDebounced = debounceDecoratorNew(showCoords, 0);
 console.time("time"); //(1)
//  setTimeout(() => showCoordsDebounced(10, 5));
//  setTimeout(() => showCoordsDebounced(20, 10), 980);
 setTimeout(() => showCoordsDebounced(30, 30), 0); // "Клик: 30,30" через 2 секунды (примерно)



// function debounceDecorator2(func) {
  // Ваш код
  function debounceDecorator2(f, ms) {

    let timerId;
    let count = 0;
      return function (...args) {
        ++ count // = count + 1
        if (ms == 0 ||typeof ms == "undefined" ) {
          f.apply(this, args)
          // console.timeEnd("time")
        }
      clearTimeout(timerId);
      timerId = setTimeout(() => {
      f.apply(this, args);
      // console.timeEnd("time"); // (2)
      }, ms);
      console.log ("Количество вызовов:  " + count)
    }

   };


const spyDecorator = func => {
 function wrapper(...args) {
 wrapper.history.push(args);
 return func.call(this, ...args);
 }
 wrapper.history = []; // Почему можно так делать?
 return wrapper;
};