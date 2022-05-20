function Student(name, gender, age) {
    // Ваш код
    this.name  = name;
    this.gender = gender;
    this.age = age;
}
const StudentI = new Student("Ivan", "men", 18);
const StudentM = new Student("Masha", "women", 21);
const StudentN = new Student("Nikola", "men", 35);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  // Создает массив с  оценками
  // Добавляет первую оценку mark в массив marks
   if(this.marks === undefined) {
      this.marks = [];
      this.marks.push(mark);  
      }
     else {
    // добавить вторую и последующие оценки в массив marks
       this.marks.push(mark);  
   }
}

Student.prototype.addMarks = function (...mark) {
  // добавить массив оценок с учетом наличия предыдущих в массив marks   
    if(this.marks === undefined) {
      this.marks = [];
      this.marks.push.apply(this.marks, mark);  
      }
    else {
      this.marks.push.apply(this.marks, mark);  
    }
}

  Student.prototype.getAverage = function (marks) {
    //Вычисляет среднее ариифмтическое average
      marks.reduce((acc, item, idx, arr) => {
      if (idx === arr.length - 1) {
        return  this.average  = (acc + item) / arr.length;
      } 
      else {
        return acc + item;
      }
    })
    return
  }

  Student.prototype.excluded = function (reason) {
    delete this.subject  // Удаляет название предмета
    delete this.marks        // Удаляет массив оценок
    delete this.average      // Удаляет среднее арифмитическое   
    this.excluded = reason;  // Ставит пометку об отчислении
  }

