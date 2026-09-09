// задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    // Метод для улучшения состояния
    fix() {
        this.state *= 1.5;
    }

    // Геттер для state
    get state() {
        return this._state;
    }

    // Сеттер для state с валидацией
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
}
// Журнал
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// Книга (базовый класс для книг)
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// Роман
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

// Фантастика
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

// Детектив
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
// задача  2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Добавление книги, если состояние > 30
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // Поиск книги по любому полю
    findBookBy(type, value) {
        const foundBook = this.books.find(book => book[type] === value);
        return foundBook || null;
    }

    // Выдача книги по названию
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        
        if (bookIndex === -1) {
            return null;
        }

        const book = this.books[bookIndex];
        this.books.splice(bookIndex, 1);
        return book;
    }
}
// Создаём библиотеку
const library = new Library("Библиотека имени Ленина");

// Добавляем книги
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

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
console.log("Количество книг до выдачи: " + library.books.length); // 4

// Выдаём книгу
const borrowedBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // 3

// Повреждаем книгу
borrowedBook.state = 20;
console.log("Состояние книги после повреждения: " + borrowedBook.state); // 20

// Восстанавливаем книгу
borrowedBook.fix();
console.log("Состояние книги после восстановления: " + borrowedBook.state); // 30

// Пытаемся добавить обратно (не добавится, т.к. состояние <= 30)
library.addBook(borrowedBook);
console.log("Количество книг после попытки возврата: " + library.books.length); // 3