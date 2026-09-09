// 1. Функция-конструктор Student
function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; // массив для оценок
}

// 2. Метод setSubject - устанавливает предмет
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

// 3. Метод addMarks - добавляет оценки (одну или несколько)
Student.prototype.addMarks = function(...marksToAdd) {
    // Проверяем, существует ли свойство marks (не отчислен ли студент)
    if (this.marks) {
        // Добавляем все переданные оценки в массив marks
        this.marks.push(...marksToAdd);
    }
    // Если marks не существует (студент отчислен), ничего не делаем
};

// 4. Метод getAverage - вычисляет среднюю оценку
Student.prototype.getAverage = function() {
    // Проверяем, существует ли marks и есть ли в нём элементы
    if (!this.marks || this.marks.length === 0) {
        return 0;
    }
    
    // Вычисляем сумму оценок
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    
    // Возвращаем среднее арифметическое
    return sum / this.marks.length;
};

// 5. Метод exclude - исключает студента
Student.prototype.exclude = function(reason) {
    // Удаляем свойства subject и marks
    delete this.subject;
    delete this.marks;
    
    // Добавляем свойство excluded с причиной исключения
    this.excluded = reason;
};
// Создаём первого студента
let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0 (оценок пока нет)

student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// Вывод: {name: "Василиса", gender: "женский", age: 19, marks: [4, 5, 4, 5], subject: "Algebra"}

// Создаём второго студента
let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);
// Вывод: {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}

// Проверка, что отчисленному студенту нельзя добавить оценки
student2.addMarks(5, 4, 5);
console.log(student2.marks); // undefined (свойство удалено)
console.log(student2.getAverage()); // 0 (нет оценок)