// let student1 = new Student("Tony", "male", 37);
// student1.setSubject("Algebra");
// student1.addMark(5);
// student1.addMark(4);
// student1.addMark(5);

// let student2 = new Student("Buzz", "female", 35);
// student2.setSubject("Geometry");
// student2.addMark(2);
// student2.addMark(3);
// student2.addMark(2);
// student2.exclude('low grades')

// console.log(student1); 
// console.log(student2);


StudentI.setSubject("Всякая всячина"); //Добавляем предмет
StudentI.addMark(6);                  // Добавляем оценки по отдельности
StudentI.addMark(7);
StudentI.addMark(8);
StudentI.addMarks(1,2,3);             // Добавляем массив с оценками учитывая наличие ранее добавленных
StudentI.getAverage(StudentI.marks);  // Вычисляет и добавляет среднее арифмитическое по массиву оценок

StudentI.excluded ('Полный балбес');  // Удаляет студента с курса (удаляет оценки, название курса и среднее арифмитическое)


console.log(StudentI)  // все выводим в консоль для проверки своей работы
