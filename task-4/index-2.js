class Book {
  constructor(title, author, isbn, status = 'available') {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.status = status;
  }
}
class Library {
  constructor() {
    this._books = {};
  }
  addBook(book) {
    this._books[book.isbn] = book;
  }
  borrowBook(isbn) {
    //если такой книги нет, то ошибка
    if (!this._books[isbn]) throw Error("Такой книги нет");
    //если такая книга есть, но недоступна, вернем null
    if (this._books[isbn].status === "unavailable") {
      return null;
    }
    //меняем статус книги перед выдачей
    this._books[isbn].status = "unavailable";
    //возвращаем книгу
    return this._books[isbn];
  }
  returnBook(isbn) {
    //если такой книги нет, выдаем ошибку
    if (!this._books[isbn]) throw Error("Такой книги нет");
    //меняем статус на доступный
    this._books[isbn].status = "available";
  }
  listAvailableBooks() {
    //возвращаем списком все доступные книги
    return Object.values(this._books).filter(
      (item) => item.status === "available"
    );
  }
}

const book1 = new Book("jhi", "1", "1")
const library = new Library()
library.addBook(book1)
const book2 = new Book("jhi", "2", "2");
library.addBook(book2)
library.borrowBook("2")
console.log(library.listAvailableBooks())


