# JS: Асинхронное программирование

Таймеры

Цель: Рассмотреть механизм таймеров, предоставляемый средой исполнения JS. Изучить простой пример использования таймеров для выполнения синхронных задач асинхронно.

Задание<br/>
×<br/>
asyncFilter.js<br/>
Реализуйте и экспортируйте по умолчанию функцию asyncFilter.

const coll = [10, 53, true, false, '', NaN, 22];<br/>
asyncFilter(coll, x => x, result => {<br/>
  console.log(result);<br/>
  // [10, 53, true, 22];<br/>
});
