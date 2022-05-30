// 1. Необходимо написать класс *AlarmClock* со следующими методами:

// * `constructor` - выделяет память для объекта. 
// 	* Создайте свойство для хранения коллекции звонков `alarmCollection` с начальным значением пустого массива. 
// 	* Создайте свойство `timerId` для хранения `id` таймера без начального значения.
class AlarmClock {
    constructor(timerId) {
    this.alarmCollection = []
    this.timerId = null
    }
// * `addClock` - добавляет новый звонок в коллекцию существующих. 
// 	* Принимает параметр времени в формате `HH:MM` - время, когда должно запуститься действие.
// 	* Принимает параметр функции-колбека - действие, которое должно запуститься.
// 	* Принимает параметр идентификатора создаваемого звонка.
// 	* Проверьте, передан ли параметр `id`. Если параметр не передан, выполните выброс ошибки (с помощью `throw new Error('error text')`).
// 	* Проверьте, есть ли какой-нибудь звонок с уже существующим `id`. Если есть, выведите ошибку (с помощью `console.error()`) и завершите выполнение метода. Программа должна продолжать работать, но звонок не должен быть добавлен.
// 	* Перед завершением метода добавьте в массив звонков объект со свойствами `id`, `time`, `callback`.
addClock (time, callback, id) {
        
    if (id == undefined) throw new Error('error id')
    const poiskId = this.alarmCollection.findIndex (item => item.id === id)
    if (poiskId != -1) {
        return console.error()
    }
    const mass = {time: time, callback: callback, id: id}
    this.alarmCollection.push(mass)
    
}

// * `removeClock` - удаляет определённый звонок.
// 	* Принимает `id` звонка, который следует удалить.
// 	* Удалите из массива звонков тот, у которого `id` совпадает с текущим. Например, можно использовать метод `filter`.
// 	* Верните логическое значение об успешности/провале удаления объекта звонка из общего массива.

removeClock(id) {
    const poiskId = this.alarmCollection.findIndex (item => item.id === id);
    if (poiskId != -1) {
        this.alarmCollection.splice(poiskId, 1)
        return true
    }
    else {
        return false
    }   
    }

// * `getCurrentFormattedTime` - возвращает текущее время в строковом формате `HH:MM`.

getCurrentFormattedTime() {
    const times = new Date().toLocaleTimeString().slice(0,-3)
    return times
    }

// * `start` - запускает все звонки
// 	* Создайте функцию проверки (`checkClock`), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
// 	* Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
// 	* В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию `checkClock`.
// 	* Результат функции `setInterval` сохраните в свойстве идентификатора текущего таймера.

     start() {
          if (this.timerId == null) {
              this.timerId = setInterval(() => {this.alarmCollection.forEach((mass) => checkClock(mass, this))}, 1000); 
        }
     }

// * `stop` - останавливает выполнение всех звонков
// 	* Сделайте проверку существования идентификатора текущего таймера.
// 	* Если у идентификатора текущего таймера есть значение, то вызовите функцию `clearInterval` для удаления интервала, а так же удалите значение из свойства "идентификатор текущего таймера".
    stop () {
        if (!!this.timerId) {
            clearInterval(this.timerId)
            clearTimeout(this.timerId)
            // console.log (this.timerId)
            this.timerId = null
        }
    }

// * `printAlarms` - печатает все звонки
// 	* С помощью метода `forEach` выведите информацию о каждом звонке (`id` и `time`).
    printAlarms () {
        this.alarmCollection.forEach ((mass) => console.log ("id звонка = " + mass.id + " Время звонка: " + mass.time))
    }

// * `clearAlarms` - удаляет все звонки
// 	* Вызывает метод остановки интервала.
// 	* Удаляет все звонки.
    clearAlarms () {
        this.stop
        this.alarmCollection = []
    }

}

function checkClock (mass, alarmClocks) {
    if (alarmClocks.getCurrentFormattedTime() === mass.time) {
         mass.callback()
    }
    // console.log ("test")
}


// 2. Напишите пример использования класса *AlarmClock* (реализуйте и запустите функцию `testCase`): 

function testCase() {
    // * Создайте объект класса `AlarmClock`.
    clock = new AlarmClock();
    // let timeS = new Date().getHours() + ":" + (new Date().getMinutes()+1)// new Date().toLocaleTimeString().slice(0,-3)

    // * Добавьте в созданный объект новый звонок с текущим временем и колбеком вывода текста на консоль. Так, чтобы после запуска, функция вывода *выполнилась несколько раз*.
    clock.addClock(
        // new Date().toLocaleTimeString().slice(0,-3),
        new Date().getHours() + ":" +new Date().getMinutes(),
        f => { for (let i = 0; i < 4; i++ ) {console.log ("Доброе утро "+ i)}
         return
         }, 
        1
    )
    // * Добавьте ещё один звонок со временем +1 минуты от текущего времени и колбеком: вывода текста на консоль, а так же удалением этого звонка. Так, чтобы после запуска функция вывода *выполнилась один раз, а потом удалилась*.
    clock.addClock(
        // new Date().toLocaleTimeString().slice(0,-3),
        new Date().getHours() + ":" + (new Date().getMinutes()+1),
        f => { console.log ("Добрый день")
            clock.removeClock(2)
            return
        },
        2
    )
    
    // * Добавьте ещё один звонок со временем +2 минут от текущего времени и колбеком: вывода текста на консоль, а так же остановки всех звонков, очистки всех звонков и выводом всех звонков. Так, чтобы после запуска функция вывода *выполнилась один раз, потом остановился интервал, все звонки очистились, и ничего не вывелось*.
    clock.addClock(
        // new Date().toLocaleTimeString().slice(0,-3),
        new Date().getHours() + ":" + (new Date().getMinutes()+2),
        f => { console.log ("Добрый вечер")
            clock.printAlarms()
            clock.clearAlarms()

            // clock.alarmCollection = []
            clock.printAlarms()
        }, 
        3
    )
    // * Напечатайте все звонки (должно вывестись 3 звонка).
    console.log (clock)
    clock.printAlarms()
    // * Запустите выполнение ваших звонков.
    clock.start()
}

testCase()

    // console.log (clock.addClock("11:59", f => f, 1))
    // console.log (clock.addClock("12:00", f => f, 2))
    // console.log (clock.addClock("16:45", f => f, 3))
    // console.log (clock.addClock("16:45", f => f, 4))
    // clock.printAlarms()
    // console.log (clock)
    // //console.log (clock.removeClock(1))
    // console.log (clock)
    // console.log (clock.getCurrentFormattedTime())
    // console.log(clock.timerId)
    // clock.start()
    // clock.stop()
    // clock.clearAlarms()
    // clock.printAlarms()

