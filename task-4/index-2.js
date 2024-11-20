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
    this.books = {};
  }
  addBook(book) {
    this.books[book.isbn] = book;
  }
  borrowBook(isbn) {
    if (!this.books[isbn]) throw Error("Такой книги нет");
    if (this.books[isbn].status === "unavailable") {
      return null;
    }
    this.books[isbn].status = "unavailable";
    return this.books[isbn];
  }
  returnBook(isbn) {
    if (!this.books[isbn]) throw Error("Такой книги нет");
    this.books[isbn].status = "available";
  }
  listAvailableBooks() {
    return Object.values(this.books).filter(
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

