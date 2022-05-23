// Задача N1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }


    fix() {
        this.state = this.state*1.5
    }

    set state (value) {
        if (value < 0 ){
            this.state  = 0;
        }
        else if (value > 100){
            this.state  = 100;
        }
        else {
            this._state  = value;
        }
    }    

    get state () {
        return this._state
    }

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount)
        this.type = "magazine";
    }

}

class Book extends PrintEditionItem {
    constructor( author, name, releaseDate, pagesCount) {

        super (name, releaseDate, pagesCount)
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "novel";
    }
    
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "fantastic";
    }
    
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount)
        this.type = "detective";
    }
    
}

 
// Задача N2

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book, state = 100) {
        if (state > 30) {
            this.books.push(book);
        }
    }

    findBookBy (type, value) {

         let result = this.books.find (item => item[type] === value);
        //  console.log (result)
        if(!!result)
            return result;
        else
            return result = null;
     
        }

     giveBookByName(bookName) {
        let result = this.books.find (item => item.name === bookName);
        if(!!result){
            let deleteResultId = this.books.findIndex (item => item.name === bookName);
            this.books.splice([deleteResultId], 1)
            return result;
        }
        else {
            return result = null;
        }
     }
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log (library.books)
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



// Задача N3

// class Student {
//     constructor(name){
//         this.name  = name;
//         this.predmetNames = [];
//     }

//     addMark(mark,predmetName) {
//         let result = this.find (item => item.predmetNames === predmetName);
//         if predmetName
//         this.predmetNames.push(predmetName)
        
//         ) {
//             this.marks = [];
//             this.marks.push(mark);  
//             }
//            else {
//           // добавить вторую и последующие оценки в массив marks
//              this.marks.push(mark);  
//          }
//       }

//   }

//   class Predmet {
//     constructor (predmetName){
//         this.predmetName  = predmetName;
//         this.mark = [];
//     }
//   }



// const student = new Student("Олег Никифоров");
// student.addMark(5, "algebra");
// student.addMark(5, "algebra");
// student.addMark(5, "geometry");
// student.addMark(4, "geometry");
// student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
// student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
// student.getAverageBySubject("biology"); // Несуществующий предмет
// student.getAverage(); // Средний балл по всем предметам 4.75
// student.exclude("Исключен за попытку подделать оценки");


//   function Student(name, gender, age) {
//     // Ваш код
//     this.name  = name;
//     this.gender = gender;
//     this.age = age;
//     this.subjectName = [];
// }

// const StudentI = new Student("Ivan", "men", 18);
// const StudentM = new Student("Masha", "women", 21);
// const StudentN = new Student("Nikola", "men", 35);

// Student.prototype.setSubject = function (subjectName) {
//     this.subject = subjectName;
// }

// Student.prototype.addMark = function (mark) {
//   // Создает массив с  оценками
//   // Добавляет первую оценку mark в массив marks
//    if(this.marks === undefined) {
//       this.marks = [];
//       this.marks.push(mark);  
//       }
//      else {
//     // добавить вторую и последующие оценки в массив marks
//        this.marks.push(mark);  
//    }
// }

// Student.prototype.addMarks = function (...mark) {
//   // добавить массив оценок с учетом наличия предыдущих в массив marks   
//     if(this.marks === undefined) {
//       this.marks = [];
//       this.marks.push.apply(this.marks, mark);  
//       }
//     else {
//       this.marks.push.apply(this.marks, mark);  
//     }
// }

//   Student.prototype.getAverage = function (marks) {
//     //Вычисляет среднее ариифмтическое average
//       let average = this.marks.reduce((acc, item, idx, arr) => {
//       acc += item;
//       if (idx === arr.length - 1) {
//         // this.average  = acc / arr.length;
//         return this.average  = acc / arr.length;
//       } 
//       else {
//         return acc;
//       }
//     })
//     return average
//   }

  

//   Student.prototype.excluded = function (reason) {
//     delete this.subject  // Удаляет название предмета
//     delete this.marks        // Удаляет массив оценок
//    // delete this.average      // Удаляет среднее арифмитическое   
//     this.excluded = reason;  // Ставит пометку об отчислении
//   }