function Book (title, author, nPages, isRead) {
    this.title = title,
    this.author = author,
    this.nPages = nPages,
    this.isRead = isRead
};

let myLibrary = [];

function addBookToLibrary() {
    /*
    create a new book Object
    take title from an text input
    take author from an text input
    take #pages from a number input
    take isRead from a radial button
    */

    let book = new Book();

    myLibrary.push(book);
}